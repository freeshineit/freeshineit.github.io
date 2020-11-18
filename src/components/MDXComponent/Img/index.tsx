//
import styles from "./Img.module.scss";
import cls from "classnames";

const Img = (props: any) => {
  const { className, ...rest } = props;

  const defaultClassName = "img-tag";

  const classNames = cls(styles.Img, defaultClassName, className);

  return <img {...rest} className={classNames} />;
};

export default Img;
