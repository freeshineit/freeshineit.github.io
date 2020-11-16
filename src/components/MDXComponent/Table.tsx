//
const Table = (props: any) => {
  const { className, ...rest } = props;

  const defaultClassName = "table-tag";
  const classNames = className
    ? `${className} ${defaultClassName}`
    : defaultClassName;
  return <table {...rest} className={classNames} />;
};

export default Table;
