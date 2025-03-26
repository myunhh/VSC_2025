import React, { useEffect, useState, useRef } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import Title from "../common/top/title";
import "./place.css";
import Button from "../common/ui/button";
import voice2 from '../voices/02_voice.mp3';

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

const places = ['매장', '포장'];

const PlaceSenior = (props) => {
    // home.jsx 페이지에서 isSenior의 값을 전달 받음.
    const location = useLocation();
    const isSenior = location.state;
    // const [voice2Play, setPlay] = useState(false);
    // const placeAudioRef = useRef(voice2Play);    

    const [place, setPlace] = useState('');
    const placeRef = useRef('');

    const navigate = useNavigate();

    const haldleOnGoBack = () => {
        navigate(-1); 
    }

    const moveToIngredient = (val) => {
        setPlace(val);        
        placeRef.current = val;
        console.log("place => " + placeRef.current);
        navigate('/ingredient', {state:{eatPlace:placeRef.current, seniorUser:isSenior}});      
    }

    useEffect(() => {
        console.log("isSenior => " + isSenior);
        speechPlace();
    }, []);

    // 음성재생
    const speechPlace = () => {
        const audio = document.querySelector('#placeAudio');
        const context = new AudioContext();
        if(context !== undefined) {
            context.resume().then(() => {                
                audio.play();
                console.log('placeAudio resumed successfully');
            }).catch(error => {
                console.log(error);
            });
        }
    }

    const clickedBtn = (val) => {
        // console.log(val);
        setPlace(val);
        // console.log(place);
        /* if (place == val){
            // setPlace();
            console.log(place);
        }
        else{
            setPlace(val);
            console.log(place);
        } */        
    }

    return (
        <div style={styles.wrapper}>
            <Title title="선택사항"></Title>

            <audio src={voice2} id="placeAudio"></audio>

            <ul className="place-wrap li-senior">
                <li className="full">
                    <p className="full">
                        <button className="place-btn-senior holl-senior" onClick={() => moveToIngredient('매장')}>매장</button>
                    </p>
                </li>
                <li className="full">
                    <p className="full">
                    <button className="place-btn-senior take-senior" onClick={() => moveToIngredient('포장')}>포장</button>
                    </p>
                </li>
            </ul>            

            {/* <div className="textUnderBtn">
                <h4 ></h4>
                <h4 className="textUnderBtn p2">포장</h4>
            </div> */}

            <section style={styles.footer}>
                <Button color={"Gray"} text={"취소"} event={haldleOnGoBack}></Button>
            </section>
        </div>
    ); 
}

export default React.memo(PlaceSenior);