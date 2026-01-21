export default function FormLabel({ htmlFor, children, required = false }) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-semibold text-slate-700"
    >
      {children}{" "}
      {required && <span className="text-rose-500 font-bold">*</span>}
    </label>
  );
}
