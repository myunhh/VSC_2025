import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Title from "../common/top/title";
import Button from "../common/ui/button";
import "./singleOrSet.css";
import voice4 from '../voices/04_voice.mp3';

const styles = {
    wrapper: {
        margin: "0px auto",
        height: "100vh"
    },
    footer: {
        position: "fixed",
        width: "100%",
        bottom: "0px",
        backgroundColor: "#444",
        padding: "1rem 0"
    }
}

const SingleOrSet = () => {
    const location = useLocation();
    const ingredient = location.state.ingre;
    const isSenior = location.state.seniorUser;

    const [singleOrSet, setSingleOrSet] = useState('');
    const singleOrSetRef = useRef('');

    useEffect(() => {
        console.log("ingredient => " + ingredient);
        speechSingOrSet();
    }, []);

    const navigate = useNavigate();

    const haldleOnGoBack = () => {
        navigate(-1); 
    }

    // 음성재생
    const speechSingOrSet = () => {
        const audio = document.querySelector('#singleOrSetAudio');
        const context = new AudioContext();
        if(context !== undefined) {
            context.resume().then(() => {
                audio.play();
                console.log('singleOrSetAudio resumed successfully');
            }).catch(error => {
                console.log(error);
            });
        }
    }

    /*const clickedBtn = (val) => {
        setSingleOrSet(val);
        
        // console.log(val);
    }*/

    const moveToMainSenior = (val) => {
        setSingleOrSet(val);
        singleOrSetRef.current = val;
        // 시니어용 메인으로 이동
        // 선택한 메뉴 값을 페이지 이동 시 넘겨야 함.
        navigate('/main_senior', {state:{seniorUser:isSenior, ingre:ingredient, burgerKind:singleOrSetRef.current}}); // 먼저 시니어용 메인을 만든 후 이동 경로 결정
    }

    return (
        <div style={styles.wrapper}>
            <Title title="음식 재료 선택"></Title>

            <audio src={voice4} id="singleOrSetAudio"></audio>

            <div className="singleSet-wrap">
                <li className="setBtn-list">
                    <p className="fill">
                        <button onClick={() => moveToMainSenior('단품')} className="choice-btn">
                            단품 주문
                        </button>
                    </p>
                </li>
                <li className="setBtn-list">
                    <p className="fill">
                        <button onClick={() => moveToMainSenior('세트')}className="choice-btn">
                            세트 주문
                        </button>
                    </p>
                </li>
            </div>

            <section style={styles.footer}>
                <Button color={"Gray"} text={"취소"} event={haldleOnGoBack}></Button>
            </section>
        </div>
    )
}

export default React.memo(SingleOrSet);