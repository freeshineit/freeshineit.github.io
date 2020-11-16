//
const Em = (props: any) => {
  const { className, ...rest } = props;

  const defaultClassName = "em-tag";
  const classNames = className
    ? `${className} ${defaultClassName}`
    : defaultClassName;
  return <em {...rest} className={classNames} />;
};

export default Em;
