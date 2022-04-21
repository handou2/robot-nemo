import React, { PropsWithChildren } from "react";
import logo from "./assets/images/logo.svg";
import styles from "./App.module.css";
import robots from "./mockdata/robots.json";
import Robot from "./components/Robot";
import ShoppingCart from "./components/ShoppingCart";

interface Props {}
interface State {
  robotGallery: any[];
}

class App extends React.Component<Props, State> {
  componentDidMount() {}
  render(): React.ReactNode {
    return (
      <div className={styles.container}>
        <div className={styles.app}>
          <div className={styles.appHeader}>
            <img src={logo} className={styles.appLogo} alt="logo" />
            <h1>pig_nemo购物平台听说名字够长有傻子会看完</h1>
          </div>
          <ShoppingCart />
          <div className={styles.robotList}>
            {robots.map((s) => (
              <Robot id={s.id} email={s.email} name={s.name} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
