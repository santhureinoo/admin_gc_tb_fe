"use client";
import {
  getApplications,
  getDashboarSummary,
} from "@/actions/applications";
import { ActionButton, CancelButton } from "@/components/common/buttons";
import {
  LicenceFilterDrawer,
} from "@/components/common/drawer";
import { ApproveModal } from "@/components/common/modals";
import Pagination from "@/components/common/pagination";
import CustomLicenseKeyTable from "@/components/common/table/CustomLicenseKeyTable";
import { SearchTextField } from "@/components/common/text-field";
import { APPLICATIONS_STATUS, MODALS, PAGINATION_PER_PAGE } from "@/constants";
import { openModal } from "@/utils";
import {
  addAllApplications,
  addApplications,
  clearApplications,
  removeApplications,
} from "@/redux/selectedApplicationsSlice";
import { useAppSelector } from "@/redux/store";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import GenerateLicenseModal from "@/components/common/modals/GenerateLicenseModal";

export default function LicenseKeys() {
  const [dataCounts, setDataCounts] = useState<number>(0);
  const [searchApplicationText, setSearchApplicationText] = useState("");
  const [applications, setApplications] = useState([1, 2, 2, 3, 3, 3, 4, 4]);
  const [dashboardSummary, setDashboardSummary] = useState<any>({});
  const [currentStatus, setCurrentStatus] =
    useState<APPLICATIONS_STATUS>("PENDING");
  const [currentSelectedPage, setCurrentSelectedPage] = useState<number>(1);

  const [isAuResident, setIsAuResident] = useState<null | boolean>(null);
  // redux
  const dispatch = useDispatch();
  const { selectedApplications, isStatusChanged } = useAppSelector(
    (state) => state.selectedApplications
  );

  const fetchDashboardApplications = async () => {
    setApplications([]);
    const data = await getApplications({
      filter: {
        status: currentStatus, // application status [PENDING, MISSING_INFO, REUPLOADED, APPROVED, INTERVIEW]
        isAuResident: isAuResident, // application resident type [null -> all, true -> AU Resident, false -> non-AU Resident]
      },
      page: {
        currentPage: currentSelectedPage, // current user seleced page
        pageSize: PAGINATION_PER_PAGE, // number of applications to be fetch per page
      },
      search: searchApplicationText, // seaerch by FirstName, LastName, Phone, AppliedPosition
    });
    setApplications(data);
  };

  const fetchDashboardSummary = async () => {
    const data = await getDashboarSummary({
      filter: {
        isAuResident: isAuResident, // application resident type [null -> all, true -> AU Resident, false -> non-AU Resident]
      },
      search: "", // seaerch by FirstName, LastName, Phone, AppliedPosition
    });
    setDashboardSummary(data);
    setDataCounts(data?.FILTERED_PENDING);
  };

  const handleClickCheckBox = (id: number, applicationStatus: string) => {
    const duplicateId = selectedApplications.find((el) => el == id);

    if (duplicateId == undefined) {
      dispatch(
        addApplications({ id: id, applicationStatus: applicationStatus })
      );
    }
    if (duplicateId) {
      dispatch(removeApplications(id));
    }
  };

  const handleClickAllCheckBox = () => {
    const allApplicationsId = applications.map((app: any) => app.applicationId);

    if (selectedApplications.length > 0) {
      dispatch(clearApplications());
    } else {
      dispatch(addAllApplications(allApplicationsId));
    }
  };

  useEffect(() => {
    // fetchDashboardApplications();
    // fetchDashboardSummary();
    // dispatch(clearApplications());
  }, [searchApplicationText, isStatusChanged, isAuResident]);

  useEffect(() => {
    // fetchDashboardApplications();
  }, [currentStatus, currentSelectedPage]);
  const [showDrawer, setShwoDrawer] = useState(false);

  return (
    <div className="min-h-screen bg-[#F6F6F6] flex-1">
      <div className="w-full bg-neutralGrey0 h-[50px]"></div>
      <div className="px-[24px] py-[20px]">
        <div className="flex items-center justify-between">
        </div>
        {/* <UserFilterDrawer id={"user-filter-drawer"} buttonLabel={"User Filter"}>
          <li>Hello world</li>
          <li>Hello world</li>
        </UserFilterDrawer> */}
        {/* <LicenceFilterDrawer
          id={"licence-filter-drawer"}
          buttonLabel={"Licence Filter"}
        >
          <li>LicenceFilterDrawer</li>
          <li>LicenceFilterDrawer world</li>
        </LicenceFilterDrawer> */}
        <div className="bg-white p-[24px] my-[16px] min-h-screen">
          <div className="flex items-center justify-between">
            <h3 className="text-neutralGrey800 text-[20px] font-[700] mb-[24px]">
              License Keys Management
            </h3>
            <ActionButton onClick={()=> openModal(MODALS.generateLicenseModalId)} name="+ Generate License Key" />
          </div>
          {/* <InfoCardList infos={dashboardSummary} /> */}
          {/* <StatusBarList
            activeValue={currentStatus}
            statusBarList={[
              {
                name: "Pending",
                value: "PENDING",
                count: dashboardSummary?.FILTERED_PENDING,
              },
              {
                name: "Missing Infos",
                value: "MISSING_INFO",
                count: dashboardSummary?.FILTERED_MISSING_INFO,
              },
              {
                name: "Reuploaded",
                value: "REUPLOADED",
                count: dashboardSummary?.FILTERED_REUPLOADED,
              },
              {
                name: "Approved",
                value: "APPROVED",
                count: dashboardSummary?.FILTERED_APPROVED,
              },
              {
                name: "Interview",
                value: "INTERVIEW",
                count: dashboardSummary?.FILTERED_INTERVIEW,
              },
            ]}
            hasCount
            setActiveStatusFunc={(status) => {
              setCurrentStatus(status);
              setCurrentSelectedPage(1); // This is for to reset current Selected pagination to first page (when we change active status)
            }}
            setDataCounts={(count) => {
              setDataCounts(count);
            }}
          /> */}
          <div className="flex flex-col  items-start xl:flex-row xl:items-center justify-between">
            <div className="flex flex-row w-full items-center justify-between">
              <SearchTextField
                onChange={(value) => setSearchApplicationText(value)}
                placeholder="Search Company"
              />
              <div className="w-[200px]">
                <LicenceFilterDrawer
                id={"user-filter-drawer"}
                buttonLabel={"Filter"}
              >
                <div className="flex flex-col gap-2 border-b py-[16px]">
                  <h3 className="text-neutralGrey-grey600 text-[18px] font-bold">
                    Filters
                  </h3>
                  <h3 className="text-neutralGrey-grey600 text-[16px]">
                    User Roles
                  </h3>
                  <select
                    defaultValue="Pick a color"
                    className="select w-full bg-transparent border border-[#C4C4C4]"
                  >
                    <option disabled={true}>Select User Role</option>
                    <option>Consumer</option>
                    <option>Coordinator</option>
                    <option>Care Worker</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2 border-b py-[16px]">
                  <h3 className="text-neutralGrey-grey600 text-[16px]">
                    Plan Periods
                  </h3>
                  <select
                    defaultValue="Pick a color"
                    className="select w-full bg-transparent border border-[#C4C4C4]"
                  >
                    <option disabled={true}>Select plan period</option>
                    <option>3 months</option>
                    <option>6 months</option>
                    <option>12 months</option>
                    <option>24 months</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2 border-b py-[16px]">
                  <h3 className="text-neutralGrey-grey600 text-[16px]">
                    Created Date Filter
                  </h3>
                  <div
                    style={{position: "relative"}}
                    className={`rounded-corner-radius-corner-radius-4 border-[1px] border-solid flex flex-row items-center justify-start py-[9px] px-[11px] gap-3 text-sm text-neutral-500 font-paragraph-small-regular mq450:flex-wrap w-full`}>
                    <input
                      className="border-none outline-none bg-transparent h-[26px] w-full flex-1 flex flex-row items-center justify-start font-body-2 font-medium text-base text-neutral-grey-700"
                      placeholder={"Start Date"}
                      type={"date"}
                      min={new Date().toISOString().split("T")[0]}
                      style={{ boxShadow: "none" }}
                    />
                  </div>
                  <div
                    style={{position: "relative"}}
                    className={`rounded-corner-radius-corner-radius-4 border-[1px] border-solid flex flex-row items-center justify-start py-[9px] px-[11px] gap-3 text-sm text-neutral-500 font-paragraph-small-regular mq450:flex-wrap w-full`}>
                    <input
                      className="border-none outline-none bg-transparent h-[26px] w-full flex-1 flex flex-row items-center justify-start font-body-2 font-medium text-base text-neutral-grey-700"
                      placeholder={"Start Date"}
                      type={"date"}
                      min={new Date().toISOString().split("T")[0]}
                      style={{ boxShadow: "none" }}
                    />
                  </div>
                </div>
                <div className="flex w-full flex-row justify-between mt-4">
                  <CancelButton name="Reset" />
                  <ActionButton name="Apply Filter" />
                </div>
              </LicenceFilterDrawer>
              </div>
              
            </div>
          </div>
          <CustomLicenseKeyTable
            selectedRowsId={selectedApplications}
            headersList={[
              {
                name: "Company Name",
                bodyKeyName: "companyName",
                sortable: true,
                sortableType: "string",
              },
              {
                name: "User Role",
                bodyKeyName: "applicantName",
                sortable: true,
                sortableType: "number",
              },
              {
                name: "Plan Period",
                bodyKeyName: "phone",
                sortable: true,
              },
              {
                name: "Total License Keys",
                bodyKeyName: "createdDate",
                sortable: true,
              },
              {
                name: "Created Date",
                bodyKeyName: "createdDate",
                sortable: true,
              },
            ]}
            data={applications}
            sortingOnClick={(data) => {
              const newData = data;
              setApplications(() => newData);
            }}
            checkBoxOnClick={handleClickCheckBox}
            allCheckBoxOnClick={handleClickAllCheckBox}
          />
          <Pagination
            totalCounts={dataCounts}
            setCurrentSelectedPage={setCurrentSelectedPage}
            currentSelectedPage={currentSelectedPage}
          />
        </div>
      </div>
      <GenerateLicenseModal modalId={MODALS.generateLicenseModalId} />
    </div>
  );
}
