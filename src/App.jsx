import { Routes, Route } from "react-router-dom";
import { Duel, DuelistSelection, Titlescreen } from "@pages";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Titlescreen />} />
            <Route path="/duel" element={<Duel />} />
            <Route path="/duelist-selection" element={<DuelistSelection />} />
        </Routes>
    );
}

export default App;
