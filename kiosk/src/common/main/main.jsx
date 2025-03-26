import React, {
  useCallback,
  useState,
  createContext,
  useContext,
  useMemo,
  useRef,
  useReducer,
  useEffect,
} from "react";
import Title from "../top/title";
import Button from "../ui/button";
import MenuList from "../../menu/burgerList";
// import OrderList from "../../order/orderList";
import Header from "../header/header";
import { useNavigate, Link } from "react-router-dom";
import { MenuStateContext } from "../../App";

// export const SelectedMenuContext = createContext();
// export const SelectedDispatchContext = createContext();

const styles = {
  wrapper: {
    margin: "0px auto",
    height: "100vh",
  },
  footer: {
    position: "fixed",
    width: "100%",
    bottom: "0px",
    backgroundColor: "#444",
    padding: "1rem 0",
  },
};

function Main(props) {

  const data = useContext(MenuStateContext);  

  useEffect(() => {
    console.log(data); // 전역 MenuStateContext 데이터 확인    
  }, [data]);

  // 선택된 메뉴 state 공유
  // const [selectedData, setData] = useState([]);
  // 선택된 메뉴 update
  /* const onSelect = (item) => {
    // const selectedItem = {
    //     id,
    //     burgerimgpath,
    //     burgername,
    //     price
    // }
    setData([...selectedData, item]);
    console.log(item);
  }; */

  return (
    <div style={styles.wrapper}>
      {/* <Header></Header> */}
      <Title title="메뉴 선택"></Title>
      <MenuList menus={data}></MenuList>
    </div>
  );
}

export default React.memo(Main);
