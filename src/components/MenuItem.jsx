export default function MenuItem({ icon, label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-3 px-3 py-2
                 rounded-lg hover:bg-slate-100 transition text-left"
    >
      <span>{icon}</span>
      <span>{label}</span>
    </button>
  );
}
