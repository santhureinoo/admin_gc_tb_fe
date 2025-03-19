"use client";
import {
  getApplications,
  getDashboarSummary,
  updateApplicationsStatus,
} from "@/actions/applications";
import { getUserById } from "@/actions/users";
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
import { getCompanyDetail, getLicenseKeyListByCompany, GetLicenseKeyListByCompanyReq } from "@/actions/license";
import CustomLicenseKeyTable from "@/components/common/table/CustomLicenseKeyTable";
import { setAlert } from "@/redux/alertSlice";

export default function companyDetail() {
  const { id } = useParams();
  const [users, setUsers] = useState<any>([

  ]);
  const [companyDetail, setCompanyDetail] = useState<any>();
  const [redeemedKeys, setRedeemedKeys] = useState<any>([]);
  const [redeemedKeySearch, setRedeemedKeySearch] = useState("");
  const [availableKeySearch, setAvailableKeySearch] = useState("");
  const [availableKeys, setAvailableKeys] = useState<any>([]);
  const [dataCounts, setDataCounts] = useState<number>(0);
  const [searchApplicationText, setSearchApplicationText] = useState("");
  const [applications, setApplications] = useState([1, 2, 2, 3, 3, 3, 4, 4]);
  const [dashboardSummary, setDashboardSummary] = useState<any>({});
  const [currentStatus, setCurrentStatus] = useState<any>("COMPANY_DETAIL");
  const [currentSelectedPage, setCurrentSelectedPage] = useState<number>(1);

  const [isAuResident, setIsAuResident] = useState<null | boolean>(null);
  // redux
  const dispatch = useDispatch();
  const { selectedApplications, isStatusChanged } = useAppSelector(
    (state) => state.selectedApplications
  );


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
  const handleFetchRedeemedLicenseKeys = async () => {
    const data = await getLicenseKeyListByCompany({
      companyId: +id,
      search: redeemedKeySearch,
      currentPage: 1,
      pageSize: 20,
      isRedeemed: true
  })
  setRedeemedKeys(data?.licenseList)
}
  const handleFetchAvailableLicenseKeys = async () => {
    const data = await getLicenseKeyListByCompany({
      companyId: +id,
      search: availableKeySearch,
      currentPage: 1,
      pageSize: 20,
      isRedeemed: false
  })
  setAvailableKeys(data?.licenseList)
}
  const handleFetchCompanyDetail = async () => {
    const data = await getCompanyDetail({
      id: +id,
    });
    setCompanyDetail(data);
  };

  useEffect(() => {
    handleFetchCompanyDetail();
    handleFetchRedeemedLicenseKeys();
    handleFetchAvailableLicenseKeys();
  }, []);


  useEffect(() => {
    // fetchDashboardApplications();
  }, [currentStatus, currentSelectedPage]);
  const copyKey = async(key: string) => {
    const type = "text/plain";
    const clipboardItemData = {
      [type]: key,
    };
    const clipboardItem = new ClipboardItem(clipboardItemData);
    await navigator.clipboard.write([clipboardItem]);
    dispatch(
      setAlert({
        alertType: "success",
        alertMessage: `The License Keys is copied to clipboard.`,
      })
    );
  }
  return companyDetail == null ? (
    <></>
  ) : (
    <div className="min-h-screen bg-[#F6F6F6] flex-1">
      <div className="w-full bg-neutralGrey0 h-[50px]"></div>
      <div className="px-[24px] py-[20px]">
        <div className="flex items-center justify-between">
          <p className="text-black font-[400] text-[14px] flex-1">
            License Keys Management / Company Key's Details
          </p>
        </div>
        <div className="bg-white p-[24px] my-[16px] min-h-screen">
          <h3 className="text-neutralGrey800 text-[20px] font-[700] mb-[24px]">
            {companyDetail.companyName}
          </h3>
          <p>
            Created date-{" "}
            {new Date(companyDetail.createdDate).toLocaleDateString()}
          </p>
          <div className="inline-flex items-center justify-center bg-[#EEFFDD] py-[10px] rounded-md mt-3">
            {/* <p className="text-[#379708] text-nowrap font-[400] px-[20px]">
              {userDetail.status}
            </p> */}
          </div>
          <StatusBarList
            activeValue={currentStatus}
            statusBarList={[
              {
                name: "Details",
                value: "COMPANY_DETAIL",
                // count: dashboardSummary?.FILTERED_PENDING,
              },
              {
                name: "Redeemed keys",
                value: "REDEEMED_KEYS",
                count: 21, //TODO
              },
              {
                name: "Available keys",
                value: "Available_KEYS",
                count: 21, //TODO
              },
            ]}
            hasCount
            setActiveStatusFunc={(status) => {
              setCurrentStatus(status);
              setCurrentSelectedPage(1); // This is for to reset current Selected pagination to first page (when we change active status)
              setRedeemedKeySearch("");
              setAvailableKeySearch("");
            }}
            setDataCounts={(count) => {
              setDataCounts(count);
            }}
          />
          {currentStatus == "COMPANY_DETAIL" ? (
            <>
              <h3 className="text-neutralGrey800 text-[20px] font-[700] mb-[24px] mt-[20px]">
                Details
              </h3>
              <div className="grid grid-cols-3 gap-[30px]">
                <div className="flex flex-col gap-1">
                  <h3 className="text-neutralGrey-grey600 text-[16px]">Name</h3>
                  <p className="text-neutralGrey-grey800 font-[500]">
                    {companyDetail.companyName}
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-neutralGrey-grey600 text-[16px]">
                    Total License Keys
                  </h3>
                  <p className="text-neutralGrey-grey800 font-[500]">
                    {companyDetail.totalKeys}
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-neutralGrey-grey600 text-[16px]">
                    Total redeemed
                  </h3>
                  <p className="text-neutralGrey-grey800 font-[500]">
                    {companyDetail.totalRedeemed }
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-neutralGrey-grey600 text-[16px]">
                    Available Keys
                  </h3>
                  <p className="text-neutralGrey-grey800 font-[500]">
                    {(companyDetail.totalKeys - companyDetail.totalRedeemed)}
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-neutralGrey-grey600 text-[16px]">
                    User role
                  </h3>
                  <p className="text-neutralGrey-grey800 font-[500]">
                    {companyDetail.role}
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-neutralGrey-grey600 text-[16px]">
                    Plan period
                  </h3>
                  <p className="text-neutralGrey-grey800 font-[500]">
                    {companyDetail.period }
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-neutralGrey-grey600 text-[16px]">
                    Created date
                  </h3>
                  <p className="text-neutralGrey-grey800 font-[500]">
                    {new Date(companyDetail.createdDate).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </>
          ) : currentStatus == "REDEEMED_KEYS" ? (
            <div>
              <h3 className="text-neutralGrey800 text-[20px] font-[700] mb-[24px] mt-[20px]">
                Redeemed History
              </h3>
              <SearchTextField
                onChange={(value) => setRedeemedKeySearch(value)}
                placeholder="Search Key"
                handleEnterKey={handleFetchRedeemedLicenseKeys}
              />
              <CustomLicenseKeyTable
                actionButtonText="Copy Key"
                isCopy={true}
                selectedRowsId={selectedApplications}
                headersList={[
                  {
                    name: "License Key",
                    bodyKeyName: "licenseKey",
                    sortable: true,
                    sortableType: "string",
                  },
                  {
                    name: "User role",
                    bodyKeyName: "email",
                    sortable: true,
                    sortableType: "number",
                  },
                  {
                    name: "Plan period",
                    bodyKeyName: "status",
                    sortable: true,
                  },
                 
                ]}
                data={redeemedKeys}
                sortingOnClick={(data: any) => {
                  const newData = data;
                  setRedeemedKeys(() => newData);
                }}
                checkBoxOnClick={handleClickCheckBox}
                allCheckBoxOnClick={handleClickAllCheckBox}
                viewBtnOnClick={(value) => copyKey(value)}
              />
              <Pagination
                totalCounts={dataCounts}
                setCurrentSelectedPage={setCurrentSelectedPage}
                currentSelectedPage={currentSelectedPage}
              />
            </div>
          ) : (
            <div>
              <h3 className="text-neutralGrey800 text-[20px] font-[700] mb-[24px] mt-[20px]">
                Available Keys
              </h3>
              <SearchTextField
                onChange={(value) => setAvailableKeySearch(value)}
                placeholder="Search Key"
                handleEnterKey={handleFetchAvailableLicenseKeys}
              />
              <CustomLicenseKeyTable
                actionButtonText="Copy Key"
                isCopy={true}
                selectedRowsId={selectedApplications}
                headersList={[
                  {
                    name: "License Key",
                    bodyKeyName: "licenseKey",
                    sortable: true,
                    sortableType: "string",
                  },
                  {
                    name: "User role",
                    bodyKeyName: "role",
                    sortable: true,
                    sortableType: "number",
                  },
                  {
                    name: "Plan period",
                    bodyKeyName: "period",
                    sortable: true,
                  },
                 
                ]}
                data={availableKeys}
                sortingOnClick={(data: any) => {
                  const newData = data;
                  setAvailableKeys(() => newData);
                }}
                checkBoxOnClick={handleClickCheckBox}
                allCheckBoxOnClick={handleClickAllCheckBox}
                viewBtnOnClick={(value) => copyKey(value)}
              />
              <Pagination
                totalCounts={dataCounts}
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
