import React, {useEffect, useState, useContext, useCallback} from "react";
import "./order.css";
import { Selection } from "../menu_senior/burgerList_senior";

const OrgerMenu = ({selectMenu, onHandleDelete, onAdd, onSubstract}) => {

    const [menuCount, setCount] = useState();

    useEffect(() => {
        // console.log(selectMenu);
    }, []);

    const handleDelete = () => {
        // if( window.confirm(`${selectMenu.burgername} 메뉴를 삭제하시겠습니까?`)) {
            onHandleDelete(selectMenu);
            setCount(1);
            selectMenu.count = 1;
            console.log(menuCount);
            console.log(selectMenu);
        // }
    }

    return (
        <li key={`${selectMenu.id}`}>
            <div className="order-img">
                <p>
                    <img src={selectMenu.burgerimgpath} alt={selectMenu.burgername} />
                </p>
            </div>

            <div className="order-info">
                <div className="first">                                                         
                    <p className="menu-name">
                        {selectMenu.burgername}
                    </p>
                    <p>
                        {`${selectMenu.price}원`}
                    </p>
                </div>

                <div className="second">
                    <p>
                        <button onClick={() => onSubstract(selectMenu)}>
                            <span className="material-symbols-outlined control-btn">
                                remove
                            </span>
                        </button>
                    </p>
                    <p>
                        {`${selectMenu.count}개`}
                    </p>
                    <p>
                        <button onClick={() => onAdd(selectMenu)}> 
                            <span className="material-symbols-outlined control-btn">add</span> 
                        </button>
                    </p>
                    <p>
                        = 합계 <span className="single-total">{selectMenu.price * selectMenu.count}</span>{'원'}
                    </p>                    
                </div>
            </div>
            <div>
                <p>
                    <button onClick={handleDelete}>
                        <span className="material-symbols-outlined">
                            delete
                        </span>
                    </button>
                </p>
            </div>
        </li>
    )
}

export default React.memo(OrgerMenu);