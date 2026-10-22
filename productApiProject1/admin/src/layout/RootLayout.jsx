import React, { useState } from "react";
import Navbar from "../components/common/Navbar";
import SideBar from "../components/common/SideBar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 lg:flex">
      {/* Sidebar */}
      <SideBar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main Content */}
      <div className="min-w-0 flex-1">
        {/* Navbar */}
        <Navbar
          onMenuClick={() => setSidebarOpen(true)}
        />

        {/* Child Pages */}
        <main className="p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default RootLayout;
