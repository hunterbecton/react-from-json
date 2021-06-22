export const Li = ({ className, style, id, children }) => {
  return (
    <li id={id} className={className} style={style}>
      {children}
    </li>
  );
};
