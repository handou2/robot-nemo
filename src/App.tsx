import React, { PropsWithChildren, useEffect, useState } from "react";
import logo from "./assets/images/logo.svg";
import styles from "./App.module.css";
import Robot from "./components/Robot";
import ShoppingCart from "./components/ShoppingCart";
//初始化->构建函数 ->getDeriverdStateFromProps->render():渲染UI->componentDidMount
//getDeriverdStateFromProps->shouldComponentUpdate->render():渲染UI->更新->componentDidUpdate
//componentWillUnmount->销毁
//第二阶段 update
//在组件接收到一个新的prop(更新后)时被调用
// componentWillReceiveProps
// state getDeriverdStateFromProps(nextProps,preState){ }
// shouldComponentUpdate(nextProps,nextState){
//   return nextState.some !== this.state.some
// }
//组件更新后调用
// componentDidUpdate(){}
//第三阶段 销毁
//组件销毁后调用
//可以当作析构函数 destructor 来使用
// componentWillUnmount() {}
interface Props {}
interface State {
  robotGallery: any[];
  count: number;
}

const App: React.FC<Props> = (props) => {
  const [count, setCount] = useState<number>(0);
  const [robotGallery, setRobotGallery] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  //在组件创建好dom元素以后，挂载进页面的时候调用
  useEffect(() => {
    document.title = `点击${count}`;
  }, [count]);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const responses = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await responses.json();
        setRobotGallery(data);
      } catch (e: any) {
        setError(e.message);
      }
      setLoading(false);
    };
    fetchData();
    // .then((response) => response.json())
    // .then((data) => setRobotGallery(data));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo" />
          <h1>pig_nemo购物平台听说名字够长有傻子会看完</h1>
        </div>
        <button
          onClick={() => {
            //setState异步更新,同步执行
            setCount(count + 1);
            // this.setState(
            //   (preState, preProps) => {
            //     return { count: preState.count + 1 };
            //   },
            //   () => {
            //     console.log("count ", this.state.count);
            //   }
            // );
            // this.setState(
            //   (preState, preProps) => {
            //     return { count: preState.count + 1 };
            //   },
            //   () => {
            //     console.log("count ", count);
            //   }
            // );
          }}
        >
          click
        </button>
        <span>count: {count}</span>
        <ShoppingCart />

        {(!error || error !== "") && <div>网站出错：{error}</div>}
        {!loading ? (
          <div className={styles.robotList}>
            {robotGallery.map((s) => (
              <Robot id={s.id} email={s.email} name={s.name} />
            ))}
          </div>
        ) : (
          <h2>loading 加载中</h2>
        )}
      </div>
    </div>
  );
};

export default App;
