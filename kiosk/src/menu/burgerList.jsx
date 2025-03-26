import React, { createContext, useEffect, useCallback } from "react";
import Burger from "./burger";
import "./menu.css";
import { useState, useContext, useRef, useMemo } from "react";
import { useNavigate, Link } from "react-router-dom";
// import OrderList from "../order/orderList";
import { MenuStateContext, MenuDispatchContext } from "../App";
import OrderMenu from "../order/orderItem";
import Button from "../common/ui/button";

export const Category = createContext();

const categorys = [
  {
    id: 0,
    title: "Burger",
    type: "BURGER",
  },
  {
    id: 1,
    title: "Set",
    type: "SET",
  },
  {
    id: 2,
    title: "음료",
    type: "BEVERAGE",
  },
];

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

const MenuList = () => {
  const { onSelect, onCateSet } = useContext(MenuDispatchContext);
  const menus = useContext(MenuStateContext);

  // 선택된 메뉴 state 공유
  const [selectedData, setData] = useState([]);

  // 메뉴 갯수, 가격, 단가, 단품합계(갯수에 따른 합계) state
  const [menuCount, setCount] = useState([...selectedData]);
  const [menuPrice, setPrice] = useState([...selectedData]);
  const [singleSum, setSingleSum] = useState([...selectedData]);
  const countRef = useRef(menuCount);
  const priceRef = useRef(menuPrice);
  const singleSumRef = useRef(singleSum);

  // 합계
  const sumSelectedMenu = selectedData
    .map((item) => item.price * item.count)
    .reduce((prev, curr) => prev + curr, 0);

  const [selectedSum, setSum] = useState(sumSelectedMenu);
  const sumRef = useRef(selectedSum);

  // 탭 state
  const [tabIndex, setIndex] = useState(0);

  const navigate = useNavigate();
  const haldleOnGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const type = "BERGER";
    onCateSet(type);
    // console.log(menus);
    // console.log(selectedData);
    // console.log('countRef.current=> '+countRef.current);
    // return countRef.current;
  }, []);

  // 카테고리 선택
  const onHandleCategory = (item, index) => {
    const cateType = item.type;
    setIndex(index);
    onCateSet(cateType);
    console.log(`${cateType} 카테고리가 선택됨`);
  };

  // 선택메뉴들 세팅 --> orderList 컴포넌트에 전달될 데이터
  const onHandleToggle = (item) => {
    // console.log(item);
    console.log(selectedData, "aaaaaaaaaa");
    if (selectedData.find((x) => x.id === item.id)) {
      console.log("중복");
      onAdd(item);
    } else {
      setData([...selectedData, item]); // 아이템 추가
      onSelect(item); // 전역 함수
    }
    //alert(`${item.burgername} 선택되었습니다.`)
  };

  // 삭제
  const onHandleDelete = (item) => {
    console.log(item.id);
    if (window.confirm(`${item.burgername} 메뉴를 삭제하시겠습니까?`)) {
      setData(selectedData.filter((it) => it.id !== item.id));
    }
  };

  // 수량 증가
  const onAdd = useCallback((item) => {
    item.count += 1;
    countRef.current = item.count;
    // priceRef.current = ;
    console.log(countRef.current);
    setCount(item.count + 1);

    singleSumRef.current = item.price * item.count;
    // let singleSum = item.price * item.count;
    console.log(singleSumRef.current);
    setSingleSum(singleSumRef.current * item.count);
    // console.log(sumRef.current);
    // setSum();
    const newItem = {
      id: item.id,
      burgername: item.burgername,
      burgerimgpath: item.burgerimgpath,
      count: item.count,
      price: item.price,
      singlesum: singleSumRef.current,
    };
    // setData(selectedData.map((it) => ({...it, singlesum: singleSumRef.current})));
    console.log(item);
  }, []);

  // 수량 감소
  const onSubstract = (item) => {
    // console.log(item);
    if (item.count <= 0) {
      return;
    } else {
      item.count -= 1;
      setCount((menuCount) => menuCount - 1);
    }
  };

  const moveToPay = () => {
    if (
      sumSelectedMenu === 0 ||
      selectedData.length === 0 ||
      selectedData === null
    ) {
      alert(
        "선택하신 메뉴가 없거나 주문 금액이 없습니다. 메뉴를 선택해주세요."
      );
      return;
    } else {
      console.log("sumSelectedMenu 결제할 금액 =>" + sumSelectedMenu);
      navigate("/pay", {
        state: { totalSum: sumSelectedMenu, seniorUser: false },
      });
    }
  };

  return (
    <section className="contents">
      <h3>Menu lists</h3>
      <h4>아래 음식 종류에서 주문할 메뉴를 선택해주세요.</h4>
      <Category.Provider value={categorys}>
        <div>
          <ul className="menu-category">
            {categorys.map((item, index) => (
              <li
                key={item.id}
                className={tabIndex === index ? "active" : null}
                onClick={() => onHandleCategory(item, index)}
              >
                {item.title}
              </li>
              // <li key={item.id} className={tabIndex === item.id ? "active" : null}
              // onClick={() => setIndex(item.id)}>
              //     {item.title}
              // </li>
            ))}
          </ul>
          {categorys
            .filter((item) => tabIndex === item.id)
            .map((item) => (
              <div key={item.id} className="menu-wrap">
                {/* menu list start */}
                <div className="burgerList">
                  {menus.map((burger) => {
                    return (
                      <Burger
                        key={burger.id}
                        initData={burger}
                        onHandleToggle={onHandleToggle}
                      />
                    );
                  })}
                </div>
                {/* menu list end */}
              </div>
            ))}
        </div>

        {/* <div className="burgerList">
                    {
                        menus.map((burger) => {
                            return (
                                <Burger key={burger.id} initData={burger} onHandleToggle={onHandleToggle} />
                            );
                        })
                        
                    }
                </div> */}
      </Category.Provider>

      <section className="orderWrap">
        <h3>선택한 메뉴</h3>
        <h4>주문하신 내역을 확인해주세요.</h4>
        <div className="orderedList">
          <ul>
            {selectedData &&
              selectedData?.map((order) => {
                return (
                  <OrderMenu
                    key={order.id}
                    selectMenu={order}
                    onHandleDelete={onHandleDelete}
                    onAdd={onAdd}
                    onSubstract={onSubstract}
                  />
                );
              })}
          </ul>

          <p className="total-price">선택 메뉴 총 합계: {sumSelectedMenu} </p>
          {/* <p>{selectedData.map(item => item.price).reduce((prev, curr) => prev + curr, 0)}</p> */}
        </div>
      </section>

      <section style={styles.footer}>
        <Button color={"Green"} text={"이전 화면"} event={haldleOnGoBack} />

        <Button color={"Orange"} text={"결제 하기"} event={moveToPay} />
        {/*<Link to="../pay" state={sumSelectedMenu}>
          <Button color={"Orange"} text={"결제 하기"} />
        </Link>*/}
      </section>
    </section>
  );
};

export default React.memo(MenuList);
