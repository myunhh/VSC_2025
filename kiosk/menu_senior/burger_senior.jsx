import React, { useContext, useEffect, useState, useRef } from "react";
import Button from "../common/ui/button";
// import ingredient from "./ingredient";
import MenuModal from "./modal/menu_modal";
import "./modal/modal.css";
import { Selection } from "./burgerList_senior";

const BurgerSenior = ({initData, onHandleToggle, onAdd, onSubstract, onHandleDelete}) => {

    const selmenus = useContext(Selection); // burgerList_senior.jsx의 selectedData 배열을 전달 받아 37줄에서 중복 체크

    const [selecItem, setSelectItemState] = useState();  

    useEffect(() => {
        // console.log(selmenus);
        if(initData) {
            // console.log(initData)
            setSelectItemState({
                ...initData
            })
        }
    }, []);

    const burger = initData;

    const handleSelect = () => {
        // onHandleToggle(selecItem);        
        openModal(selecItem);
    }

    useEffect(() => {

    }, []);
    

    // modal 관련
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (burger) => {
        // console.log(burger.id);
        console.log(selecItem);        

        if(selmenus.find((it) => it.id === burger.id)) {
            alert("이미 주문한 메뉴이므로 수량을 추가합니다.");
            onAdd(selecItem);
        } else {            
            // setSelectItemState([...selmenus, burger]);            
            setIsModalOpen(true);
            onHandleToggle(selecItem);
        }        
    };
    const closeModal = () => setIsModalOpen(false);

    const handleAnswerNo = (item) => {
        onHandleDelete(item); // 삭제
        closeModal(); // 모달창 닫힘
    }

    return (
        <div data-id={burger.id} className="menuBox">
            
            <p className="burgerImg" onClick={() => handleSelect(burger)}><img src={burger.burgerimgpath} alt={burger.burgername}/></p>
            <p>{burger.burgername}</p>
            <p className="orColor">{`${burger.price}원`}</p>
            <p>
                <button onClick={() => openModal(burger)} className="base-btn">주문</button>
            </p>

            <MenuModal initData={selecItem?.burgername} isModalOpen={isModalOpen} closeModal={closeModal}>
                <div className="modalItem">
                    <div className="modal-title">{selecItem?.burgername}를 주문합니다.</div>
                    <div className="modalP"><img src={selecItem?.burgerimgpath} alt={selecItem?.burgername}/></div>
                    <div className="priz">가격: {`${selecItem?.price * selecItem?.count}원`}</div>
                    <div className="modalP">
                        <button onClick={() => handleAnswerNo(selecItem)} className="modal-base-btn bgRed mr10">
                            <span className="control-btn">아니오</span>
                        </button>
                        <button onClick={() => closeModal()} className="modal-base-btn bgBlue">
                            <span className="control-btn">예</span>
                        </button>
                    </div>
                    {/* 28일 이전 수량 변경 tag
                    <div className="modalP">
                        <button onClick={() => onSubstract(selecItem)} className="modal-base-btn mr10">
                            <span className="material-symbols-outlined control-btn">
                                remove
                            </span>
                        </button>

                        <span>
                            {selecItem?.count}개
                        </span>                         

                        <button onClick={() => onAdd(selecItem)} className="modal-base-btn">
                            <span className="material-symbols-outlined control-btn">add</span>
                        </button>
                    </div> */}                    
                </div>
            </MenuModal>

        </div>
    )
}

export default React.memo(BurgerSenior);