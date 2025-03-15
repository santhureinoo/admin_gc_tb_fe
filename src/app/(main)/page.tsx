"use client";
import {
  getApplications,
  getDashboarSummary,
  updateApplicationsStatus,
} from "@/actions/applications";
import { ActionButton } from "@/components/common/buttons";
import {
  LicenceFilterDrawer,
  UserFilterDrawer,
} from "@/components/common/drawer";
import Dropdown from "@/components/common/dropdown";
import { InfoCardList } from "@/components/common/info-card";
import Pagination from "@/components/common/pagination";
import { StatusBarList } from "@/components/common/status-bar";
import CustomTable from "@/components/common/table";
import { SearchTextField } from "@/components/common/text-field";
import { APPLICATIONS_STATUS, PAGINATION_PER_PAGE } from "@/constants";
import {
  addAllApplications,
  addApplications,
  clearApplications,
  removeApplications,
} from "@/redux/selectedApplicationsSlice";
import { useAppSelector } from "@/redux/store";
import { getPaginationTotalPages, openModal } from "@/utils";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function Home() {
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
      <button onClick={() => setShwoDrawer(true)}>Open Drawer</button>
      <div className="w-full bg-neutralGrey0 h-[50px]"></div>
      <div className="px-[24px] py-[20px]">
        <div className="flex items-center justify-between">
          <p className="text-black font-[400] text-[14px] flex-1">Users</p>
          <ActionButton name="Upload CSV" />
        </div>
        <UserFilterDrawer id={"user-filter-drawer"} buttonLabel={"User Filter"}>
          <li>Hello world</li>
          <li>Hello world</li>
        </UserFilterDrawer>
        <LicenceFilterDrawer
          id={"licence-filter-drawer"}
          buttonLabel={"Licence Filter"}
        >
          <li>LicenceFilterDrawer</li>
          <li>LicenceFilterDrawer world</li>
        </LicenceFilterDrawer>
        <div className="bg-white p-[24px] my-[16px] min-h-screen">
          <h3 className="text-neutralGrey800 text-[20px] font-[700] mb-[24px]">
            Users
          </h3>
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
          <div className="flex flex-col items-start xl:flex-row xl:items-center justify-between">
            <SearchTextField
              onChange={(value) => setSearchApplicationText(value)}
              placeholder="Search User"
            />
            <div className="flex items-center gap-3">
              {/* <Dropdown
                position={"dropdown-end"}
                value="All applicants"
                dropdownList={[
                  { name: "All applicants", value: "All applicants" },
                  {
                    name: "Australian Residents",
                    value: "Australian Residents",
                  },
                  {
                    name: "Non-Australian Residents",
                    value: "Non Australian Residents",
                  },
                ]}
                onSelect={(selectedValue) => {
                  if (selectedValue == "All applicants") {
                    setIsAuResident(null);
                  }
                  if (selectedValue == "Australian Residents") {
                    setIsAuResident(true);
                  }
                  if (selectedValue == "Non Australian Residents") {
                    setIsAuResident(false);
                  }
                }}
                notStatus
              /> */}
              {/* Move to */}
              {/* {selectedApplications.length > 0 ? (
                <Dropdown
                  fixLabel="Move To"
                  position={"dropdown-end"}
                  value=""
                  dropdownList={[
                    // { name: "Move To", value: "Move to" },
                    { name: "Approve", value: "APPROVED" },
                    {
                      name: "Interview",
                      value: "INTERVIEW",
                    },
                    { name: "Reject", value: "REJECT" },
                  ]}
                  onSelect={openModal}
                />
              ) : null} */}
            </div>
          </div>
          <CustomTable
            selectedRowsId={selectedApplications}
            headersList={[
              {
                name: "Name",
                bodyKeyName: "applicantName",
                sortable: true,
                sortableType: "string",
              },
              {
                name: "Email",
                bodyKeyName: "applicantName",
                sortable: true,
                sortableType: "number",
              },
              {
                name: "Status",
                bodyKeyName: "phone",
                sortable: true,
                ComponentName: "Dropdown",
              },
              {
                name: "Company name",
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
    </div>
  );
}
