import logo from "../../assets/icon.svg";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link className="logo" to="/">
      <img src={logo} width="100" />
    </Link>
  );
}
