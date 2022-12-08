import React, { useEffect } from "react";
import "./Navbar.css";
import { useAuth } from "../../AllPages/auth";
import { Link, useHistory } from "react-router-dom";
import NavbarAPI from "../../API/NavbarAPI";
import { useDispatch, useSelector } from "react-redux";

function Navbar() {
  const auth = useAuth();
  const history = useHistory();
  const nav = useSelector((state) => state.navigationList.navbaroption.data);

  const dispatch = useDispatch();
  useEffect(() => dispatch(NavbarAPI()), []);
  const handleLogout = () => {
    auth.logout();
    history.push("/");
  };
  const handleHome = () => {
    history.push("/");
  };

  return (
    <div className="Navbar">
      <img
        className="logo"
        onClick={handleHome}
        src="https://marketplace.canva.com/EAEzQaSmAUI/1/0/1600w/canva-blue-abstract-medical-center-hospital-logo-z3629EOCLb8.jpg "
        alt="logo"
      />
      <ul className="lists">
        {nav &&
          nav.map((item) => (
            <li key={item.id}>
              <h1
                onClick={() => {
                  history.push(item.link);
                }}
              >
                {item.option}
              </h1>
            </li>
          ))}
        <div className="logout">
          <Link
            style={{ color: "burlywood", fontSize: "20px" }}
            onClick={handleLogout}
          >
            LOGOUT
          </Link>
        </div>
      </ul>
      {!auth.user}
    </div>
  );
}

export default Navbar;
