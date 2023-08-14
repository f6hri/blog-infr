interface SelectProps {
  label?: string;
  id: string;
  colorScheme?: string;
  size?: string;
  options: any;
}

export function Select({ label, id, size = "md", options }: SelectProps) {
  return (
    <div className="form-group">
      {label && <label htmlFor={id}>{label}</label>}
      <select className={`form-control form-control-${size}`} id={id}>
        {options.forEach((value: any) => (
          <option value={value}>{value}</option>
        ))}
      </select>
    </div>
  );
}
