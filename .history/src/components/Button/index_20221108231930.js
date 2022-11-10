import classNames from "classnames/bind";
import styles from "./Button.module.scss";
const cx = classNames.bind(styles);
function Button(to, href, primary, less, more, ...passProps) {
  let Comp = "button";
  const props = {
    onclick,
    ...passProps,
  };
  const classes = cx("wrapper", primary, less, more);
  return (
    <div className={cx("wrapper")}>
      <Comp className={classes}></Comp>
    </div>
  );
}

export default Button;
