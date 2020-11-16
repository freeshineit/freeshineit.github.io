//
const H1 = (props: any) => {
  const { className, ...rest } = props;

  const defaultClassName = "h1-tag";
  const classNames = className
    ? `${className} ${defaultClassName}`
    : defaultClassName;
  return <h1 {...rest} className={classNames} />;
};

export default H1;
