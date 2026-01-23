export default function Avatar({ label = "AA", onClick }) {
  return (
    <div
      onClick={onClick}
      className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center
                 font-semibold cursor-pointer hover:opacity-80 transition"
    >
      {label}
    </div>
  );
}
