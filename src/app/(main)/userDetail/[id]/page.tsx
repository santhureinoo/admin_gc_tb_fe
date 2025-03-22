"use client";
import {
  getApplications,
  getDashboarSummary,
  updateApplicationsStatus,
} from "@/actions/applications";
import { getRedemmedListByUserId, getUserById } from "@/actions/users";
import Badge from "@/components/common/badge";
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
import { useParams } from "next/navigation";

export default function UserDetail() {
  const { id } = useParams();
  // const [users, setUsers] = useState<any>([
  //   {
  //     userId: "fe43cd8d-af9a-4bc1-b7bd-fa337977afbb",
  //     keycloakId: "9e22ca26-0989-45ba-b491-2aecd1e98f11",
  //     name: "hello world",
  //     userRole: "ADMIN",
  //     email: "admin@gmail.com",
  //     isEmailVerified: true,
  //     hasLogin: true,
  //     passRestRequired: true,
  //     status: "ACTIVE",
  //     companyName: "Company name 1",
  //     licenseKey: "asdfkljiwjeij",
  //     totalRedeemedKeys: 20,
  //     expiryDate: "2025-02-26T07:45:38.604Z",
  //     createdDate: "2025-02-26T07:45:38.604Z",
  //   },
  // ]);
  const [licenseList, setLicenseList] = useState<any>([]);
  const [totalLicenseCount, setTotalLicenseCount] = useState(0);
  const [userDetail, setUserDetail] = useState<any>();
  const [dataCounts, setDataCounts] = useState<number>(0);
  const [searchApplicationText, setSearchApplicationText] = useState("");
  const [applications, setApplications] = useState([1, 2, 2, 3, 3, 3, 4, 4]);
  const [dashboardSummary, setDashboardSummary] = useState<any>({});
  const [currentStatus, setCurrentStatus] = useState<any>("USER_DETAIL");
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

  const handleFetchUserDetail = async () => {
    const data = await getUserById({
      id: id,
    });

    const { licenseList, totalCount } = await getRedemmedListByUserId({
      userId: id,
      currentPage: 1,
      pageSize: 20,
    });

    setLicenseList(licenseList);
    setTotalLicenseCount(totalCount);

    setUserDetail(data);
  };

  useEffect(() => {
    handleFetchUserDetail();
  }, []);

  useEffect(() => {
    // fetchDashboardApplications();
    // fetchDashboardSummary();
    // dispatch(clearApplications());
  }, [searchApplicationText, isStatusChanged, isAuResident]);

  useEffect(() => {
    // fetchDashboardApplications();
  }, [currentStatus, currentSelectedPage]);
  console.log("** user detail **", userDetail);
  return userDetail == null ? (
    <></>
  ) : (
    <div className="min-h-screen bg-[#F6F6F6] flex-1">
      <div className="w-full bg-neutralGrey0 h-[50px]"></div>
      <div className="px-[24px] py-[20px]">
        <div className="flex items-center justify-between">
          <p className="text-black font-[400] text-[14px] flex-1">
            Users / User Details
          </p>
        </div>
        <div className="bg-white p-[24px] my-[16px] min-h-screen">
          <h3 className="text-neutralGrey800 text-[20px] font-[700] mb-[24px]">
            {userDetail.name}
          </h3>
          <p>
            Created date-{" "}
            {new Date(userDetail.createdDate).toLocaleDateString()}
          </p>
          <div className="inline-flex items-center justify-center bg-[#EEFFDD] py-[10px] rounded-md mt-3">
            <p className="text-[#379708] text-nowrap font-[400] px-[20px]">
              {userDetail.status}
            </p>
          </div>
          <StatusBarList
            activeValue={currentStatus}
            statusBarList={[
              {
                name: "User Details",
                value: "USER_DETAIL",
                // count: dashboardSummary?.FILTERED_PENDING,
              },
              {
                name: "Redeemed History",
                value: "REDEEMED_HISTORY",
                count: totalLicenseCount,
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
          />
          {currentStatus == "USER_DETAIL" ? (
            <>
              <h3 className="text-neutralGrey800 text-[20px] font-[700] mb-[24px] mt-[20px]">
                User Details
              </h3>
              <div className="grid grid-cols-3 gap-[30px]">
                <div className="flex flex-col gap-1">
                  <h3 className="text-neutralGrey-grey600 text-[16px]">Name</h3>
                  <p className="text-neutralGrey-grey800 font-[500]">
                    {userDetail.name}
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-neutralGrey-grey600 text-[16px]">
                    Email
                  </h3>
                  <p className="text-neutralGrey-grey800 font-[500]">
                    {userDetail.email}
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-neutralGrey-grey600 text-[16px]">
                    Current license key
                  </h3>
                  <p className="text-neutralGrey-grey800 font-[500]">
                    {userDetail.licenseKey}
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-neutralGrey-grey600 text-[16px]">
                    User role
                  </h3>
                  <p className="text-neutralGrey-grey800 font-[500]">
                    {userDetail.role}
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-neutralGrey-grey600 text-[16px]">
                    Status
                  </h3>
                  <p className="text-neutralGrey-grey800 font-[500]">
                    {userDetail.status}
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-neutralGrey-grey600 text-[16px]">
                    Total redeemed keys
                  </h3>
                  <p className="text-neutralGrey-grey800 font-[500]">
                    {userDetail.totalRedeemedKeys}
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-neutralGrey-grey600 text-[16px]">
                    Expiry date
                  </h3>
                  <p className="text-neutralGrey-grey800 font-[500]">
                    {new Date(userDetail.expiryDate).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-neutralGrey-grey600 text-[16px]">
                    Created date
                  </h3>
                  <p className="text-neutralGrey-grey800 font-[500]">
                    {new Date(userDetail.createdDate).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </>
          ) : (
            <div>
              <h3 className="text-neutralGrey800 text-[20px] font-[700] mb-[24px] mt-[20px]">
                Redeemed History
              </h3>
              <CustomTable
                selectedRowsId={selectedApplications}
                headersList={[
                  {
                    name: "Name",
                    bodyKeyName: "name",
                    sortable: true,
                    sortableType: "string",
                    value: userDetail?.name,
                  },
                  {
                    name: "Email",
                    bodyKeyName: "email",
                    sortable: true,
                    sortableType: "number",
                    // value:
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
                data={licenseList}
                sortingOnClick={(data) => {
                  const newData = data;
                  setApplications(() => newData);
                }}
                checkBoxOnClick={handleClickCheckBox}
                allCheckBoxOnClick={handleClickAllCheckBox}
                // viewBtnOnClick={handleViewUserDetails}
              />
              <Pagination
                totalCounts={totalLicenseCount}
                setCurrentSelectedPage={setCurrentSelectedPage}
                currentSelectedPage={currentSelectedPage}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
