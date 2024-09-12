"use client";

import React, { useState } from "react";
import StatusBar from "./StatusBar";

type StatusBarValue = {
  name: string;
  value: string;
};

type StatusBarListProps = {
  activeName: string; // to check status bar is active or not
  statusBarList: StatusBarValue[];
  hasCount: boolean; // to check status bar has counts
};

function StatusBarList({
  activeName,
  statusBarList,
  hasCount,
}: StatusBarListProps) {
  const [statusActiveName, setStatusActiveName] = useState<string>(activeName);

  return (
    <div className="flex ">
      {statusBarList.map((statusBar, index) => (
        <StatusBar
          key={index}
          statusBarName={statusBar.name}
          setActiveStatusFunc={() => {}}
          isActive={index == 0}
          hasCount={hasCount}
        />
      ))}
    </div>
  );
}

export default StatusBarList;
