//
const Pre = (props: any) => {
  const { className, ...rest } = props;

  const defaultClassName = "pre-block";
  const classNames = className
    ? `${className} ${defaultClassName}`
    : defaultClassName;
  return <div {...rest} className={classNames} />;
};

export default Pre;
