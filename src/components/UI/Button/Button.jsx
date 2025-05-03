function Button({ onClick, disabled, children }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 disabled:opacity-50 mt-4"
    >
      {children}
    </button>
  );
}

export default Button;
