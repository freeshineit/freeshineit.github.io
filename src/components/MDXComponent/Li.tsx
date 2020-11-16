//
const Li = (props: any) => {
  const { className, ...rest } = props;

  const defaultClassName = "li-tag";
  const classNames = className
    ? `${className} ${defaultClassName}`
    : defaultClassName;
  return <li {...rest} className={classNames} />;
};

export default Li;
