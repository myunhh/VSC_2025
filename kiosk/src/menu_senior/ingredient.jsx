import React, { useCallback, useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./ingredient.css";
import Title from "../common/top/title";
import Button from "../common/ui/button";
import voice3 from '../voices/03_voice.mp3';

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

const Ingredient = () => {
    // page_senior페이지에서 장소 선택한 값을 전달 받음.
    const location = useLocation();
    const place = location.state.eatPlace;
    const isSenior = location.state.seniorUser;

    const [ingredient, setIgredient] = useState('');
    const ingreRef = useRef('');

    useEffect(() => {
        console.log("place=> " + place);
        console.log("isSenior=> " + isSenior);
        speechIngredient();
    }, []);

    const navigate = useNavigate();

    const haldleOnGoBack = () => {
        navigate(-1); 
    }

    // 음성재생
    const speechIngredient = () => {
        const audio = document.querySelector('#ingreAudio');
        const context = new AudioContext();
        if(context !== undefined) {
            context.resume().then(() => {
                // audio.muted = false;
                audio.play();
                // setPlay(true);
                // placeAudioRef.current = voice2Play;
                console.log('ingreAudio resumed successfully');
            }).catch(error => {
                console.log(error);
            });
        }
    }

    // const clickedBtn = useCallback((val) => {
    //     setIgredient(val);
    // }, [ingredient])

    const moveToSingleOrSet = (val) => {
        // 시니어용 메인으로 이동
        // 선택한 메뉴 값을 페이지 이동 시 넘겨야 함.
        console.log(val);
        // clickedBtn(val);
        setIgredient(val);
        ingreRef.current = val;
        // console.log(ingreRef.current); 
        console.log('ingredient => ' + ingreRef.current);
        navigate('/single_or_set', {state:{seniorUser:isSenior, ingre:ingreRef.current}}); // 먼저 시니어용 메인을 만든 후 이동 경로 결정
    }
    
    /* const moveToMainSenior = () => {
        // 시니어용 메인으로 이동
        // 선택한 메뉴 값을 페이지 이동 시 넘겨야 함.
        if(ingredient !== null || ingredient !== '') {
            console.log('ingredient => ' + ingredient);
             navigate('/main_senior', {state:ingredient}); // 먼저 시니어용 메인을 만든 후 이동 경로 결정
        } else {
            return;
        }
    } */

    return (
        <div style={styles.wrapper}>

            <Title title="음식 재료 선택"></Title>

            <audio src={voice3} id="ingreAudio"></audio>
            
            <div className="ingredient-wrap">
                <div className = "fill">
                    <button className="ingre-btn" onClick={() => moveToSingleOrSet('소고기')}>소고기</button>
                    <button className= "ingre-btn" onClick={() => moveToSingleOrSet('돼지고기')}>돼지고기</button>
                </div>
                <div className = "fill">
                    <button className= "ingre-btn" onClick={() => moveToSingleOrSet('닭고기')}>닭고기</button>
                    <button className= "ingre-btn" onClick={() => moveToSingleOrSet('새우')}>새우</button>
                </div>
            </div>

            <section style={styles.footer}>
                <Button color={"Gray"} text={"취소"} event={haldleOnGoBack}></Button>
            </section>
        </div>
    )
}

export default React.memo(Ingredient);