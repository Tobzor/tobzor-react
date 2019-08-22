// Dependencies
import React from "react";
// Locals
import styles from "./Header.module.css";
import DarkModeToggle from "../toggle/DarkModeToggle.tsx/DarkModeToggle";
import me from "../../assets/img/pixelart-torbjørn.jpg";

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <img className={styles.img} src={me} alt="me" />
            <DarkModeToggle />
        </header>
    );
};

export default Header;
