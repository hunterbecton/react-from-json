export const Button = ({ className, style, id, children }) => {
  return (
    <button id={id} className={className} style={style}>
      {children}
    </button>
  );
};
