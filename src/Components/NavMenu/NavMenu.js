import {useState} from "react";
import {HiHeart} from "react-icons/hi";

import {Link, useMatch} from "react-router-dom";

const Menu = () => {
  const [isVisibeMenu, setIsVisibeMenu] = useState(true);
  const handleVisibleMenu = () => {
    setIsVisibeMenu((prev) => !prev);
  };

  const styles = {
    li: {listStyleType: "none"},
  };

  return (
    <div className="d-flex justify-content-space-between align-items-center p-1">
      <HiHeart
        style={{color: isVisibeMenu ? "#d61636" : "#1a3529"}}
        onClick={() => handleVisibleMenu()}
      />

      {isVisibeMenu ? (
        <>
          <nav className="d-flex">
            <ul className="d-flex justify-content-space-between align-items-center m-0">
              <li style={styles.li}>
                <OldSchoolMenuLink to="/" label={"Home"} />
              </li>
              <li style={styles.li}>
                <OldSchoolMenuLink to="/about" label={"About"} />
              </li>
              <li style={styles.li}>
                <OldSchoolMenuLink
                  to="/contact"
                  style={styles.a}
                  label={"Contact"}
                />
              </li>
              <li style={styles.li}>
                <OldSchoolMenuLink to="/users" label={"Users"} />
              </li>
            </ul>
          </nav>
          <hr />
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Menu;

const OldSchoolMenuLink = ({label, to, activeOnlyWhenExact}) => {
  let match = useMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });
  const styles = {
    a: {
      color: match ? "#d61636" : "#1a3529",
      textDecoration: "none",
      padding: "1rem 2rem",
    },
  };

  return (
    <Link to={to} style={styles.a}>
      {label}
    </Link>
  );
};
