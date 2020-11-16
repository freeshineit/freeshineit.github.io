//
const Strong = (props: any) => {
  const { className, ...rest } = props;

  const defaultClassName = "strong-tag";
  const classNames = className
    ? `${className} ${defaultClassName}`
    : defaultClassName;
  return <strong {...rest} className={classNames} />;
};

export default Strong;
