import React, { useState } from "react";
import AddNewProjectComponent from "./AddNewProjectComponent";
import CardComponent from "./CardComponent";

export default function AssignmentsComponent({ getDataInput }) {
  const [datas, setDatas] = useState([]);

  const dataAll = (data) => {
    setDatas(data);
  };

  const filteredData = datas.filter((data) =>
    data.projectName.toLowerCase().includes(getDataInput.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-between items-center">
        {/* Assignments */}
        <h2 className="text-xl font-semibold">Assignments</h2>
        <AddNewProjectComponent getData={dataAll} />
      </div>
      <div className="my-3 grid grid-cols-3 gap-5 overflow-auto max-h-[53vh] no-scrollbar">
        {filteredData.length > 0 ? (
          filteredData.map((data, index) => (
            <CardComponent
              key={index}
              date={data.dueDate}
              description={data.description}
              progress={data.progress}
              title={data.projectName}
            />
          ))
        ) : (
          <p className="text-red-500">No results found.</p>
        )}
      </div>
    </div>
  );
}
