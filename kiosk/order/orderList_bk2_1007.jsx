import React, { useEffect, useReducer, useState } from "react";
import "./orderList.css";
import { useContext } from "react";
import { MenuActionContext, MenuValueContext, SelectedContext } from "../common/main/main";
// import MainContext from "../common/main/mainContext";

const OrderList = ({selectList}) => {

   useEffect(() => {
        console.log(selectList);
        
   }, [selectList]);

   // 메뉴 count
   const [menuCount, setCount] = useState([...selectList]);

   // 수량 증가
   const add = (idx, count) => {
        console.log(selectList[idx]);
        console.log(selectList[idx].count);
        
        for(let i=0;i<=selectList.length;i++) {
            if(i === idx) {
                selectList[idx].count = count+1;
                setCount(menuCount + 1);
            } 
        }
   }

   // 수량 감소
   const subtract = (idx, count) => {
        console.log(selectList[idx]);
        console.log(selectList[idx].count);
        for(let i=0;i<=selectList.length;i++) {
            if(i === idx) {
                console.log('same index')
                // 메뉴 갯수 <= 0 이면 종료
                if(selectList[idx].count <= 0) {
                    return;
                } else {
                    selectList[idx].count = count-1;
                    setCount(menuCount - 1);
                }
            } 
        }

        
        // // count--;
        // selectList[idx].count = count - 1;
        // console.log(selectList[idx].count);
        // return selectList[idx].count;
        // // setCount(count - 1);
    };

    return (
        <section className="orderWrap">
            <h3>선택한 메뉴</h3>
            <h4>주문하신 내역을 확인해주세요.</h4>
            <div className="orderedList">

                <ul>
                    {
                        selectList && selectList?.map((burger, index) => {
                            const menuPrice = burger.price;
                            const menuCount = burger.count;                          
                            
                            console.log(burger.count);                           

                            return <li key={`${burger.id}`}>
                                        <p>
                                            <img src={burger.burgerimgpath} alt={burger.burgername} />
                                        </p>                                         
                                        <p>
                                            {burger.burgername}
                                        </p>
                                        <p>
                                            {`${burger.price}원`}
                                        </p>
                                        <p>
                                            <button onClick={() => subtract(index, menuCount)}>
                                                <span className="material-symbols-outlined control-btn">
                                                    remove
                                                </span>
                                            </button>
                                        </p>
                                        <p>
                                            {`${menuCount}개`}
                                        </p>
                                        <p>
                                            <button onClick={() => add(index, menuCount)}> 
                                                <span className="material-symbols-outlined control-btn">add</span> 
                                            </button>
                                        </p>
                                        <p>
                                            {" = "}{menuPrice * burger.count}{'원'}
                                        </p>
                                        <p>
                                            <button>삭제</button>
                                        </p>                                         
                                        
                                        {/* <button onClick={() => dispatch({type: 'decrement'})}> - </button>
                                        {state + '개'}
                                        <button onClick={() => dispatch({type: 'increment'})}> + </button>                                        
                                        {" = "}{menuPrice * state}{'원'} */}
                                        
                                        {/* <button onClick={() => subtract(index, burger.count)}> - </button>
                                        {burger.count + '개'}
                                        <button onClick={() => add(index, burger.count)}> + </button>
                                        {" = "}{menuPrice * burger.count}{'원'} */}
                                        
                                    </li>
                        })
                    }
                </ul>
            </div>
        </section>
    )
};
// 오류 방지 기본값 설정
OrderList.defaultProps = {
    selectList: [],
}

export default OrderList;