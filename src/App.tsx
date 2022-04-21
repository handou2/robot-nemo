import React from "react";
import logo from "./assets/images/logo.svg";
import styles from "./App.module.css";
import robots from "./mockdata/robots.json";
import Robot from "./components/Robot";
function App() {
  return (
    <div className={styles.container}>
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo" />
          <h1>pig_nemo购物平台听说名字够长有傻子会看完</h1>
        </div>
        <div className={styles.robotList}>
          {robots.map((r) => (
            <Robot id={r.id} email={r.email} name={r.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
