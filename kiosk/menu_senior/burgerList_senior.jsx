import React, { useState, useContext, useEffect, useCallback, useMemo, createContext, useRef } from "react";
import "./menu_senior.css";
import { MenuStateContext, MenuDispatchContext } from "../App";
import { useNavigate, Link } from "react-router-dom";
import BurgerSenior from "./burger_senior";
import Button from "../common/ui/button";
import OrderMenu from "../order/orderItem";
import voice5 from "../voices/05_voice.mp3";

export const Selection = createContext(); // 선택 데이터

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

const MenuListSenior = (choices) => {
    const menus = useContext(MenuStateContext);
    const { onSelect, onCateSet } = useContext(MenuDispatchContext); // select date event, 단품/세트 초기 데이터 변경 이벤트 
    const [ingreState, setIngreState] = useState(choices.choice); // => 재료 state
    const [kindState, setKindState] = useState(choices.kind); // => 단품/세트 종류 state

    const isSenior = choices.seniorUser; // senior

    // 선택된 메뉴 state 공유
    const [selectedData, setData] = useState([]);
    // 메뉴 갯수, 가격, 단가, 단품합계(갯수에 따른 합계) state
    const [menuCount, setCount] = useState([...selectedData]);
    const [menuPrice, setPrice] = useState([...selectedData]);
    const [singleSum, setSingleSum] = useState([...selectedData]);
    const countRef = useRef(menuCount); // 메뉴 클릭 시 onAdd/onSubstract 함수에서 수량증가/감소 상태 저장
    const singleSumRef = useRef(singleSum);
    // 합계
    const sumSelectedMenu = selectedData
            .map((item) => item.price * item.count)
            .reduce((prev, curr) => prev + curr, 0);    

    const [selecItem, setSelectItemState] = useState(); 
    const voiceRef = useRef(selecItem);
    const [play, setPlay] = useState(false);
    const [playedItem, setPlayedItem] = useState(new Audio(voiceRef));
    const [selectedSum, setSum] = useState(sumSelectedMenu);

    useEffect(() => {        
        // console.log(ingredient.choice); //Object.values(ingredient) 
        // console.log(choices.choice, choices.kind); //choices.choice => 재료, choice.kind => 단품/세트 여부
        speechBurgerList(); // 음성 재생 실행

        let type = "BURGER";
        onCateSet(type);

        if(kindState === '세트' ) {
            let type = "SET";
            onCateSet(type);
            setKindState('세트')
        } else if(kindState === '단품') {
            const type = "BERGER";
            onCateSet(type);
            setKindState('단품');
        }        
        // console.log(menus);
        console.log("isSenior => " + choices.seniorUser);
    }, []);

    const navigate = useNavigate();
    const haldleOnGoBack = () => {
        navigate(-1);
    };

    // 음성재생
    const speechBurgerList = () => {
        const pageAudio = document.querySelector('#burgerListAudio');
        const context = new AudioContext();
        if(context !== undefined) {
            context.resume().then(() => {
                pageAudio.play();
                console.log('burgerListAudio resumed successfully');
            }).catch(error => {
                console.log(error);
            });
        }
    }

    // 음성 재생
    const eachVoicePlay = (menu) => {
        // 페이지 진입 시 재생되는 음성 중지
        const pageAudio = document.querySelector('#burgerListAudio');
        pageAudio.pause();
        // playedItem.pause();  // 먼저 선택된 아이템의 안내음성 중지

        if(menu.audio) {
            let voiceId = `#voice${menu.id}`;
            const audio = document.querySelector(voiceId);

            console.log("play audio => " + audio);

            const context = new AudioContext();
            if(context !== undefined) {
                context.resume().then(() => {
                    audio.play();
                    setPlay(true);
                    setPlayedItem(audio);
                    voiceRef.current = audio;
                    console.log(voiceId + ' resumed successfully');
                }).catch(error => {
                    console.log(error);
                });
            }
            console.log(voiceRef.current);
            console.log(playedItem);
            console.log(play);
        } else {
            return;
        }
    }

    // 선택메뉴들 세팅 --> orderList 컴포넌트에 전달될 데이터
    const onHandleToggle = (item) => {
        // console.log(item);
        if (selectedData.find((x) => x.id === item.id)) {
            console.log("중복");
            onAdd(item);
        } else {
            setData([...selectedData, item]); // 아이템 추가
            onSelect(item); // 전역 함수
            setSelectItemState(item);
            eachVoicePlay(item);
        }
        console.log(`${item.burgername} 선택되었습니다.`)
    };

    // 삭제
    const onHandleDelete =(item) => {
            // console.log(item.id);
            setData(selectedData.filter((it) => it.id !== item.id));
            selectedData.splice(item.id, 1);
            console.log(selectedData);

            if(selectedData.length == 0) {
                console.log("선택메뉴 길이 == 0");
                setData([]);
            }
        }
    

    // 수량 증가
    const onAdd = useCallback((item) => {
        item.count += 1;
        countRef.current = item.count;
        console.log(countRef.current);
        // setCount(item.count + 1);
        setCount((menuCount) => menuCount + 1);

        singleSumRef.current = item.price * item.count;
        // let singleSum = item.price * item.count;
        // console.log(singleSumRef.current);
        setSingleSum(singleSumRef.current * item.count);       
        // console.log(item);
    }, []);

    // 수량 감소
    const onSubstract = (item) => {
        // console.log(item);
        if (item.count <= 0) {
            return;
        } else {
            item.count -= 1;
            countRef.current = item.count;
            setCount((menuCount) => menuCount - 1);
            setSingleSum(singleSumRef.current * item.count);
        }
    };

    const moveToPay = () => {
        if(sumSelectedMenu === 0 || selectedData.length === 0 || selectedData === null) {
            alert('선택하신 메뉴가 없거나 주문 금액이 없습니다. 메뉴를 선택해주세요.');
            return;
        } else {
            console.log("sumSelectedMenu 결제할 금액 =>"+ sumSelectedMenu);
            navigate('/pay', {state:{totalSum:sumSelectedMenu, seniorUser:isSenior}});
        }
    }

    return (
        <section className="contents">
            <h3>Menu lists</h3>
            <h4 className="mb10">주문할 메뉴를 선택해주세요.</h4>

            <audio src={voice5} id="burgerListAudio"></audio>

            <Selection.Provider value={selectedData}>
                <div className="menuList">
                    {menus.filter((item) => item.ingredient === ingreState).length > 0 ? menus
                        .filter((item) => item.ingredient === ingreState) // 재료가 일치하는 메뉴만 filter
                        .map((burger) => (
                        
                            <div className="burgerBox" key={burger.id}>
                                <BurgerSenior 
                                    key={burger.id} 
                                    initData={burger} 
                                    onHandleToggle={onHandleToggle} 
                                    onAdd={onAdd} 
                                    onSubstract={onSubstract} 
                                    onHandleDelete={onHandleDelete}
                                />    
                                <audio src={burger.audio} id={`voice${burger.id}`}></audio>                                                                                     
                            </div>                        
                        ))
                    : `${ingreState} 재료의 버거메뉴가 없습니다.`}
                </div>

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

                        <p className="total-price">선택 메뉴 총 합계: <span>{sumSelectedMenu}</span>원 </p>
                    </div>
                </section>
            </Selection.Provider>

            <section style={styles.footer}>
                <Button color={"Green"} text={"이전 화면"} event={haldleOnGoBack} />
                <Button color={"Orange"} text={"결제 하기"} event={moveToPay} />

                {/* <Link to="../pay" state={sumSelectedMenu}>
                    <Button color={"Orange"} text={"결제 하기"} />
                </Link> */}
            </section>
           
        </section> 
    );
}

export default React.memo(MenuListSenior);