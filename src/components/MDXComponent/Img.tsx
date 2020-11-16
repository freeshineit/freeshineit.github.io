//
const Img = (props: any) => {
  const { className, ...rest } = props;

  const defaultClassName = "img-tag";
  const classNames = className
    ? `${className} ${defaultClassName}`
    : defaultClassName;
  return <img {...rest} className={classNames} />;
};

export default Img;
