//
const H3 = (props: any) => {
  const { className, ...rest } = props;

  const defaultClassName = "h3-tag";
  const classNames = className
    ? `${className} ${defaultClassName}`
    : defaultClassName;
  return <h3 {...rest} className={classNames} />;
};

export default H3;
