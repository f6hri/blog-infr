interface InputProps {
  id: string;
  label?: string;
  size?: string;
  type?: string;
  placeholder?: string;
}

export function Input({
  id,
  label,
  type = "text",
  size = "md",
  placeholder,
}: InputProps) {
  return (
    <div className="form-group">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        type={type}
        className={`form-control form-control-${size}`}
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
}
