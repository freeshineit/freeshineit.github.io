//
const Pre = (props: any) => {
  const { className, style, children, ...rest } = props;

  const defaultClassName = "pre-block";
  const classNames = className
    ? `${className} ${defaultClassName}`
    : defaultClassName;
  return (
    <div {...rest} className={classNames} style={style}>
      {children}
    </div>
  );
};

export default Pre;
