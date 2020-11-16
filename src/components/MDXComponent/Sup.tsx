//
const Sup = (props: any) => {
  const { className, ...rest } = props;

  const defaultClassName = "sup-tag";
  const classNames = className
    ? `${className} ${defaultClassName}`
    : defaultClassName;
  return <sup {...rest} className={classNames} />;
};

export default Sup;
