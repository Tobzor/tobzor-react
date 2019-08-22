// Dependencies
import React from "react";
// Locals
import styles from "./Toggle.module.css";

interface Toggle {
    checked: boolean;
    onChange: () => void;
    shape?: "round" | "square";
}

const Toggle: React.FC<Toggle> = ({ checked, onChange, shape = "round" }) => {
    return (
        <label className={styles.toggle}>
            <input type="checkbox" checked={checked} onChange={onChange} />
            <span className={styles[shape]} />
        </label>
    );
};

export default Toggle;
