//
const H2 = (props: any) => {
  const { className, ...rest } = props;

  const defaultClassName = "h2-tag";
  const classNames = className
    ? `${className} ${defaultClassName}`
    : defaultClassName;
  return <h2 {...rest} className={classNames} />;
};

export default H2;
