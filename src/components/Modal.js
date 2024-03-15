import { useState } from "react";
import MapList from "./MapList";
import styles from "./Modal.module.css";

const Modal = (props) => {
  const [touchPosition, setTouchPosition] = useState();

  const touchHandler = (e) => {
    setTouchPosition(e.changedTouches[0].pageY);
  };

  return (
    <>
        <div
          style={{
            background: "#ffffff",
            width: "100%",
            minHeight: "24px",
            height: "auto",
            overflow: "hidden",
            position: "fixed",
            bottom: "56px",
            borderRadius: "10px 10px 0 0",
            borderBottom: "1px solid #ededed",
            transition: "all 1s ease",
            ...(props.openModal ? {zIndex: '99'} : {zIndex: '1'}),
          }}
        >
          <div className={styles.tabBar}></div>
          <div
            style={{
              ...(props.openModal
                ? { marginTop: "1.5rem", maxHeight: "20rem" }
                : { marginTop: "0", maxHeight: "0" }),
              padding: "0.75rem",
              height: "auto",
              overflow: "hidden",
              overflowY: "scroll",
              transition: "all 0.5s ease",
            }}
          >
            {props.children}
          </div>
        </div>
    </>
  );
};

export default Modal;