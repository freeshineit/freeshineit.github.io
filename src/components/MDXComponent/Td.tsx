//
const Td = (props: any) => {
  const { className, ...rest } = props;

  const defaultClassName = "td-tag";
  const classNames = className
    ? `${className} ${defaultClassName}`
    : defaultClassName;
  return <td {...rest} className={classNames} />;
};

export default Td;
