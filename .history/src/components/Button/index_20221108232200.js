import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";
const cx = classNames.bind(styles);
function Button(to, href, primary, less, more, ...passProps) {
  let Comp = "button";
  const props = {
    onclick,
    ...passProps,
  };
  const classes = cx("wrapper", {
    primary,
    less,
    more,
  });
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }
  return (
    <div className={cx("wrapper")}>
      <Comp className={classes}></Comp>
    </div>
  );
}

export default Button;
