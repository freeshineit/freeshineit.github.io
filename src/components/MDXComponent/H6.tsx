//
const H6 = (props: any) => {
  const { className, ...rest } = props;

  const defaultClassName = "h6-tag";
  const classNames = className
    ? `${className} ${defaultClassName}`
    : defaultClassName;
  return <h6 {...rest} className={classNames} />;
};

export default H6;
