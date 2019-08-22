// Dependencies
import React, { ReactNode } from "react";
// Locals
import styles from "./Wrapper.module.css";

type PageWrapper = {
    children: ReactNode;
};

const PageWrapper: React.FC<PageWrapper> = ({ children }) => {
    return <div className={styles.pageWrapper}>{children}</div>;
};

export default PageWrapper;
