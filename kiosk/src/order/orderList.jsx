import React, { useEffect, useReducer, useState } from "react";
import "./orderList.css";
import { useContext } from "react";
import { MenuDispatchContext } from "../App";
import { SelectedContext } from "../menu/burgerList";

const OrderList = ({selectList, onHandleDelete, onAdd, onSubstract}) => {
    console.log(selectList);
    const [menuCount, setCount] = useState();
    if(selectList.length > 0) {
        console.log(selectList.map((item) => item));
        setCount([...selectList.count]);
    }

    // const [menuCount, setCount] = useState([...selectList.count]);
   useEffect(() => {

        console.log(selectList);        
   }, []);

   const handleAdd = () => {
    // onAdd(id, )
   }

   // 메뉴 count
//    const [menuCount, setCount] = useState([...selectList]);
//    const [menuPrice, setPrice] = useState([...selectList]);

   // 수량 증가
   /* const add = (idx, count) => {
        console.log(selectList[idx]);
        console.log(selectList[idx].count);
        
        for(let i=0;i<=selectList.length;i++) {
            if(i === idx) {
                selectList[idx].count = count+1;
                setCount(menuCount + 1);
                setPrice(menuPrice * menuCount);
            } 
        }
   } */

   // 수량 감소
   /* const subtract = (idx, count) => {
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
    }; */

    /* const handleDelete = (item, id) => {
        console.log(item);
        if (window.confirm(`${item.burgername} 메뉴를 삭제하시겠습니까?`)) {            
            onHandleDelete(id);
        }
    }   */  

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
                            
                            // console.log(burger.count);                           

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
                                            <button onClick={() => onSubstract(burger)}>
                                            {/* <button onClick={() => subtract(index, menuCount)}> */}
                                                <span className="material-symbols-outlined control-btn">
                                                    remove
                                                </span>
                                            </button>
                                        </p>
                                        <p>
                                            {`${menuCount}개`}
                                        </p>
                                        <p>
                                            <button onClick={() => onAdd(burger)}> 
                                            {/* <button onClick={() => add(index, menuCount)}>  */}
                                                <span className="material-symbols-outlined control-btn">add</span> 
                                            </button>
                                        </p>
                                        <p>
                                            {" = "}{menuPrice * burger.count}{'원'}
                                        </p>
                                        <p>
                                            <button onClick={() => {onHandleDelete(burger)}}>삭제</button>
                                        </p>
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

export default React.memo(OrderList);