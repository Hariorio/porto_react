export default function Navbar({ onMenuClick }) {
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
              Dashboard Portfolio
            </h1>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2">
          <button className="rounded-lg border border-slate-200 px-3 py-2 text-sm hover:bg-slate-50">
            Hire Me
          </button>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-slate-900 px-3 py-2 text-sm text-white hover:bg-slate-800"
          >
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
}
