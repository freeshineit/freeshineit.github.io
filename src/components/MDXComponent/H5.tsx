//
const H5 = (props: any) => {
  const { className, ...rest } = props;

  const defaultClassName = "h5-tag";
  const classNames = className
    ? `${className} ${defaultClassName}`
    : defaultClassName;
  return <h5 {...rest} className={classNames} />;
};

export default H5;
