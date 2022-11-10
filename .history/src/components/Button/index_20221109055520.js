import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";
const cx = classNames.bind(styles);
function Button({
  to,
  href,
  onClick,
  primary,
  less,
  more,
  children,
  ...passProps
}) {
  let Comp = "button";
  const props = {
    onClick,
    ...passProps,
  };
  const classes = cx("wrapper", {
    primary,
    less,
    more,
    children,
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
      <Comp className={classes} {...props}>
        <span>{children}</span>
      </Comp>
    </div>
  );
}

export default Button;
