export const P = ({ className, style, id, children }) => {
  return (
    <p id={id} className={className} style={style}>
      {children}
    </p>
  );
};
