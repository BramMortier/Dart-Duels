import { createContext, useReducer } from "react";

export const GameContext = createContext();

const initialState = {
    playerOne: {},
    playerTwo: {},
};

const GameReducer = (state, action) => {
    switch (action.type) {
        case "SET_PLAYER_ONE":
            return { ...state, playerOne: action.data };
        case "SET_PLAYER_TWO":
            return { ...state, playerTwo: action.data };
        default:
            return state;
    }
};

export const GameProvider = ({ children }) => {
    const [state, dispatch] = useReducer(GameReducer, initialState);

    const setPlayerOne = (duelistData) => {
        return dispatch({ type: "SET_PLAYER_ONE", data: duelistData });
    };

    const setPlayerTwo = (duelistData) => {
        return dispatch({ type: "SET_PLAYER_TWO", data: duelistData });
    };

    return <GameContext.Provider value={{ ...state, dispatch, setPlayerOne, setPlayerTwo }}>{children}</GameContext.Provider>;
};
