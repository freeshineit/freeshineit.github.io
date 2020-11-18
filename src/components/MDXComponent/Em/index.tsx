//
import cls from "classnames";

import styles from "./Em.module.scss";

const Em = (props: any) => {
  const { className, ...rest } = props;

  const defaultClassName = "em-tag";

  const classNames = cls(styles.Em, defaultClassName, className);

  return <em {...rest} className={classNames} />;
};

export default Em;
