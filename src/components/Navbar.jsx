import { useState } from "react";



export default function Navbar({ onMenuClick }) {
const [mbukak, setMbukak] = useState(false);
 
function handleX() {
  // console.log(i);
   setMbukak((mbukak) => !mbukak);
   console.log(mbukak);
}

  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left */}
        <div className="flex items-center gap-3">
          {/* Tombol menu selalu tampil */}
          <button
            type="button"
            onClick={onMenuClick}
            className="h-9 w-9 rounded-lg border border-slate-200 grid place-items-center hover:bg-slate-50 active:scale-95 transition"
            aria-label="Toggle sidebar"
          >
            <div className="space-y-1">
              <span className="block h-0.5 w-5 bg-slate-800"></span>
              <span className="block h-0.5 w-5 bg-slate-800"></span>
              <span className="block h-0.5 w-5 bg-slate-800"></span>
            </div>
          </button>

          <div>
            <p className="text-sm text-slate-500">Welcome</p>
            <h1 className="text-lg font-semibold tracking-tight">
              HRIS Management
            </h1>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2">
          <button className="rounded-lg border border-slate-200 px-3 py-2 text-sm hover:bg-slate-50">
            Hire Me
          </button>

          {/* <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-slate-900 px-3 py-2 text-sm text-white hover:bg-slate-800"
          >
            GitHub
          </a> */}
      <div className="relative inline-block">
        <button
          className="avatar-circle cursor-pointer"
          onClick={handleX}
        >
          AA
        </button>
        {mbukak && (
        <div className="absolute right-0 mt-3 w-64 rounded-2xl bg-white shadow-lg border border-slate-200 p-4">
          
                  {/* Header user */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center font-semibold">
                      AD
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">SPV User</p>
                      <p className="text-xs text-slate-500">Administrator</p>
                    </div>
                  </div>

                  {/* Menu */}
                  <div className="space-y-2">
                    <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 text-sm">
                      🏠 Home
                    </button>

                    <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 text-sm">
                      👤 User Profile
                    </button>
                  </div>

                  {/* Logout */}
                  <button className="mt-4 w-full rounded-xl bg-blue-600 py-2 text-white font-semibold hover:bg-blue-700 transition">
                    Logout
                  </button>
        </div>

          // <div className="dropdown-panel absolute right-0 mt-2 w-52 z-50">
          //     <div className="card">
          //     <div className="card-kecil">
          //      <div className="avatar">AD</div> 

          //     </div>

               
          //     </div>

           
          //   </div>
          )}
      </div>
      </div>
      </div>
    </header>
  );
}
