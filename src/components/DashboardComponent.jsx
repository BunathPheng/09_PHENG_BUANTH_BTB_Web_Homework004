import React from "react";
import CardDashbord from "./CardDashbord";

export default function DashboardComponent() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-5">Dashboard</h2>
      {/* display summary on each card */}
      <div className="grid grid-cols-4 gap-5">
        <CardDashbord color={"bg-custom-pink"} price={"24"} dec={"Total Assigmenents"} />
        <CardDashbord color={"bg-[#78dde5]"} price={"11"} dec={"Completed"} />
        <CardDashbord color={"bg-[#fab430]"} price={"14"} dec={"In process"} />
        <CardDashbord color={"bg-[#f5dd61]"} price={"8"} dec={"Upcomming"} />
      </div>
    </div>
  );
}
