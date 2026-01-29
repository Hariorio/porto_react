export default function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-lg bg-white shadow border p-4 ${className}`}
      >
      {children}
    </div>
  );
}

// cara pakai
// <Card>
//   konten
// </Card>

// <Card className="p-6 shadow-lg">
//   konten
// </Card>
