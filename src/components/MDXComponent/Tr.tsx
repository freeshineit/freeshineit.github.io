//
const Tr = (props: any) => {
  const { className, ...rest } = props;

  const defaultClassName = "tr-tag";
  const classNames = className
    ? `${className} ${defaultClassName}`
    : defaultClassName;
  return <tr {...rest} className={classNames} />;
};

export default Tr;
