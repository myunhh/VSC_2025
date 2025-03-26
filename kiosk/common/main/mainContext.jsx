// import React from "react";
import React, { createContext, useContext, useState, useEffect, useReducer } from "react";

export const MenusContext = createContext();

export const MenusDispatchContext = createContext();

export function MenusProvider({children}) {
    const [menus, dispatch] = useReducer(menusReducer, initialMenus);
    
    return (
        <MenusContext.Provider value={menus}>
            <MenusDispatchContext value={dispatch}>
                {children}
            </MenusDispatchContext>
        </MenusContext.Provider>
    );
}

function menusReducer(menus, action) {
    switch(action.type) {
        case 'selected': {
            return menus.map(menu => {
                console.log(menu);
                if (menu.id) {
                    return menu;
                }
            })
        }
        default: {
            throw Error('Unknown Action: ' + action.type);
        }
    }
}


const initialMenus = [
    {
        id: 0,
        burgername: "치즈와퍼3",
        burgerimgpath: "images/burger1.png",
        price: 5000,
        count: 1,
        selected: false
    },
    {
        id: 1,
        burgername: "불고기와퍼2",
        burgerimgpath: "images/burger2.png",
        price: 4000,
        count: 1,
        selected: false
    },
    {
        id: 2,
        burgername: "베이컨와퍼2",
        burgerimgpath: "images/burger3.png",
        price: 5000,
        count: 1,
        selected: false
    },
    {
        id: 3,
        burgername: "쉬림프와퍼2",
        burgerimgpath: "images/burger4.png",
        price: 5000,
        count: 1,
        selected: false
    },
    {
        id: 4,
        burgername: "더블치즈와퍼2",
        burgerimgpath: "images/burger1.png",
        price: 5000,
        count: 1,
        selected: false
    },
    {
        id: 5,
        burgername: "치즈와퍼2",
        burgerimgpath: "images/burger4.png",
        price: 5000,
        count: 1,
        selected: false
    },
    {
        id: 6,
        burgername: "불고기와퍼2",
        burgerimgpath: "images/burger3.png",
        price: 5000,
        count: 1,
        selected: false
    },
    {
        id: 7,
        burgername: "베이컨와퍼2",
        burgerimgpath: "images/burger1.png",
        price: 5000,
        count: 1,
        selected: false
    },
    {
        id: 8,
        burgername: "쉬림프와퍼",
        burgerimgpath: "images/burger2.png",
        price: 5000,
        count: 1,
        selected: false
    },
    {
        id: 9,
        burgername: "더블치즈와퍼",
        burgerimgpath: "images/burger5.png",
        price: 5000,
        count: 1,
        selected: false
    },
]
export const useMenus = () => useContext(MenusContext);
export const useMenusDispatch = () => useContext(MenusDispatchContext);

/* export const MainContextProvider = ({children}) => {
    const [selectedMenu, setSelectedMenu] = useState(null);
    // const [burgers, setMenus] = useState([]);
    const [data, setMenus] = useReducer(burgers,[]);

    useEffect(() => {
        // data setting
        const fetchAPI = async () => {
            setMenus(burgers);
          };
        fetchAPI();        
    }, []);

    console.log(children)

    return (
        <MainContext.Provider value={{selectedMenu, setSelectedMenu, data}}>
            {children}
        </MainContext.Provider>
    )
}

export const useMainMenus = () => useContext(MainContext); */