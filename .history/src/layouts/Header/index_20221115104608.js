import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header({ children }) {
  const navigate = useNavigate();
  return (
    <div className={cx("wrapper")}>
      <div className={cx("home")}>
        <Button main> Burger Builder</Button>
        <Button main> Login</Button>
        <Button main> Order</Button>
      </div>
    </div>
  );
}

export default Header;
