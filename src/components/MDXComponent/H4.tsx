//
const H4 = (props: any) => {
  const { className, ...rest } = props;

  const defaultClassName = "h4-tag";
  const classNames = className
    ? `${className} ${defaultClassName}`
    : defaultClassName;
  return <h4 {...rest} className={classNames} />;
};

export default H4;
