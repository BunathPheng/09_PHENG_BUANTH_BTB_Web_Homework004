import React from "react";
import CardDashbord from "./CardDashbord";

export default function DashboardComponent() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-5">Dashboard</h2>
      {/* display summary on each card */}
      <div className="grid grid-cols-4 gap-5">
        <CardDashbord color={"bg-custom-pink"} price={"20"} dec={"Total Assigmenents"} />
        <CardDashbord color={"bg-custom-pink"} price={"20"} dec={"Total Assigmenents"} />
        <CardDashbord color={"bg-custom-pink"} price={"20"} dec={"Total Assigmenents"} />
        <CardDashbord color={"bg-custom-pink"} price={"20"} dec={"Total Assigmenents"} />
      </div>
    </div>
  );
}
