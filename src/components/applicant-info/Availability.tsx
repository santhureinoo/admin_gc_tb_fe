import React from "react";
import Header from "../common/header";

type AvailabilityProps = {
  applicationDetails: any;
};

function Availability({ applicationDetails }: AvailabilityProps) {
  const MondayTimeSlots = applicationDetails?.timeslots?.filter(
    (ts: any) => ts.dayOfWeek == "MONDAY"
  );
  const TuesdayTimeSlots = applicationDetails?.timeslots?.filter(
    (ts: any) => ts.dayOfWeek == "TUESDAY"
  );
  const WednesdayTimeSlots = applicationDetails?.timeslots?.filter(
    (ts: any) => ts.dayOfWeek == "WEDNESDAY"
  );
  const ThursdayTimeSlots = applicationDetails?.timeslots?.filter(
    (ts: any) => ts.dayOfWeek == "THURSDAY"
  );
  const FridayTimeSlots = applicationDetails?.timeslots?.filter(
    (ts: any) => ts.dayOfWeek == "FRIDAY"
  );
  const SaturdayTimeSlots = applicationDetails?.timeslots?.filter(
    (ts: any) => ts.dayOfWeek == "SATRUDAY"
  );
  const SundayTimeSlots = applicationDetails?.timeslots?.filter(
    (ts: any) => ts.dayOfWeek == "SUNDAY"
  );

  return (
    <div
      id={"section-a8"}
      className="border-b-[1px] border-b-neutralGrey300 py-[30px]"
    >
      <Header title="Availability" />
      <div className="mt-[24px]">
        <div className="flex flex-col gap-3 my-[24px]">
          <p className="text-neutralGrey600 font-[500]">
            Monday (
            {MondayTimeSlots?.length > 0 ? MondayTimeSlots?.length : "no"}{" "}
            available sessions)
          </p>
          <div className="flex flex-wrap gap-3">
            {MondayTimeSlots?.length > 0 ? (
              MondayTimeSlots?.map((el: any, index: any) => (
                <div
                  key={index}
                  className="bg-neutralGrey200 text-neutralGrey800 flex px-[10px] py-[5px] rounded-md font-[500]"
                >
                  <p>{el.startTime}</p> - <p>{el.endTime}</p>
                </div>
              ))
            ) : (
              <p className="text-neutralGrey800 font-[400]">Not Provided</p>
            )}
          </div>
        </div>{" "}
        <div className="flex flex-col gap-3 my-[24px]">
          <p className="text-neutralGrey600 font-[500]">
            Tuesday (
            {TuesdayTimeSlots?.length > 0 ? TuesdayTimeSlots?.length : "no"}{" "}
            available sessions)
          </p>
          <div className="flex flex-wrap gap-3">
            {TuesdayTimeSlots?.length > 0 ? (
              TuesdayTimeSlots?.map((el: any, index: any) => (
                <div
                  key={index}
                  className="bg-neutralGrey200 text-neutralGrey800 flex px-[10px] py-[5px] rounded-md font-[500]"
                >
                  <p>{el.startTime}</p> - <p>{el.endTime}</p>
                </div>
              ))
            ) : (
              <p className="text-neutralGrey800 font-[400]">Not Provided</p>
            )}
          </div>
        </div>{" "}
        <div className="flex flex-col gap-3 my-[24px]">
          <p className="text-neutralGrey600 font-[500]">
            Wednesday (
            {WednesdayTimeSlots?.length > 0 ? WednesdayTimeSlots?.length : "no"}{" "}
            available sessions)
          </p>
          <div className="flex flex-wrap gap-3">
            {WednesdayTimeSlots?.length > 0 ? (
              WednesdayTimeSlots?.map((el: any, index: any) => (
                <div
                  key={index}
                  className="bg-neutralGrey200 text-neutralGrey800 flex px-[10px] py-[5px] rounded-md font-[500]"
                >
                  <p>{el.startTime}</p> - <p>{el.endTime}</p>
                </div>
              ))
            ) : (
              <p className="text-neutralGrey800 font-[400]">Not Provided</p>
            )}
          </div>
        </div>{" "}
        <div className="flex flex-col gap-3 my-[24px]">
          <p className="text-neutralGrey600 font-[500]">
            Thursday (
            {ThursdayTimeSlots?.length > 0 ? ThursdayTimeSlots?.length : "no"}{" "}
            available sessions)
          </p>
          <div className="flex flex-wrap gap-3">
            {ThursdayTimeSlots?.length > 0 ? (
              ThursdayTimeSlots?.map((el: any, index: any) => (
                <div
                  key={index}
                  className="bg-neutralGrey200 text-neutralGrey800 flex px-[10px] py-[5px] rounded-md font-[500]"
                >
                  <p>{el.startTime}</p> - <p>{el.endTime}</p>
                </div>
              ))
            ) : (
              <p className="text-neutralGrey800 font-[400]">Not Provided</p>
            )}
          </div>
        </div>{" "}
        <div className="flex flex-col gap-3 my-[24px]">
          <p className="text-neutralGrey600 font-[500]">
            Friday (
            {FridayTimeSlots?.length > 0 ? FridayTimeSlots?.length : "no"}{" "}
            available sessions)
          </p>
          <div className="flex flex-wrap gap-3">
            {FridayTimeSlots?.length > 0 ? (
              FridayTimeSlots?.map((el: any, index: any) => (
                <div
                  key={index}
                  className="bg-neutralGrey200 text-neutralGrey800 flex px-[10px] py-[5px] rounded-md font-[500]"
                >
                  <p>{el.startTime}</p> - <p>{el.endTime}</p>
                </div>
              ))
            ) : (
              <p className="text-neutralGrey800 font-[400]">Not Provided</p>
            )}
          </div>
        </div>{" "}
        <div className="flex flex-col gap-3 my-[24px]">
          <p className="text-neutralGrey600 font-[500]">
            Saturday (
            {SaturdayTimeSlots?.length > 0 ? SaturdayTimeSlots?.length : "no"}{" "}
            available sessions)
          </p>
          <div className="flex flex-wrap gap-3">
            {SaturdayTimeSlots?.length > 0 ? (
              SaturdayTimeSlots?.map((el: any, index: any) => (
                <div
                  key={index}
                  className="bg-neutralGrey200 text-neutralGrey800 flex px-[10px] py-[5px] rounded-md font-[500]"
                >
                  <p>{el.startTime}</p> - <p>{el.endTime}</p>
                </div>
              ))
            ) : (
              <p className="text-neutralGrey800 font-[400]">Not Provided</p>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-3 my-[24px]">
          <p className="text-neutralGrey600 font-[500]">
            Sunday (
            {SundayTimeSlots?.length > 0 ? SundayTimeSlots?.length : "no"}{" "}
            available sessions)
          </p>
          <div className="flex flex-wrap gap-3">
            {SundayTimeSlots?.length > 0 ? (
              SundayTimeSlots?.map((el: any, index: any) => (
                <div
                  key={index}
                  className="bg-neutralGrey200 text-neutralGrey800 flex px-[10px] py-[5px] rounded-md font-[500]"
                >
                  <p>{el.startTime}</p> - <p>{el.endTime}</p>
                </div>
              ))
            ) : (
              <p className="text-neutralGrey800 font-[400]">Not Provided</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Availability;
