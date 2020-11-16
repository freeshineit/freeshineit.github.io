//
const P = (props: any) => {
  const { className, ...rest } = props;

  const defaultClassName = "p-tag";
  const classNames = className
    ? `${className} ${defaultClassName}`
    : defaultClassName;
  return <p {...rest} className={classNames} />;
};

export default P;
