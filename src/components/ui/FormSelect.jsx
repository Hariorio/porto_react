import FormLabel from "./FormLabel.jsx";

export default function FormSelect({
  id,
  label,
  value,
  onChange,
  options = [],
  placeholder = "Pilih...",
  required = false,
  error = "",
}) {
  return (
    <div className="space-y-1">
      <FormLabel htmlFor={id} required={required}>
        {label}
      </FormLabel>

      <select
        id={id}
        value={value}
        onChange={onChange}
        className={[
          "w-full rounded-xl border bg-white px-4 py-3 text-slate-900",
          "outline-none transition",
          "focus:border-slate-400 focus:ring-2 focus:ring-slate-200",
          error ? "border-rose-400 focus:ring-rose-200" : "border-slate-200",
        ].join(" ")}
      >
        <option value="">{placeholder}</option>

        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {error && <p className="text-sm text-rose-600">{error}</p>}
    </div>
  );
}
