import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Navbar from "../components/Navbar.jsx";
import Sidebar from "../components/Sidebar.jsx";
import Footer from "../components/Footer.jsx";

export default function Master() {
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const handleMenuClick = () => {
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;

    if (isDesktop) {
      setCollapsed((prev) => !prev); 
    } else {
      setMobileOpen(true); 
    }
  };

  
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex">
      <Sidebar
        collapsed={collapsed}
        mobileOpen={mobileOpen}
        onMobileClose={() => setMobileOpen(false)}
      />

      <div className="flex-1 flex flex-col">
        <Navbar onMenuClick={handleMenuClick} />

        <main className="flex-1 bg-slate-50 p-6">
          <div className="mx-auto w-full max-w-5xl">
            <Outlet />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}


