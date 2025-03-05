
import "./App.css";
import SidebarComponent from "./components/SidebarComponent";
import DashboardComponent from "./components/DashboardComponent";

import TopNavbarComponent from "./components/TopNavbarComponent";
import LearningMaterialsComponent from "./components/LearningMaterialsComponent";
import AssignmentsComponent from "./components/AssignmentsComponent";
import { useState } from "react";

function App() {
  const  [allDataInput, setAllDataInput] = useState();
  return (
    <>
      <div className="grid grid-cols-12 bg-[#f5f7f8]">
        <div className="col-span-2">
          <SidebarComponent />
        </div>
        <div className="col-span-10">
          <div className="py-3 pl-7 pr-5">
           <TopNavbarComponent allData={(e) => setAllDataInput(e)}/>
          </div>
          <div className=" grid grid-cols-12">
            <div className="col-span-9">
              <div className="py-3 pl-7">
               <DashboardComponent />
               </div>
               <div className="pt-3 pl-7">
               <AssignmentsComponent getDataInput={allDataInput} />
               </div>
            </div>   
            <div className="col-span-3 px-6 py-3" >
              <LearningMaterialsComponent/>
            </div> 
          </div>
        </div>
        
      </div>

    </>
  );
}

export default App;
