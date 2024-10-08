"use client";
import { getApplications, getDashboarSummary } from "@/actions/applications";
import Dropdown from "@/components/common/dropdown";
import { InfoCardList } from "@/components/common/info-card";
import Pagination from "@/components/common/pagination";
import { StatusBarList } from "@/components/common/status-bar";
import CustomTable from "@/components/common/table";
import { SearchTextField } from "@/components/common/text-field";
import { APPLICATIONS_STATUS } from "@/constants";
import {
  addApplications,
  removeApplications,
} from "@/redux/selectedApplicationsSlice";
import { useAppSelector } from "@/redux/store";
import { getPaginationTotalPages, openModal } from "@/utils";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function Home() {
  const [dataCounts, setDataCounts] = useState<number>(0);
  const [searchApplicationText, setSearchApplicationText] = useState("");
  const [applications, setApplications] = useState([]);
  const [dashboardSummary, setDashboardSummary] = useState<any>({});
  const [currentStatus, setCurrentStatus] =
    useState<APPLICATIONS_STATUS>("PENDING");

  // redux
  const dispatch = useDispatch();
  const { selectedApplications } = useAppSelector(
    (state) => state.selectedApplications
  );

  const fetchDashboardApplications = async () => {
    setApplications([]);
    const data = await getApplications({
      filter: {
        status: currentStatus, // application status [PENDING, MISSING_INFO, REUPLOADED, APPROVED, INTERVIEW]
        isAuResident: null, // application resident type [null -> all, true -> AU Resident, false -> non-AU Resident]
      },
      page: {
        currentPage: 1, // current user seleced page
        pageSize: 1, // number of applications to be fetch per page
      },
      search: searchApplicationText, // seaerch by FirstName, LastName, Phone, AppliedPosition
    });
    setApplications(data);
  };

  const fetchDashboardSummary = async () => {
    const data = await getDashboarSummary({
      filter: {
        isAuResident: null, // application resident type [null -> all, true -> AU Resident, false -> non-AU Resident]
      },
      search: "", // seaerch by FirstName, LastName, Phone, AppliedPosition
    });
    setDashboardSummary(data);
  };

  const handleClickCheckBox = (id: number) => {
    const duplicateId = selectedApplications.find((el) => el == id);
    if (duplicateId == undefined) {
      dispatch(addApplications(id));
    }
    if (duplicateId) {
      dispatch(removeApplications(id));
    }
  };

  useEffect(() => {
    fetchDashboardApplications();
    fetchDashboardSummary();
  }, [currentStatus, searchApplicationText]);

  return (
    <div className="min-h-screen bg-[#F6F6F6] flex-1">
      <div className="w-full bg-neutralGrey0 h-[50px]"></div>
      <div className="px-[24px] py-[20px]">
        <p className="text-black font-[400] text-[14px]">Job Applications</p>
        <div className="bg-white p-[24px] my-[16px] min-h-screen">
          <h3 className="text-neutralGrey800 text-[20px] font-[700] mb-[24px]">
            Job Applications
          </h3>
          <InfoCardList infos={dashboardSummary} />
          <StatusBarList
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
            }}
            setDataCounts={(count) => {
              setDataCounts(count);
            }}
          />
          <div className="flex flex-col items-start xl:flex-row xl:items-center justify-between">
            <SearchTextField
              onChange={(value) => setSearchApplicationText(value)}
            />
            <div className="flex items-center gap-3">
              <Dropdown
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
                onSelect={openModal}
              />
              {/* Move to */}
              {selectedApplications.length > 0 ? (
                <Dropdown
                  fixLabel="Move To"
                  position={"dropdown-end"}
                  value=""
                  dropdownList={[
                    // { name: "Move To", value: "Move to" },
                    { name: "Approve", value: "Approve" },
                    {
                      name: "Missing Info",
                      value: "Missing Info",
                    },
                    { name: "Reject", value: "Reject" },
                  ]}
                  onSelect={openModal}
                />
              ) : null}
            </div>
          </div>
          <CustomTable
            selectedRowsCount={selectedApplications.length}
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
                name: "Phone Number",
                bodyKeyName: "phone",
                sortable: true,
              },
              {
                name: "Applied date",
                bodyKeyName: "createdDate",
                sortable: true,
              },
              {
                name: "Status",
                bodyKeyName: "applicationStatus",
                ComponentName: "Dropdown",
              },
              {
                name: "Job Position",
                bodyKeyName: "appliedPositions",
                ComponentName: "Badge",
              },
            ]}
            data={applications}
            sortingOnClick={(data) => {
              const newData = data;
              setApplications(() => newData);
            }}
            checkBoxOnClick={handleClickCheckBox}
          />
          <Pagination totalCounts={dataCounts} />
        </div>
      </div>
    </div>
  );
}
