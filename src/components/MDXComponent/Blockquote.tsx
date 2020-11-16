//
const Blockquote = (props: any) => {
  const { className, ...rest } = props;

  const defaultClassName = "blockquote-tag";
  const classNames = className
    ? `${className} ${defaultClassName}`
    : defaultClassName;
  return <blockquote {...rest} className={classNames} />;
};

export default Blockquote;
