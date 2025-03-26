import React, { useState, useEffect, useContext } from "react";
import Title from "../top/title";
import { MenuStateContext } from "../../App";
import BurgerListSenior from "../../menu_senior/burgerList_senior";
import { useLocation } from "react-router-dom";

const styles = {
    wrapper: {
      margin: "0px auto",
      height: "100vh",
    }   
  };

function MainSenior(props) {
    // const data = useContext(MenuStateContext);

    const location = useLocation();
    const isSenior = location.state.seniorUser;
    const ingredient = location.state.ingre;
    const singleOrSet = location.state.burgerKind;

    useEffect(() => {
        // console.log(data); // 전역 MenuStateContext 데이터 확인
        console.log("isSenior => "+isSenior); // 시니어 모드 확인
    }, []);

    return (
        <div style={styles.wrapper}>
            <Title title="메뉴 선택"></Title>
            <p>선택하신 재료는 {ingredient}, {singleOrSet}메뉴입니다.</p>
            <BurgerListSenior choice={ingredient} kind={singleOrSet} seniorUser={isSenior}></BurgerListSenior>
        </div>
    )
}

export default React.memo(MainSenior);