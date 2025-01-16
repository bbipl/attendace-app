import React, { useState } from "react";
import StatesManagement from "./sitesManagement/StatesManagement";
import DistrictsManagement from "./sitesManagement/DistrictsManagement";
import BlocksManagement from "./sitesManagement/BlocksManagement";
import SitesManagement from "./sitesManagement/SitesManagement";
import WorkTypeManagement from "./sitesManagement/WorkTypeManagement";

import { Navigate, useNavigate, useLocation } from "react-router-dom";


const AdminDashboard = () => {
  const location = useLocation();
  const { data } = location.state || {};
  const [activeComponent, setActiveComponent] = useState("states"); // State to track active component

  const navigate = useNavigate();

  const renderComponent = () => {
    switch (activeComponent) {
      case "states":
        return <StatesManagement />;
      case "districts":
        return <DistrictsManagement />;
      case "blocks":
        return <BlocksManagement />;
      case "sites":
        return <SitesManagement />;
      case "work-type":
        return <WorkTypeManagement />;
      default:
        return (
          <p className="text-gray-600">Please select an option from above.</p>
        );
    }
  };



  return (
    <div className="p-1 bg-gray-100 min-h-screen">
      
      <div className=" grid gap-2 grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        <button
          onClick={() => setActiveComponent("states")}
          className="w-100 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
        >
          State
        </button>
        
        <button
          onClick={() => setActiveComponent("districts")}
          className=" w-100 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-200"
        >
          District
        </button>
        <button
          onClick={() => setActiveComponent("blocks")}
          className=" w-100 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-200"
        >
          Block
        </button>
        <button
          onClick={() => setActiveComponent("sites")}
          className=" w-100 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-200"
        >
          Sites
        </button>
        <button
          onClick={() => setActiveComponent("work-type")}
          className=" w-100 px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition duration-200"
        >
          Work Type
        </button>
       
      </div>
      <div className=" bg-gray-50 rounded shadow">{renderComponent()}</div>
    </div>
  );
};

export default AdminDashboard;