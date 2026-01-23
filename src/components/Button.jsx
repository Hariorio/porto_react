export function Button({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg hover:bg-slate-100 transition ${className}`}
    >
      {children}
    </button>
  );
}

export function PrimaryButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-blue-600 text-white py-2 rounded-xl
                 hover:bg-blue-700 transition"
    >
      {children}
    </button>
  );
}
