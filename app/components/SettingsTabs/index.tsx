"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { TabItem } from "./TabItem";
import { useState } from "react";

export function SettingTabs() {
  const [currentTab, setCurrentTab] = useState("1");
  return (
    <>
      <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
        <Tabs.List className="mt-6 flex w-full items-center gap-4 border-zinc-200">
          <TabItem
            value="1"
            text="My details"
            isSelected={currentTab === "1"}
          />
          <TabItem value="2" text="Profile" isSelected={currentTab === "2"} />
          <TabItem value="3" text="Password" isSelected={currentTab === "3"} />
          <TabItem value="4" text="Team" isSelected={currentTab === "4"} />
          <TabItem value="5" text="Plan" isSelected={currentTab === "5"} />
          <TabItem value="6" text="Billing" isSelected={currentTab === "6"} />
          <TabItem value="7" text="Email" isSelected={currentTab === "7"} />
          <TabItem
            value="8"
            text="Notifications"
            isSelected={currentTab === "8"}
          />
          <TabItem
            value="9"
            text="Integrations"
            isSelected={currentTab === "9"}
          />
          <TabItem
            value="10"
            text="Notifications"
            isSelected={currentTab === "10"}
          />
          <TabItem value="11" text="API" isSelected={currentTab === "11"} />
        </Tabs.List>
      </Tabs.Root>
    </>
  );
}
