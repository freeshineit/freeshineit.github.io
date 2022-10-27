//
import cls from "classnames";

const Delete = (props: any) => {
  const { className, ...rest } = props;

  const defaultClassName = "del-tag";

  const classNames = cls(defaultClassName, className);

  return <del {...rest} className={classNames} />;
};

export default Delete;
