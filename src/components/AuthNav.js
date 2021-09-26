import React, { useState, useEffect } from "react";
import { Avatar, Image } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styles from "../styles/authNav.module.css";
import logo from "../assets/about.svg";
import { getMe } from "../redux/actions/user";
import { getUser } from "../helpers/jwtHelper";
import { FaRegWindowClose, AiOutlineClose } from "react-icons/all";

const AuthNav = (props) => {
  const [active, setActive] = useState(false);

  const burgerClasses = active
    ? `${styles.burger} ${styles.toggle}`
    : `${styles.burger}`;

  useEffect(() => {
    getUser();
  }, [props]);

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <Link to={getUser() ? "/app" : "/"} className={`${styles.link}`} onClick={() => setActive(false)}>
            <img src={logo} alt="logo" />
            <span className={styles.logoText} style={{}}>
              Task Manager
            </span>
          </Link>
        </div>
        {!getUser() && (
          <ul className={styles.list}>
            <li>
              <Link to="/" className={styles.link}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/login" className={styles.link}>
                Login
              </Link>
            </li>
            <li className={styles.li3}>
              <Link to="/register" className={styles.link}>
                Sign Up
              </Link>
            </li>
          </ul>
        )}
        {getUser() && (
          <ul className={styles.list}>
            <li>
              <Link to="/app/profile" className={styles.link}>
                <Avatar
                  icon={<UserOutlined />}
                  size="small"
                  style={{ marginRight: "5px" }}
                />
                <span>
                  {props.user.name ? props.user.name : getUser().name}
                </span>
              </Link>
            </li>
            <li>
              <Link to="/app/create-task" className={styles.link}>
                Create Task
              </Link>
            </li>
            <li className={styles.li3}>
              <Link to="/app/logout" className={styles.link}>
                Logout
              </Link>
            </li>
          </ul>
        )}
        <div className={burgerClasses} onClick={() => setActive(!active)}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
      <div
        className={
          active ? `${styles.navOpen} ${styles.smallNav}` : `${styles.smallNav}`
        }
      >
        {/* <div className={styles.mobileTop}>
          <Link
            to={getUser() ? "/app" : "/"}
            onClick={() => setActive(false)}
            className={`${styles.mobileTopLink}`}
          >
            <img src={logo} alt="logo" />
            <span className={styles.logoText} style={{}}>
              Task Manager
            </span>
          </Link>
          <FaRegWindowClose
            onClick={() => setActive(false)}
            className={styles.close}
          />
        </div> */}
        {!getUser() && (
          <div className={styles.mobileList}>
            <Link
              to="/login"
              className={styles.smallLink}
              onClick={() => setActive(false)}
            >
              Login
            </Link>
            <Link
              to="/register"
              className={styles.smallLink}
              onClick={() => setActive(false)}
            >
              Sign Up
            </Link>
            <Link
              to="/"
              className={styles.smallLink}
              onClick={() => setActive(false)}
            >
              Contact
            </Link>
          </div>
        )}
        {getUser() && (
          <div className={styles.mobileList}>
            <Link
              to="/app/profile"
              className={styles.smallLink}
              onClick={() => setActive(false)}
            >
              {props.user.name ? props.user.name : getUser().name}
            </Link>
            <Link
              to="/app/create-task"
              className={styles.smallLink}
              onClick={() => setActive(false)}
            >
              Create Task
            </Link>
            <Link
              to="/app/logout"
              className={styles.smallLink}
              onClick={() => setActive(false)}
            >
              Logout
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

const mapStateToProps = ({ user }) => {
  return {
    loading: user.loading,
    user: user.user,
    error: user.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMe: () => dispatch(getMe()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthNav);
