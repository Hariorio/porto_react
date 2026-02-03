export default function Alert({ children, className = "" }) {
  return (
    <div className={`text-white p-2 transition ${className}`}>
      {children}
    </div>
  );
}



