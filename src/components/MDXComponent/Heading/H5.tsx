//
import styles from "./Heading.module.scss";
import cls from "classnames";

const H5 = (props: any) => {
  const { className, ...rest } = props;

  const defaultClassName = "h5-tag";

  const classNames = cls(styles.H5, defaultClassName, className);

  return <h5 {...rest} className={classNames} />;
};

export default H5;
