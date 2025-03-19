"use client";

import { ActionButton, CancelButton } from "@/components/common/buttons";
import {
  LicenceFilterDrawer,
} from "@/components/common/drawer";
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
import { PLAN_PERIODS, USER_ROLES } from "@/constants";
import { useForm } from "react-hook-form";
import { useAppSelector } from "@/redux/store";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import GenerateLicenseModal from "@/components/common/modals/GenerateLicenseModal";
import { getCompanyList } from "@/actions/license";
import { useRouter } from "next/navigation";

export default function LicenseKeys() {
  const [dataCounts, setDataCounts] = useState<number>(0);
  const [companyNameSearch, setCompanyNameSearch] = useState("");
  const [companies, setCompanies] = useState([]);
  const [dashboardSummary, setDashboardSummary] = useState<any>({});
  const [currentStatus, setCurrentStatus] =
    useState<APPLICATIONS_STATUS>("PENDING");
    const router = useRouter();
  const [currentSelectedPage, setCurrentSelectedPage] = useState<number>(1);

  const [isAuResident, setIsAuResident] = useState<null | boolean>(null);
  // redux
  const dispatch = useDispatch();
  const { selectedApplications, isStatusChanged } = useAppSelector(
    (state) => state.selectedApplications
  );
  type LicenseFilterFields = {
    period?: number | null,
    role?: string | null,
    startDate?: Date | null, // dd/mm/yyyy format
    endDate?: Date | null    // dd/mm/yyyy format
  }
  const {
    register,
    handleSubmit,
    control,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<LicenseFilterFields>();

  const fetchCompanyList = async () => {
    let period = getValues('period')
    const data = await getCompanyList({
    period: Number(period),
    role: getValues('role'),
    createdDate: {
      startDate: getValues('startDate'),
      endDate: getValues('endDate'),
    },
    currentPage: currentSelectedPage, // current user seleced page
    pageSize: PAGINATION_PER_PAGE, // number of applications to be fetch per page 
    search: companyNameSearch, // seaerch by FirstName, LastName, Phone, AppliedPosition
    });
    setDataCounts(data?.totalCount)
    setCompanies(data?.companyList);
    console.log("this is company data", data.companyList)
  };

  const handleViewCompanyDetails = (companyId: any) => {
    router.push(`/companyDetail/${companyId}`);
  };

  const resetFilter = () => {
    setValue('period', PLAN_PERIODS[0].value)
    setValue('role', USER_ROLES[0].value)
    setValue('startDate', null),
    setValue('endDate', null)
  }
  //set default value for filter
  useEffect(() => {
    setValue('period', PLAN_PERIODS[0].value)
    setValue('role', USER_ROLES[0].value)
    setValue('startDate', null),
    setValue('endDate', null)
  },[])
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
    const allApplicationsId = companies.map((app: any) => app.applicationId);

    if (selectedApplications.length > 0) {
      dispatch(clearApplications());
    } else {
      dispatch(addAllApplications(allApplicationsId));
    }
  };

  useEffect(() => {
    fetchCompanyList();
  }, [currentStatus, currentSelectedPage]);
  const [showDrawer, setShwoDrawer] = useState(false);

  return (
    <div className="min-h-screen bg-[#F6F6F6] flex-1">
      <div className="w-full bg-neutralGrey0 h-[50px]"></div>
      <div className="px-[24px] py-[20px]">
        <div className="flex items-center justify-between"></div>
        <div className="bg-white p-[24px] my-[16px] min-h-screen">
          <div className="flex items-center justify-between">
            <h3 className="text-neutralGrey800 text-[20px] font-[700] mb-[24px]">
              License Keys Management
            </h3>
            <ActionButton
              onClick={() => openModal(MODALS.generateLicenseModalId)}
              name="+ Generate License Key"
            />
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
                onChange={(value) => setCompanyNameSearch(value)}
                placeholder="Search Company"
                handleEnterKey={fetchCompanyList}
              />
              <form
                className="w-[200px]"
                onSubmit={handleSubmit(fetchCompanyList)}
              >
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
                      {...register("role", {
                        required: "User role is required",
                      })}
                      className="select w-full bg-transparent border border-[#C4C4C4]"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select User Role
                      </option>
                      {USER_ROLES.map((role) => (
                        <option key={role.value} value={role.value}>
                          {role.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-2 border-b py-[16px]">
                    <h3 className="text-neutralGrey-grey600 text-[16px]">
                      Plan Periods
                    </h3>
                    <select
                      {...register("period", {
                        required: "Period is required",
                      })}
                      className="select w-full bg-transparent border border-[#C4C4C4]"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select Period
                      </option>
                      {PLAN_PERIODS.map((period) => (
                        <option key={period.value} value={period.value}>
                          {period.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-2 border-b py-[16px]">
                    <h3 className="text-neutralGrey-grey600 text-[16px]">
                      Created Date Filter
                    </h3>
                    <div
                      style={{ position: "relative" }}
                      className={`rounded-corner-radius-corner-radius-4 border-[1px] border-solid flex flex-row items-center justify-start py-[9px] px-[11px] gap-3 text-sm text-neutral-500 font-paragraph-small-regular mq450:flex-wrap w-full`}
                    >
                      <input
                        className="border-none outline-none bg-transparent h-[26px] w-full flex-1 flex flex-row items-center justify-start font-body-2 font-medium text-base text-neutral-grey-700"
                        placeholder={"Start Date"}
                        type={"date"}
                        {...register("startDate")}
                        style={{ boxShadow: "none" }}
                      />
                    </div>
                    <div
                      style={{ position: "relative" }}
                      className={`rounded-corner-radius-corner-radius-4 border-[1px] border-solid flex flex-row items-center justify-start py-[9px] px-[11px] gap-3 text-sm text-neutral-500 font-paragraph-small-regular mq450:flex-wrap w-full`}
                    >
                      <input
                        className="border-none outline-none bg-transparent h-[26px] w-full flex-1 flex flex-row items-center justify-start font-body-2 font-medium text-base text-neutral-grey-700"
                        placeholder={"End Date"}
                        {...register("endDate")}
                        type={"date"}
                        style={{ boxShadow: "none" }}
                      />
                    </div>
                  </div>
                  <div className="flex w-full flex-row justify-between mt-4">
                    <CancelButton name="Reset" onClick={() => {resetFilter(); fetchCompanyList()}} />
                    <ActionButton name="Apply Filter" type="submit" />
                  </div>
                </LicenceFilterDrawer>
              </form>
            </div>
          </div>
          <CustomLicenseKeyTable
          actionButtonText="View Details"
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
                bodyKeyName: "role",
                sortable: true,
                sortableType: "number",
              },
              {
                name: "Plan Period",
                bodyKeyName: "period",
                sortable: true,
              },
              {
                name: "Total License Keys",
                bodyKeyName: "totalKeys",
                sortable: true,
              },
              {
                name: "Created Date",
                bodyKeyName: "createdDate",
                sortable: true,
                type: "DATE",
              },
            ]}
            data={companies}
            sortingOnClick={(data) => {
              const newData = data;
              setCompanies(() => newData);
            }}
            checkBoxOnClick={handleClickCheckBox}
            allCheckBoxOnClick={handleClickAllCheckBox}
            viewBtnOnClick={handleViewCompanyDetails}
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
