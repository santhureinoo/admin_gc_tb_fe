"use client";

import { ActionButton, CancelButton, DownloadCSVButton } from "@/components/common/buttons";
import {
  LicenceFilterDrawer,
} from "@/components/common/drawer";
import Pagination from "@/components/common/pagination";
import CustomLicenseKeyTable from "@/components/common/table/CustomLicenseKeyTable";
import { SearchTextField } from "@/components/common/text-field";
import { APPLICATIONS_STATUS, MODALS, PAGINATION_PER_PAGE } from "@/constants";
import { downloadCSV, openModal } from "@/utils";
import { PLAN_PERIODS, USER_ROLES } from "@/constants";
import { useForm } from "react-hook-form";
import { useAppSelector } from "@/redux/store";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import GenerateLicenseModal from "@/components/common/modals/GenerateLicenseModal";
import { getCompanyList, getLicenseCSVData, GetLicenseCSVDataReq } from "@/actions/license";
import { useRouter } from "next/navigation";
import { addIds, removeAllIds, removeId, setCompanies, setTotalCompanyCount } from "@/redux/licenseSlice";


export default function LicenseKeys() {
  const [companyNameSearch, setCompanyNameSearch] = useState("");
  const [currentStatus, setCurrentStatus] =
    useState<APPLICATIONS_STATUS>("PENDING");
    const router = useRouter();
  const [currentSelectedPage, setCurrentSelectedPage] = useState<number>(1);
  const [showDownloadCSV, setShowDownloadCSV] = useState(false);

  // redux
  const dispatch = useDispatch();
  const { ids, companies, totalCompanyCount } = useAppSelector(
    (state) => state.license
  );
  useEffect(() => {
    if(ids.length > 0) setShowDownloadCSV(true);
    else setShowDownloadCSV(false);
  }, [ids]);
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
    dispatch(setTotalCompanyCount(data?.totalCount));
    dispatch(setCompanies(data?.companyList));
    console.log("this is company data", data.companyList)
  };

  useEffect(() => {
    dispatch(removeAllIds())
  }, []);

  const handleViewCompanyDetails = (companyId: any) => {
    dispatch(addIds([companyId]));
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
    setValue('period', null)
    setValue('role', null)
    setValue('startDate', null),
    setValue('endDate', null)
  },[])
  const handleClickCheckBox = (id: number) => {
    const duplicateId = ids.find((el) => el == id);

    if (duplicateId == undefined) {
      dispatch(
        addIds([...ids, id])
      );
    }
    if (duplicateId) {
      dispatch(removeId(id));
    }
  };

  const handleClickAllCheckBox = () => {
    const allCompaniesId = companies.map((app: any) => app.id);

    if (ids.length > 0) {
      dispatch(removeAllIds());
    } else {
      dispatch(addIds(allCompaniesId));
    }
  };

  useEffect(() => {
    fetchCompanyList();
  }, [currentStatus, currentSelectedPage]);
  const [showDrawer, setShwoDrawer] = useState(false);

  const getCSVData = async () => {
    // please replace with dynamic data
    const payload: GetLicenseCSVDataReq = {
        ids: ids,
        type: "all"
    }
    try {
        const data = await getLicenseCSVData(payload);
        
        downloadCSV(data, "test");
    }
    catch(error) {
        console.log(error);
    }
  }

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
            
            {/* <DownloadCSVButton title="License Key" onClick={()=> getCSVData()} /> */}
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
          <div className="flex flex-col">
            <div className="flex flex-row items-center justify-between">
              <SearchTextField
                onChange={(value) => setCompanyNameSearch(value)}
                placeholder="Search Company"
                handleEnterKey={fetchCompanyList}
              />
              <div className="flex flex-row gap-4">
               {showDownloadCSV && <DownloadCSVButton title="Download CSV" onClick={()=> openModal(MODALS.downloadCSVModalId)} />}
              <form
                className=""
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
                    <label>Start Date</label>
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
                    <label>End Date</label>
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
          </div>
          <CustomLicenseKeyTable
          hasCheckbox={true}
          actionButtonText="View Details"
          idProps="id"
            // selectedRowsId={selectedApplications}
            headersList={[
              {
                name: "Company Name",
                bodyKeyName: "companyName",
                
              },
              {
                name: "User Role",
                bodyKeyName: "role",
                
              },
              {
                name: "Plan Period",
                bodyKeyName: "period",
               
              },
              {
                name: "Total License Keys",
                bodyKeyName: "totalKeys",

              },
              {
                name: "Created Date",
                bodyKeyName: "createdDate",
                type: "DATE",
              },
            ]}
            data={companies}
            sortingOnClick={(data) => {
              const newData = data;
              dispatch(setCompanies(newData));
            }}
            selectedRowsId={ids}
            checkBoxOnClick={handleClickCheckBox}
            allCheckBoxOnClick={handleClickAllCheckBox}
            viewBtnOnClick={handleViewCompanyDetails}
          />
          <Pagination
            totalCounts={totalCompanyCount}
            setCurrentSelectedPage={setCurrentSelectedPage}
            currentSelectedPage={currentSelectedPage}
          />
        </div>
      </div>
      <GenerateLicenseModal modalId={MODALS.generateLicenseModalId} />
    </div>
  );
}
