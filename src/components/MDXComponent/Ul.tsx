//
const Ul = (props: any) => {
  const { className, ...rest } = props;

  const defaultClassName = "ul-tag";
  const classNames = className
    ? `${className} ${defaultClassName}`
    : defaultClassName;
  return <ul {...rest} className={classNames} />;
};

export default Ul;
