export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="px-6 py-4 text-sm text-slate-500 flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} My Portfolio</p>
        <p className="text-slate-400">Built with React + Vite + Tailwind</p>
      </div>
    </footer>
  );
}
