import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header({ children }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("name-page")}>
        <Link to="/"> Burger Builder</Link>

        <Link to="/login"> Login </Link>
      </div>
    </div>
  );
}

export default Header;
