import { useContext } from "react";
import { GameContext } from "@context/GameContextProvider";

export const useGameContext = () => {
    const context = useContext(GameContext);
    if (!context) console.log("GameContext must be used within a suitable provider");

    return context;
};
