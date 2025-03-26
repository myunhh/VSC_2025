import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Main from "./common/main/main";
import MainSenior from "./common/main/main_senior";
import Header from "./common/header/header";
import Home from "./Home";
import Pay from "./pay/pay";
import Place from "./place/place";
import PlaceSenior from "./place/place_senior";
import Ingredient from "./menu_senior/ingredient";
import SingleOrSet from "./menu_senior/singleOrSet";
import Progress from "./payment_in_progress/payment_in_progress";
import Complete from "./pay_complete/pay_complete";
import Face from "./Face";

// import { MenusProvider } from './common/main/mainContext';
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
} from "react";

const burgers = [
  {
    id: 0,
    burgername: "치즈와퍼",
    burgerimgpath: "images/burger1.png",
    price: 5000,
    count: 1,
    singlesum: 5000,
    ingredient: "소고기",
    selected: false,
    set: "10",
    audio: "menu_voices/00_menu_voice.mp3",
  },
  {
    id: 1,
    burgername: "불고기와퍼",
    burgerimgpath: "images/burger2.png",
    price: 4000,
    count: 1,
    singlesum: 4000,
    ingredient: "소고기",
    selected: false,
    set: "13",
    audio: "menu_voices/01_menu_voice.mp3",
  },
  {
    id: 2,
    burgername: "베이컨와퍼",
    burgerimgpath: "images/burger3.png",
    price: 5000,
    count: 1,
    singlesum: 5000,
    ingredient: "돼지고기",
    selected: false,
    set: "16",
    audio: "menu_voices/02_menu_voice.mp3",
  },
  {
    id: 3,
    burgername: "쉬림프와퍼",
    burgerimgpath: "images/burger4.png",
    price: 5000,
    count: 1,
    singlesum: 5000,
    ingredient: "새우",
    selected: false,
    set: "12",
    audio: "menu_voices/03_menu_voice.mp3",
  },
  {
    id: 4,
    burgername: "더블치즈와퍼",
    burgerimgpath: "images/burger1.png",
    price: 5000,
    count: 1,
    singlesum: 5000,
    ingredient: "소고기",
    selected: false,
    set: "11",
    audio: "menu_voices/04_menu_voice.mp3",
  },
  {
    id: 5,
    burgername: "통쉬림프와퍼",
    burgerimgpath: "images/burger4.png",
    price: 5000,
    count: 1,
    singlesum: 5000,
    ingredient: "새우",
    selected: false,
    set: "14",
    audio: "menu_voices/05_menu_voice.mp3",
  },
  {
    id: 6,
    burgername: "포테이토와퍼",
    burgerimgpath: "images/burger3.png",
    price: 5000,
    count: 1,
    singlesum: 5000,
    ingredient: "소고기",
    selected: false,
    set: "",
    audio: "menu_voices/06_menu_voice.mp3",
  },
  {
    id: 7,
    burgername: "머시룸베이컨와퍼",
    burgerimgpath: "images/burger1.png",
    price: 5000,
    count: 1,
    singlesum: 5000,
    ingredient: "돼지고기",
    selected: false,
    set: "15",
    audio: "menu_voices/07_menu_voice.mp3",
  },
  {
    id: 8,
    burgername: "트리플와퍼",
    burgerimgpath: "images/burger2.png",
    price: 5000,
    count: 1,
    singlesum: 5000,
    ingredient: "소고기",
    selected: false,
    set: "18",
    audio: "menu_voices/08_menu_voice.mp3",
  },
  {
    id: 9,
    burgername: "뉴욕치즈와퍼",
    burgerimgpath: "images/burger5.png",
    price: 5000,
    count: 1,
    singlesum: 5000,
    ingredient: "소고기",
    selected: false,
    set: "19",
    audio: "menu_voices/09_menu_voice.mp3",
  },
  {
    id: 26,
    burgername: "치킨버거",
    burgerimgpath: "images/burger6.png",
    price: 4000,
    count: 1,
    singlesum: 4000,
    ingredient: "닭고기",
    selected: false,
    set: "29",
    audio: "menu_voices/20_menu_voice.mp3",
  },
  {
    id: 27,
    burgername: "바비큐치킨버거",
    burgerimgpath: "images/burger7.png",
    price: 5000,
    count: 1,
    singlesum: 5000,
    ingredient: "닭고기",
    selected: false,
    set: "30",
    audio: "menu_voices/21_menu_voice.mp3",
  },
  {
    id: 28,
    burgername: "롱치킨버거",
    burgerimgpath: "images/burger8.png",
    price: 5000,
    count: 1,
    singlesum: 5000,
    ingredient: "닭고기",
    selected: false,
    set: "31",
    audio: "menu_voices/22_menu_voice.mp3",
  },
];

const sets = [
  {
    id: 10,
    burgername: "치즈와퍼set",
    burgerimgpath: "images/set1.png",
    price: 10000,
    count: 1,
    singlesum: 10000,
    selected: false,
    ingredient: "소고기",
    audio: "menu_voices/10_menu_voice.mp3",
  },
  {
    id: 11,
    burgername: "더블치즈와퍼set",
    burgerimgpath: "images/set2.png",
    price: 11000,
    count: 1,
    singlesum: 11000,
    selected: false,
    ingredient: "소고기",
    audio: "menu_voices/11_menu_voice.mp3",
  },
  {
    id: 12,
    burgername: "쉬림프와퍼set",
    burgerimgpath: "images/set3.png",
    price: 12000,
    count: 1,
    singlesum: 12000,
    selected: false,
    ingredient: "새우",
    audio: "menu_voices/12_menu_voice.mp3",
  },
  {
    id: 13,
    burgername: "불고기와퍼set",
    burgerimgpath: "images/set4.png",
    price: 10000,
    count: 1,
    singlesum: 10000,
    selected: false,
    ingredient: "소고기",
    audio: "menu_voices/13_menu_voice.mp3",
  },
  {
    id: 14,
    burgername: "통쉬림프와퍼set",
    burgerimgpath: "images/set5.png",
    price: 11000,
    count: 1,
    singlesum: 11000,
    selected: false,
    ingredient: "새우",
    audio: "menu_voices/14_menu_voice.mp3",
  },
  {
    id: 15,
    burgername: "머시룸베이컨와퍼set",
    burgerimgpath: "images/set2.png",
    price: 10000,
    count: 1,
    singlesum: 10000,
    ingredient: "돼지고기",
    selected: false,
    audio: "menu_voices/15_menu_voice.mp3",
  },
  {
    id: 16,
    burgername: "베이컨와퍼set",
    burgerimgpath: "images/set4.png",
    price: 10000,
    count: 1,
    singlesum: 10000,
    ingredient: "돼지고기",
    selected: false,
    audio: "menu_voices/16_menu_voice.mp3",
  },
  {
    id: 17,
    burgername: "포테이토와퍼set",
    burgerimgpath: "images/set2.png",
    price: 11000,
    count: 1,
    singlesum: 11000,
    selected: false,
    ingredient: "소고기",
    audio: "menu_voices/17_menu_voice.mp3",
  },
  {
    id: 18,
    burgername: "트리플와퍼set",
    burgerimgpath: "images/set1.png",
    price: 10000,
    count: 1,
    singlesum: 10000,
    ingredient: "소고기",
    selected: false,
    audio: "menu_voices/18_menu_voice.mp3",
  },
  {
    id: 19,
    burgername: "뉴욕치즈와퍼set",
    burgerimgpath: "images/set4.png",
    price: 10000,
    count: 1,
    singlesum: 10000,
    ingredient: "소고기",
    selected: false,
    audio: "menu_voices/19_menu_voice.mp3",
  },
  {
    id: 29,
    burgername: "치킨버거set",
    burgerimgpath: "images/set6.png",
    price: 10000,
    count: 1,
    singlesum: 10000,
    ingredient: "닭고기",
    selected: false,
    audio: "menu_voices/23_menu_voice.mp3",
  },
  {
    id: 30,
    burgername: "바비큐치킨버거set",
    burgerimgpath: "images/set7.png",
    price: 11000,
    count: 1,
    singlesum: 11000,
    ingredient: "닭고기",
    selected: false,
    audio: "menu_voices/24_menu_voice.mp3",
  },
  {
    id: 31,
    burgername: "롱치킨버거set",
    burgerimgpath: "images/set8.png",
    price: 11000,
    count: 1,
    singlesum: 11000,
    ingredient: "닭고기",
    selected: false,
    audio: "menu_voices/25_menu_voice.mp3",
  },
];

const beverages = [
  {
    id: 20,
    burgername: "콜라",
    burgerimgpath: "images/drink1.png",
    price: 2000,
    count: 1,
    singlesum: 2000,
    selected: false,
  },
  {
    id: 21,
    burgername: "스프라이트",
    burgerimgpath: "images/drink2.png",
    price: 2000,
    count: 1,
    singlesum: 2000,
    selected: false,
  },
  {
    id: 22,
    burgername: "오렌지쥬스",
    burgerimgpath: "images/drink3.png",
    price: 2000,
    count: 1,
    singlesum: 2000,
    selected: false,
  },
  {
    id: 23,
    burgername: "아메리카노",
    burgerimgpath: "images/drink4.png",
    price: 2000,
    count: 1,
    singlesum: 2000,
    selected: false,
  },
  {
    id: 24,
    burgername: "미네랄워터",
    burgerimgpath: "images/drink5.png",
    price: 2000,
    count: 1,
    singlesum: 2000,
    selected: false,
  },
  {
    id: 25,
    burgername: "제로슈거 에이드",
    burgerimgpath: "images/drink6.png",
    price: 2000,
    count: 1,
    singlesum: 2000,
    selected: false,
  },
];

export const MenuStateContext = createContext();
export const MenuDispatchContext = createContext();

function reducer(state, action) {
  // console.log('state=> '+state);
  // console.log('action=> '+action);

  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "SELECT": {
      return state.map((it) =>
        String(it.id) === String(action.data.id) ? { ...action.data } : it
      );
    }
    // case "DELETE": {
    //   return state.map((it) => String(it.id) !== String(action.data.id) );
    // }
    default:
      return state;
  }
}

function App() {
  const [data, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    dispatch({
      type: "INIT",
      data: burgers,
    });
  }, []);

  const onCateSet = useCallback(
    (cateType, index) => {
      if (cateType === "SET") {
        dispatch({
          type: "INIT",
          data: sets,
        });
      } else if (cateType === "BEVERAGE") {
        dispatch({
          type: "INIT",
          data: beverages,
        });
      } else if (cateType === "BURGER") {
        dispatch({
          type: "INIT",
          data: burgers,
        });
      }
    },
    [data]
  );

  const onSelect = useCallback((item) => {
    dispatch({
      type: "SELECT",
      data: item,
    });
  }, []);

  // const onDelete = useCallback((targetId) => {
  //   dispatch({type:"DELETE", targetId});
  // }, []);

  const memoizedDispatches = useMemo(() => {
    return { onSelect, onCateSet };
  }, []);

  return (
    // <MenusProvider>
    <MenuStateContext.Provider value={data}>
      <MenuDispatchContext.Provider value={memoizedDispatches}>
        <div className="App">
          <Routes>
            <Route index element={<Face />} />
            {/* OR <Route path="/" element={<Home />} />도 같음 */}
            <Route path="/main" element={<Main />} />
            <Route path="/main_senior" element={<MainSenior />} />
            <Route path="/pay" element={<Pay />} />
            <Route path="/" element={<Home />} />
            <Route path="/place" element={<Place />} />
            <Route path="/place_senior" element={<PlaceSenior />} />
            <Route path="/ingredient" element={<Ingredient />} />
            <Route path="/single_or_set" element={<SingleOrSet />} />
            <Route path="/payment_in_progress" element={<Progress />} />
            <Route path="/payment_complete" element={<Complete />} />
            <Route path="/face" element={<Face />} />
          </Routes>
        </div>
      </MenuDispatchContext.Provider>
    </MenuStateContext.Provider>
    // </MenusProvider>
  );
}

export default App;
