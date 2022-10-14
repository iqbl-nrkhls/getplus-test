import { forwardRef } from "react";

export const Input = forwardRef(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      {...props}
      className={`border rounded text-base px-2 py-1 outline-none focus:ring transition ${className}`}
    />
  );
});

export const Textarea = forwardRef(({ className, value, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      {...props}
      className={`border rounded text-base px-2 py-1 outline-none focus:ring transition ${className}`}
    >
      {value}
    </textarea>
  );
});
