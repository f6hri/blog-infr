interface CheckboxProps {
  content: string;
  colorScheme?: string;
}

export function Checkbox({ content, colorScheme = "primary" }: CheckboxProps) {
  return (
    <div className="form-group">
      <div className={`form-check form-check-${colorScheme}`}>
        <label className="form-check-label">
          <input type="checkbox" className="form-check-input" />
          {content}
          <i className="input-helper"></i>
        </label>
      </div>
    </div>
  );
}
