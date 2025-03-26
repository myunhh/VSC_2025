import React, {useEffect, useState} from "react";

const Burger = ({initData, onHandleToggle}) => {
    // console.log(initData);   

    const [state, setState] = useState();    

    useEffect(() => {
        if(initData) {
            setState({
                ...initData,
            });
        }
    }, []);

    const burger = initData;

    const handleSelect = (item) => {
        console.log(item.target);
        onHandleToggle(state);
    }

    return (
        
        <li data-id={burger.id} onClick={handleSelect}>
            <img src={burger.burgerimgpath} alt={burger.burgername}/>
            <p>{burger.burgername}</p>
            <p>{`${burger.price}원`}</p>
        </li>
    );
}

export default React.memo(Burger);