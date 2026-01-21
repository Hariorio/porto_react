// import { useState } from "react";
// import { Routes, Route } from "react-router-dom";

// import Login from "./pages/Login.jsx";
// import HomePage from "./pages/HomePage.jsx";
// import ExperiencePage from "./pages/ExperiencePage.jsx";
// import ContactPage from "./pages/ContactPage.jsx";

// import Navbar from "./components/Navbar.jsx";
// import Sidebar from "./components/Sidebar.jsx";
// import Footer from "./components/Footer.jsx";

// import Master from "./Layouts/Master.jsx"

// export default function App() {

//   const [mobileOpen, setMobileOpen] = useState(false);


//   const [collapsed, setCollapsed] = useState(true);

//   const handleMenuClick = () => {
//     const isDesktop = window.matchMedia("(min-width: 768px)").matches;

//     if (isDesktop) {
      
//       setCollapsed((prev) => !prev);
//     } else {
      
//       setMobileOpen(true);
//     }
//   };

//   return (
    
//     <div className="min-h-screen flex">
//       <Sidebar
//         collapsed={collapsed}
//         mobileOpen={mobileOpen}
//         onMobileClose={() => setMobileOpen(false)}
//       />

//       <div className="flex-1 flex flex-col">
//         <Navbar onMenuClick={handleMenuClick} />

//         <main className="flex-1 bg-slate-50 p-6">
//           <div className="mx-auto w-full max-w-5xl">
//             <Routes>
//             <Route path="/" element={<Login />} />

//             <Route element={<Master />}>
//               <Route path="/homepage" element={<HomePage />} />
//               <Route path="/experience" element={<ExperiencePage />} />
//               <Route path="/contact" element={<ContactPage />} />
//             </Route>
//             </Routes>
//           </div>
//         </main>

//         <Footer />
//       </div>
//     </div>
//   );
// }
import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login.jsx";
import HomePage from "./pages/HomePage.jsx";
import ExperiencePage from "./pages/ExperiencePage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

import Master from "./Layouts/Master.jsx"

export default function App() {
  return (
    <Routes>
   
      <Route path="/" element={<Login />} />
      <Route element={<Master />}>
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}
