import classNames from "classnames/bind";
import styles from "/Header.module.scss";

const cx = classNames.bind(styles);

function Header({ children }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("name-page")}> Burger Builder</div>

      {children}
    </div>
  );
}

export default Header;
