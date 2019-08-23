// Dependencies
import React from "react";
// Locals
import styles from "./Wrapper.module.css";

type PageWrapper = {
    children: any;
};

const PageWrapper: React.FC<PageWrapper> = ({ children }) => {
    return <div className={styles.pageWrapper}>{children}</div>;
};

export default PageWrapper;
