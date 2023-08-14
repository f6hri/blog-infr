interface TextAreaProps {
  id: string;
  size?:string;
  label?: string;
  placeholder?: string;
}

export function TextArea({ id, label,size="md", placeholder }: TextAreaProps) {
  return (
    <div className="form-group">
      {label && <label htmlFor={id}>{label}</label>}
      <textarea
        className={`form-control form-control-${size}`}
        placeholder={placeholder}
        id={id}
        rows={4}
      ></textarea>
    </div>
  );
}
