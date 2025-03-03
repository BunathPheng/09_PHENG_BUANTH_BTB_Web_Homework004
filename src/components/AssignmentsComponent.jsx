import React from "react";
import AddNewProjectComponent from "./AddNewProjectComponent";
import CardComponent from "./CardComponent";

export default function AssignmentsComponent() {
  return (
    <div>
      <div className="flex justify-between items-center">
        {/* assignments  */}
        <h2 className="text-xl font-semibold">Assignments</h2>
        <AddNewProjectComponent/>
      </div>
      <div className="my-3 grid grid-cols-3 gap-5 overflow-auto max-h-[53vh] no-scrollbar">
      {[...Array(8)].map((_, index) => (
      <CardComponent key={index} />
    ))}
      
      </div>
    </div>
  );
}
