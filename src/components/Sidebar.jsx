import { NavLink } from "react-router-dom";

const nav = [
  {
    to: "/HomePage",
    label: "Home",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path
          d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    to: "/experience",
    label: "Experience",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path
          d="M9 6V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M4 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    to: "/contact",
    label: "Contact",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path
          d="M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="m5 8 7 5 7-5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

function SidebarContent({ collapsed, onNavigate }) {
  return (
    <div className="flex h-full w-full flex-col p-4">
      {/* Header */}
      <div
        className={`flex items-center gap-3 ${
          collapsed ? "justify-center" : ""
        }`}
      >
        <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-500 shrink-0" />

        {/* Text header (animate hide/show) */}
        <div
          className={[
            "leading-tight transition-all duration-300 ease-in-out",
            collapsed
              ? "opacity-0 translate-x-2 pointer-events-none w-0 overflow-hidden"
              : "opacity-100 translate-x-0 w-auto",
          ].join(" ")}
        >
          <p className="font-semibold whitespace-nowrap">My Portfolio</p>
          <p className="text-xs text-slate-400 whitespace-nowrap">
            React + Vite + Tailwind
          </p>
        </div>
      </div>

      {/* Nav */}
      <nav className={`mt-8 space-y-1 ${collapsed ? "px-1" : ""}`}>
        {nav.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            onClick={onNavigate}
            title={collapsed ? item.label : undefined}
            className={({ isActive }) =>
              [
                "group flex items-center rounded-lg px-3 py-2 text-sm transition",
                "hover:bg-white/5",
                collapsed ? "justify-center" : "justify-between",
                isActive ? "bg-white/10 text-white" : "text-slate-300 hover:text-white",
              ].join(" ")
            }
          >
            <span className="flex items-center gap-3">
              {/* Icon */}
              <span className="shrink-0 transition-transform duration-200 group-hover:scale-110">
                {item.icon}
              </span>

              {/* Label animate */}
              <span
                className={[
                  "transition-all duration-300 ease-in-out whitespace-nowrap",
                  collapsed
                    ? "opacity-0 translate-x-2 w-0 overflow-hidden"
                    : "opacity-100 translate-x-0 w-auto",
                ].join(" ")}
              >
                {item.label}
              </span>
            </span>

            {/* Arrow only when expanded */}
            <span
              className={[
                "text-xs text-slate-500 transition-all duration-300 ease-in-out",
                collapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100",
              ].join(" ")}
            >
              ↗
            </span>
          </NavLink>
        ))}
      </nav>

      <div className="flex-1" />

      {/* Bottom card animate */}
      <div
        className={[
          "rounded-lg bg-white/5 text-xs text-slate-300 transition-all duration-300 ease-in-out",
          collapsed
            ? "opacity-0 translate-y-2 pointer-events-none h-0 overflow-hidden p-0"
            : "opacity-100 translate-y-0 p-3",
        ].join(" ")}
      >
        <p className="font-medium text-slate-200">Quick Info</p>
        <p className="mt-1 text-slate-400">Build fast UI with Tailwind.</p>
      </div>

      {/* Copyright animate */}
      <p
        className={[
          "mt-4 text-[11px] text-slate-500 transition-all duration-300 ease-in-out",
          collapsed
            ? "opacity-0 translate-y-1 h-0 overflow-hidden"
            : "opacity-100 translate-y-0",
        ].join(" ")}
      >
        © {new Date().getFullYear()} — Built with Vite
      </p>
    </div>
  );
}

export default function Sidebar({ collapsed, mobileOpen, onMobileClose }) {
  return (
    <>
      {/* ✅ Desktop sidebar (collapse smooth) */}
      <aside
        className={[
          "hidden md:flex h-screen sticky top-0 bg-slate-950 text-slate-100 border-r border-white/10",
          "overflow-hidden",
          "transition-[width] duration-300 ease-in-out", // ANIMASI WIDTH
          collapsed ? "w-20" : "w-64",
        ].join(" ")}
      >
        <SidebarContent collapsed={collapsed} />
      </aside>

      {/* ✅ Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden ${
          mobileOpen ? "" : "pointer-events-none"
        }`}
      >
        {/* overlay */}
        <div
          onClick={onMobileClose}
          className={`absolute inset-0 bg-black/50 transition-opacity duration-200 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* panel */}
        <aside
          className={`absolute left-0 top-0 h-full w-[80%] max-w-xs bg-slate-950 text-slate-100 border-r border-white/10 transform transition-transform duration-200 ${
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* close button */}
          <div className="absolute right-3 top-3">
            <button
              onClick={onMobileClose}
              className="h-9 w-9 rounded-lg border border-white/10 grid place-items-center hover:bg-white/5 active:scale-95 transition"
              aria-label="Close sidebar"
            >
              ✕
            </button>
          </div>

          {/* mobile selalu full (tidak collapsed) */}
          <SidebarContent collapsed={false} onNavigate={onMobileClose} />
        </aside>
      </div>
    </>
  );
}
