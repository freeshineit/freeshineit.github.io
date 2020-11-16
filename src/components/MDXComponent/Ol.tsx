//
const Ol = (props: any) => {
  const { className, ...rest } = props;

  const defaultClassName = "ol-tag";
  const classNames = className
    ? `${className} ${defaultClassName}`
    : defaultClassName;
  return <ol {...rest} className={classNames} />;
};

export default Ol;
