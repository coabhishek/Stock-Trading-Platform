import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // 🚀 Fixed: Added Axios import here
import "./UserProfile.css";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Manage dynamic login visibility
  const [isLoggedIn, setIsLoggedIn] = useState(true); 
  const [user, setUser] = useState({
    name: "Zeeshan Ullah",
    avatarInitials: "ZU",
  });

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
    setIsProfileDropdownOpen(false); 
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  // Modern Real-time Axios Logout control API handler
  const handleLogout = async () => {
    try {
      // 1. Backend server api alert mapping hit 
      await axios.post("http://localhost:3002/logout");
      
      // 2. Clear browser cache keys securely
      localStorage.removeItem("token");
      setIsLoggedIn(false);
      setIsProfileDropdownOpen(false);
      
      alert("Logged out successfully!");
      navigate("/login"); 
    } catch (err) {
      console.log("Logout failed", err);
      // Fallback: Agar token error ya network fail bhi ho, tab bhi client side lock clear hoga
      localStorage.removeItem("token");
      setIsLoggedIn(false);
      setIsProfileDropdownOpen(false);
      navigate("/login");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  const navItems = [
    { label: "Dashboard", to: "/" },
    { label: "Orders", to: "/orders" },
    { label: "Holdings", to: "/holdings" },
    { label: "Positions", to: "/positions" },
    { label: "Funds", to: "/funds" },
    { label: "Apps", to: "/apps" }
  ];

  return (
    <div className="menu-container">
      <img src="img/kite-logo.svg" style={{ width: "50px" }} alt="Logo" />
      <div className="menus">
        <ul>
          {navItems.map((item, index) => (
            <li key={item.to}>
              <Link
                style={{ textDecoration: "none" }}
                to={item.to}
                onClick={() => handleMenuClick(index)}
              >
                <p className={selectedMenu === index ? activeMenuClass : menuClass}>
                  {item.label}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        <hr />

        {/* Profile trigger boundary */}
        <div
          className="profile"
          ref={dropdownRef}
          onClick={handleProfileClick}
          style={{
            cursor: "pointer",
            position: "relative",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            zIndex: 10
          }}
        >
          <div className="avatar">{isLoggedIn ? user.avatarInitials : "??"}</div>
          <p className="username" style={{ margin: 0, fontWeight: "500" }}>
            {isLoggedIn ? user.name : "Guest"}
          </p>

          {isProfileDropdownOpen && (
            <div
              className="profile-dropdown"
              onClick={(e) => e.stopPropagation()} 
              style={{
                position: "absolute",
                top: "100%",
                right: "0",
                marginTop: "10px",
                padding: "10px",
                background: "#ffffff",
                border: "1px solid #dddddd",
                borderRadius: "4px",
                width: "160px",
                zIndex: 9999,
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)"
              }}
            >
              {!isLoggedIn ? (
                <>
                  <Link
                    to="/login"
                    onClick={() => setIsProfileDropdownOpen(false)}
                    style={{ display: "block", padding: "6px 8px", textDecoration: "none", color: "#333", fontSize: "14px" }}
                  >
                    Log in
                  </Link>
                  <Link
                    to="/signup"
                    onClick={() => setIsProfileDropdownOpen(false)}
                    style={{ display: "block", padding: "6px 8px", textDecoration: "none", color: "#333", fontSize: "14px" }}
                  >
                    Sign up
                  </Link>
                </>
              ) : (
                <>
                  <div style={{ padding: "4px 8px", fontSize: "11px", color: "#666" }}>
                    Logged in as: <strong style={{ color: "#333" }}>{user.name}</strong>
                  </div>
                  <hr style={{ margin: "6px 0", border: "none", borderTop: "1px solid #eee" }} />
                  <button
                    onClick={handleLogout}
                    style={{
                      display: "block",
                      width: "100%",
                      textAlign: "left",
                      background: "none",
                      border: "none",
                      padding: "6px 8px",
                      color: "red",
                      fontSize: "14px",
                      cursor: "pointer"
                    }}
                  >
                    🚪 Log out
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
