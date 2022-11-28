//
import cls from "classnames";
import styles from "./Blockquote.module.scss";

const Blockquote = (props: any) => {
  const { className, ...rest } = props;

  const defaultClassName = "blockquote-tag";

  const classNames = cls(styles.Blockquote, defaultClassName, className);

  return <blockquote {...rest} className={classNames} />;
};

export default Blockquote;
