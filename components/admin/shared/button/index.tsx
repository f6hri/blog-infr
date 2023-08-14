type ButtonType = "button" | "submit" | "reset";
type ButtonVariant = "solid" | "outline" | "inverse";
type ButtonColorScheme =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark"
  | "link";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  onClick?: any;
  type?: ButtonType;
  variant?: ButtonVariant;
  colorScheme?: ButtonColorScheme;
  title: string;
  rounded?: boolean;
  size?: ButtonSize;
  block?: boolean;
  isLoading?: boolean;
  leftIconClass?: string;
  rightIconClass?: string;
}

export default function Button({
  onClick,
  type = "button",
  variant = "solid",
  colorScheme = "primary",
  title,
  rounded = false,
  size = "md",
  block = false,
  isLoading = false,
  leftIconClass,
  rightIconClass,
}: ButtonProps) {
  return (
    <button
      disabled={isLoading}
      type={type}
      className={`btn btn-${
        variant === "solid" || isLoading === true ? "" : variant + "-"
      }${colorScheme} btn-${size} ${rounded === true && "btn-rounded"} ${
        block === true && "btn-lg btn-block "
      } ${leftIconClass || rightIconClass ? "btn-icon-text" : ""} `}
      onClick={onClick}
    >
      {isLoading ? (
        <>
          <span className="spinner-border spinner-border-sm" />
        </>
      ) : (
        <>
          {leftIconClass && (
            <i className={`ti-${leftIconClass} btn-icon-prepend`} />
          )}
          {title}
          {rightIconClass && (
            <i className={`ti-${leftIconClass} btn-icon-append`} />
          )}
        </>
      )}
    </button>
  );
}
