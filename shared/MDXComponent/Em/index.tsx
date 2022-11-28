//
import cls from "classnames";

const Em = (props: any) => {
  const { className, ...rest } = props;

  const defaultClassName = "em-tag";

  const classNames = cls(defaultClassName, className);

  return <em {...rest} className={classNames} />;
};

export default Em;
