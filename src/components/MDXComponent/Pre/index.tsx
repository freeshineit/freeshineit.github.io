//
import styles from "./Pre.module.scss";
import cls from "classnames";

const Pre = (props: any) => {
  const { className, style, children, ...rest } = props;

  const defaultClassName = "pre-tag";

  const classNames = cls(styles.P, defaultClassName, className);

  return (
    <div {...rest} className={classNames} style={style}>
      {children}
    </div>
  );

  // return <pre {...rest} className={classNames} />;
};

export default Pre;
