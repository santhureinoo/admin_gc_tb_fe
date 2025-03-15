"use client";
import {
  getApplications,
  getDashboarSummary,
  updateApplicationsStatus,
} from "@/actions/applications";
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

export default function UserDetail() {
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
          <p className="text-black font-[400] text-[14px] flex-1">
            Users / User Details
          </p>
        </div>
        <div className="bg-white p-[24px] my-[16px] min-h-screen">
          <h3 className="text-neutralGrey800 text-[20px] font-[700] mb-[24px]">
            Mark Simpson
          </h3>
          <p>Created date- 22/12/2024</p>
          <div className="inline-flex items-center justify-center bg-[#EEFFDD] py-[10px] rounded-md mt-3">
            <p className="text-[#379708] text-nowrap font-[400] px-[20px]">
              Active
            </p>
          </div>
          <StatusBarList
            activeValue={currentStatus}
            statusBarList={[
              {
                name: "User Details",
                value: "PENDING",
                count: dashboardSummary?.FILTERED_PENDING,
              },
              {
                name: "Redeemed History",
                value: "MISSING_INFO",
                count: 21,
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

          <h3 className="text-neutralGrey800 text-[20px] font-[700] mb-[24px] mt-[20px]">
            User Details
          </h3>
          <div className="grid grid-cols-3 gap-[30px]">
            <div className="flex flex-col gap-1">
              <h3 className="text-neutralGrey-grey600 text-[16px]">Name</h3>
              <p className="text-neutralGrey-grey800 font-[500]">
                Delbin Toe Htet
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-neutralGrey-grey600 text-[16px]">Email</h3>
              <p className="text-neutralGrey-grey800 font-[500]">
                ggtoteo3@gmail.com
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-neutralGrey-grey600 text-[16px]">
                Current license key
              </h3>
              <p className="text-neutralGrey-grey800 font-[500]">ANFJAFJ343</p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-neutralGrey-grey600 text-[16px]">
                User role
              </h3>
              <p className="text-neutralGrey-grey800 font-[500]">Nurse</p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-neutralGrey-grey600 text-[16px]">Status</h3>
              <p className="text-neutralGrey-grey800 font-[500]">Active</p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-neutralGrey-grey600 text-[16px]">
                Total redeemed keys
              </h3>
              <p className="text-neutralGrey-grey800 font-[500]">50</p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-neutralGrey-grey600 text-[16px]">
                Expiry date
              </h3>
              <p className="text-neutralGrey-grey800 font-[500]">
                22/12/2025 (264 days left)
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-neutralGrey-grey600 text-[16px]">
                Created date
              </h3>
              <p className="text-neutralGrey-grey800 font-[500]">
                22/12/2024 9:23:22 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
