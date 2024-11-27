import clsx from "clsx";

// eslint-disable-next-line react/prop-types
const Button = ({ icon, type, label, className, onClick }) => {
  return (
    <button
      type={type || "button"}
      label={label}
      className={clsx("px-[0.25rem] py-[0.75rem] outline-none", className)}
      onClick={onClick}
    >
      {icon && icon}
      <span>{label}</span>
    </button>
  );
};

export default Button;
