export default function Alert({ children, className = "" }) {
  return (
    <div
      className={`fixed top-5 left-1/2 transform -translate-x-1/2 z-50 text-white p-3  shadow-lg transition ${className}`}
      >
      <div className="flex items-center">
        {/* Ikon silang SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6 mr-2 text-white" 
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
       <span>{children}</span>
      </div>
       
    </div>
  );
}

export function AlertSukses({ children, className = "" })
{
return (
  <div className={`fixed top-5 left-1/2 transform -translate-x-1/2 z-50 text-white p-4 shadow-lg transition ${className}`}>
      <div className="flex items-center">
      <svg 
        viewBox="0 0 24 24" 
        width="24" 
        height="24" 
        fill="currentColor" 
        className="icon-check-circle"
      >
        <title>check-circle</title>
        <path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
      </svg>

       <span className="ml-2">{children}</span>
      </div>
  </div>
);

}
