"use client";
import {
  getApplications,
  getDashboarSummary,
  updateApplicationsStatus,
} from "@/actions/applications";
import { getAllUsers } from "@/actions/users";
import { ActionButton, CancelButton } from "@/components/common/buttons";
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
import {
  APPLICATIONS_STATUS,
  MODALS,
  PAGINATION_PER_PAGE,
  PLAN_PERIODS,
  USER_ROLES,
} from "@/constants";
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
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

type UserFilterFields = {
  period?: number | null;
  role?: string | null;
  startDate?: Date | null | ""; // dd/mm/yyyy format
  endDate?: Date | null | ""; // dd/mm/yyyy format
};
export default function Home() {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<UserFilterFields>();

  const router = useRouter();
  const [users, setUsers] = useState<any>([
    // {
    //   userId: "fe43cd8d-af9a-4bc1-b7bd-fa337977afbb",
    //   keycloakId: "9e22ca26-0989-45ba-b491-2aecd1e98f11",
    //   name: "hello world",
    //   userRole: "ADMIN",
    //   email: "admin@gmail.com",
    //   isEmailVerified: true,
    //   hasLogin: true,
    //   passRestRequired: true,
    //   status: "ACTIVE",
    //   companyName: "Company name 1",
    //   licenseKey: "asdfkljiwjeij",
    //   totalRedeemedKeys: 20,
    //   expiryDate: "2025-02-26T07:45:38.604Z",
    //   createdDate: "2025-02-26T07:45:38.604Z",
    // },
  ]);

  const [dataCounts, setDataCounts] = useState<number>(0);
  const [searchUserText, setSearchUserText] = useState("");
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

  const fetchAllUsers = async () => {
    const startDate = getValues("startDate");
    const endDate = getValues("endDate");

    const payload = {
      period: Number(getValues("period")),
      role: getValues("role"),
      search: searchUserText, // seaerch by FirstName, LastName, Phone, AppliedPosition
      createdDate: {
        startDate: startDate === "" || null ? null : startDate, // yyyy-mm-dd
        endDate: endDate === "" || null ? null : endDate, // yyyy-mm-dd
      },
      currentPage: currentSelectedPage, // current user seleced page
      pageSize: PAGINATION_PER_PAGE, // number of applications to be fetch per page
    };

    // {
    //   period: null,
    //   role: getValues("role"),
    //   search: searchUserText, // seaerch by FirstName, LastName, Phone, AppliedPosition
    //   createdDate: {
    //     startDate: getValues("startDate"), // yyyy-mm-dd
    //     endDate: getValues("endDate"), // yyyy-mm-dd
    //   },
    //   currentPage: currentSelectedPage, // current user seleced page
    //   pageSize: PAGINATION_PER_PAGE, // number of applications to be fetch per page
    // }

    const data = await getAllUsers(payload);
    setUsers(data);
    setDataCounts(data?.length);
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

  const handleViewUserDetails = (userId: any) => {
    router.push(`/userDetail/${userId}`);
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
    fetchAllUsers();
  }, [searchUserText, currentSelectedPage]);

  const resetFilter = () => {
    setValue("period", null);
    setValue("role", null);
    setValue("startDate", null), setValue("endDate", null);
  };

  return (
    <div className="min-h-screen bg-[#F6F6F6] flex-1">
      <div className="w-full bg-neutralGrey0 h-[50px]"></div>
      <div className="px-[24px] py-[20px]">
        <div className="flex items-center justify-between">
          <p className="text-black font-[400] text-[14px] flex-1">Users</p>
        </div>

        <div className="bg-white p-[24px] my-[16px] min-h-screen">
          <div className="flex items-center justify-between">
            <h3 className="text-neutralGrey800 text-[20px] font-[700] mb-[24px]">
              Users
            </h3>
                  <ActionButton
                    onClick={() => openModal(MODALS.uploadCSVModalID)}
                    name="+ Upload CSV"
                  />
          </div>
          <div className="flex flex-col items-start xl:flex-row xl:items-center justify-between">
            <div className="flex flex-row items-center justify-between">
              <SearchTextField
                onChange={(value) => setSearchUserText(value)}
                placeholder="Search User"
              />
        <form 
        onSubmit={handleSubmit(fetchAllUsers)}>
        <UserFilterDrawer
                id={"user-filter-drawer"}
                buttonLabel={"User Filter"}
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
                  <CancelButton
                    name="Reset"
                    onClick={() => {
                      resetFilter();
                      fetchAllUsers();
                    }}
                  />
                  <ActionButton name="Apply Filter" type="submit" />
                </div>
              </UserFilterDrawer>
        </form>

            </div>
          </div>
          <CustomTable
            selectedRowsId={selectedApplications}
            headersList={[
              {
                name: "Name",
                bodyKeyName: "name",
                sortable: true,
                sortableType: "string",
              },
              {
                name: "Email",
                bodyKeyName: "email",
                sortable: true,
                sortableType: "number",
              },
              {
                name: "Status",
                bodyKeyName: "status",
                sortable: true,
              },
              {
                name: "Company name",
                bodyKeyName: "companyName",
                sortable: true,
              },
              {
                name: "Current Licence Key",
                bodyKeyName: "licenseKey",
                sortable: true,
              },
              {
                name: "Expiry date",
                bodyKeyName: "expiryDate",
                sortable: true,
                type: "DATE",
              },
              {
                name: "Created date",
                bodyKeyName: "createdDate",
                sortable: true,
                type: "DATE",
              },
            ]}
            data={users}
            sortingOnClick={(data) => {
              const newData = data;
              setApplications(() => newData);
            }}
            checkBoxOnClick={handleClickCheckBox}
            allCheckBoxOnClick={handleClickAllCheckBox}
            viewBtnOnClick={handleViewUserDetails}
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
