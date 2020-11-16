//
const A = (props: any) => {
  const { className, ...rest } = props;

  const defaultClassName = "a-tag";
  const classNames = className
    ? `${className} ${defaultClassName}`
    : defaultClassName;
  return <a {...rest} className={classNames} />;
};

export default A;
