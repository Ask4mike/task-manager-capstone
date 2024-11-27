import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

const Textbox = React.forwardRef(
  ({ placeholder, label, type, name, className, register, error }, ref) => {
    return (
      <div className="w-full flex flex-col gap-1">
        {label && (
          <label htmlFor={name} className="text-slate-800 ml-3">
            {label}
          </label>
        )}

        <div>
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            ref={ref}
            {...register}
            aria-invalid={error ? "true" : "false"}
            className={clsx(
              "bg-transparent mt-2 px-6 py-3 2xl:py-3 border border-gray-300 placeholder-gray-400 text-gray-900 outline-none text-base focus:ring-2 ring-blue-300",
              className
            )}
          />
        </div>

        {error && (
          <span className="text-[#f64949fe] text-sm mt-1 px-6">{error}</span>
        )}
      </div>
    );
  }
);

Textbox.displayName = "Textbox";

Textbox.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string.isRequired, // Ensures `type` is always provided
  name: PropTypes.string.isRequired, // Ensures `name` is always provided
  className: PropTypes.string,
  register: PropTypes.object, // Adjust if `register` is a specific shape
  error: PropTypes.bool,
};

export default Textbox;
