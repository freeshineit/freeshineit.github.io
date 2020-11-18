//
import styles from "./Hr.module.scss";
import cls from "classnames";

const Hr = (props: any) => {
  const { className, ...rest } = props;

  const defaultClassName = "hr-tag";

  const classNames = cls(styles.Hr, defaultClassName, className);

  return <hr {...rest} className={classNames} />;
};

export default Hr;
