//
const Hr = (props: any) => {
  const { className, ...rest } = props;

  const defaultClassName = "hr-tag";
  const classNames = className
    ? `${className} ${defaultClassName}`
    : defaultClassName;
  return <hr {...rest} className={classNames} />;
};

export default Hr;
