//
const Delete = (props: any) => {
  const { className, ...rest } = props;

  const defaultClassName = "del-tag";
  const classNames = className
    ? `${className} ${defaultClassName}`
    : defaultClassName;
  return <del {...rest} className={classNames} />;
};

export default Delete;
