export function Button({ className, children, isLoading, type, ...props }) {
  return (
    <button
      {...props}
      className={`px-3 py-1 rounded bg-gray-600 text-white ${className}`}
      disabled={isLoading}
      type={type || "button"}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
}
