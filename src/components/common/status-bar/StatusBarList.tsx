"use client";

import React, { useState } from "react";
import StatusBar from "./StatusBar";
import { APPLICATIONS_STATUS } from "@/constants";

type StatusBarValue = {
  name: string;
  value: any;
  count?: number;
};

type StatusBarListProps = {
  activeValue: string; // to check status bar is active or not
  statusBarList: StatusBarValue[];
  hasCount: boolean; // to check status bar has counts
  setActiveStatusFunc: (statusBarName: any) => void;
  setDataCounts: (count: number) => void;
};

function StatusBarList({
  activeValue,
  statusBarList,
  hasCount,
  setActiveStatusFunc,
  setDataCounts,
}: StatusBarListProps) {
  return (
    <div className="flex  max-w-[calc(100vw-150px)] md:max-w-[calc(100vw-380px)] overflow-x-auto">
      {statusBarList.map((statusBar, index) => (
        <StatusBar
          key={index}
          statusBarName={statusBar.name}
          statusBarValue={statusBar.value}
          setActiveStatusFunc={setActiveStatusFunc}
          isActive={activeValue == statusBar.value}
          hasCount={statusBar.count ? true : false}
          count={statusBar.count}
          setDataCounts={setDataCounts}
        />
      ))}
    </div>
  );
}

export default StatusBarList;
