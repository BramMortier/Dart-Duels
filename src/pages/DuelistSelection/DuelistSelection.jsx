import { useState, useEffect } from "react";
import "./duelistSelection.scss";
import axios from "axios";

const DuelistSelection = () => {
    const [duelists, setDuelists] = useState([]);
    const [currentlySelectedDuelist, setCurrentlySelectedDuelist] = useState({});

    useEffect(() => {
        const fetchDuelists = async () => {
            const response = await axios.get("/data/duelists.json");
            setDuelists(response.data);
        };
        fetchDuelists();
    }, []);

    console.log(duelists);

    return (
        <main className="duelist-selection">
            <div className="duelist-selection__container">
                <div className="duelist-selection__col">
                    <h2>Player 1</h2>
                    <p>Choose your warrior!</p>
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
            </div>
        </main>
    );
};

export default DuelistSelection;
