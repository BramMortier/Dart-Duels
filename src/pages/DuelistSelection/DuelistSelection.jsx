import { useState, useEffect, Children } from "react";
import { useGameContext } from "@hooks/useGameContext";
import { Button } from "@components";
import "./duelistSelection.scss";
import axios from "axios";

const DuelistSelection = () => {
    const { playerOne, setPlayerOne, playerTwo, setPlayerTwo } = useGameContext();

    const [duelists, setDuelists] = useState([]);
    const [currentlySelectedDuelist, setCurrentlySelectedDuelist] = useState({});

    const handleSelectDuelist = () => {
        console.log("duelist selected!");
        console.log(currentlySelectedDuelist);
        setPlayerOne(currentlySelectedDuelist);
    };

    useEffect(() => {
        const fetchDuelists = async () => {
            const response = await axios.get("/data/duelists.json");
            setDuelists(response.data);
        };
        fetchDuelists();
    }, []);

    return (
        <main className="duelist-selection">
            <div className="duelist-selection__container">
                <div className="duelist-selection__col">
                    <div className="duelist-selection__player">
                        <h2>Player 1</h2>
                        <p>Choose your warrior!</p>
                    </div>
                    <ul className="duelist-selection__duelist-list">
                        {duelists &&
                            duelists.map((duelist, index) => (
                                <li
                                    key={index}
                                    className={`duelist-selection__duelist ${
                                        currentlySelectedDuelist === duelist ? "duelist-selection__duelist--selected" : "duelist-selection__duelist"
                                    }`}
                                    onClick={() => setCurrentlySelectedDuelist(duelist)}
                                >
                                    <div className="duelist-selection__duelist-stats">
                                        <img src={duelist.icon} alt={`${duelist.name} icon`} />
                                        <div>
                                            <div className="duelist-selection__duelist-health-stat">
                                                <img src="/assets/heart.png" alt="heart icon" />
                                                <p>{duelist.stats.healthpoints}</p>
                                            </div>
                                            <div className="duelist-selection__duelist-shield-stat">
                                                <img src="/assets/shield.png" alt="shield icon" />
                                                <p>{duelist.stats.shieldpoints}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="duelist-selection__duelist-info">
                                        <h3>{duelist.name}</h3>
                                        <p>{duelist.description}</p>
                                    </div>
                                </li>
                            ))}
                    </ul>
                </div>
                <div className="duelist-selection__col">
                    <div className="duelist-selection__selected-duelist">
                        {currentlySelectedDuelist && (
                            <img className="duelist-selection__selected-duelist-image" src={currentlySelectedDuelist.image} alt="selected duelist" />
                        )}
                        <img className="duelist-selection__tower" src="/assets/stone-tower.png" alt="stone tower" />
                        <Button onClick={handleSelectDuelist} variant="primary">
                            Select
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default DuelistSelection;
