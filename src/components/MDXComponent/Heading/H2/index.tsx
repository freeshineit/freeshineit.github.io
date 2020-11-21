//
import styles from "./H2.module.scss";
import cls from "classnames";

const H2 = (props: any) => {
  const { className, children, ...rest } = props;

  const defaultClassName = "h2-tag";

  const classNames = cls(styles.H2, defaultClassName, className);

  return (
    // <a href={`#${children}`}>
    <h2 {...rest} className={classNames}>
      {children}
    </h2>
    // </a>
  );
};

export default H2;
