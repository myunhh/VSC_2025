import React, { useReducer, useState } from "react";
import "./orderList.css";
import { useContext } from "react";
import { MenuActionContext, MenuValueContext, SelectedContext } from "../common/main/main";
// import MainContext from "../common/main/mainContext";

const OrderList = ({selectList}) => {
    const burgers = useContext(MenuValueContext);
    const {toggle} = useContext(MenuActionContext);

    // const { menu, toggleMenu } = useContext(MainContext);
    // const [isActive, setIsActive] = useContext(MainContext);
    console.log(selectList);
    const initialState = {count:1};

    function countReducer(states, action) {
        console.log(states);
        let findIdx = selectList.findIndex((state) => state.id === action.id);
        const increasedProduct = states[findIdx];
        console.log(increasedProduct);
        // state[nums].count++;
        switch(action.type) {
            case 'increment':{
                
                increasedProduct.count += 1;
                return [...states.slice(0, findIdx), increasedProduct, ...states.slice(findIdx + 1)];
                // return {count: state.count + 1};
            }
            case 'decrement':
                return {count: state.count - 1};
            default:
                throw new Error();
        }      
    }
    const [state, dispatch] = useReducer(countReducer, initialState);

    // 메뉴 count
    const [orderItem, setCount] = useState(selectList);
    // 가격
    // const [menuPrice, setPrice] = useState();
    const handleClick = (id, index, count) => {
        selectList[index].count = count + 1;
        setCount(selectList[index].count);
        console.log(selectList[index]);

        // for (const item of selectList) {
        //     console.log(item, count);
        //     if(item.id === id) {
        //         item.count = count + 1;
        //         setCount(item.count);
        //     }            
        // }
        
        //const selItem = (item => {
        //     console.log(item);
        //     return {item, count: item.count +1};
        //     if(item.id === id) {
        //         console.log("working");
        //         return {item, count: item.count +1};
        //     } 
        // });
        
    }
    const add = (idx, count) => {
        // const findEl = selectList.findIndex(obj => obj.id === id);
        selectList[idx].count = count + 1;
        console.log(selectList[idx].count);
        return selectList[idx].count;
        /* selectList.filter((el, index) => {
            console.log(el.id === id);
            if(el.id === id) {
                selectList[index].count = count++;
            }
            // selectList.findIndex(obj => obj.id === id);
            // console.log(selectList.findIndex(obj => obj.id === id));
            // setCount(count + 1);
        }); */
        // setCount((item) => {
        //     console.log(item);

        //     // item.filter((el) => {
        //     //     el.id == id
        //     //     console.log(el);
        //     // });
        // });

        // setCount(count + 1);
        // count = count++;
        // return count;
    };
    const subtract = (idx, count) => {
        // 메뉴 갯수 <= 0 이면 종료
        if(count <= 0) {
            return;
        }
        // count--;
        selectList[idx].count = count - 1;
        console.log(selectList[idx].count);
        return selectList[idx].count;
        // setCount(count - 1);
    };
    // let [menuCount] = useState(1);

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
                                        <img src={burger.burgerimgpath} alt={burger.burgername} /> 
                                        {burger.burgername} 
                                        {burger.price}
                                        {/* <button onClick={() => dispatch({type: 'decrement'})}> - </button>
                                        {state + '개'}
                                        <button onClick={() => dispatch({type: 'increment'})}> + </button>                                        
                                        {" = "}{menuPrice * state}{'원'} */}
                                        <button onClick={() => subtract(index, burger.count)}> - </button>
                                        {orderItem + '개'}
                                        <button onClick={() => handleClick(burger.id, index, burger.count)}> + </button>
                                        {" = "}{menuPrice * orderItem}{'원'}
                                        {/* <button onClick={() => subtract(index, burger.count)}> - </button>
                                        {burger.count + '개'}
                                        <button onClick={() => add(index, burger.count)}> + </button>
                                        {" = "}{menuPrice * burger.count}{'원'} */}
                                        <button>삭제</button>
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