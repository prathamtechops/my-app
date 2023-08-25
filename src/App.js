import facebook from "./facebook (4) 1.svg";
import twitter from "./twitter (1) 1.svg";
import linkedin from "./linkedin (1) 1.svg";
import vector from "./Vector.svg";
import fluent from "./fluent_pair-24-filled.svg";
import ic from "./ic_baseline-token.svg";
import Pair from "./Components/Pair";
import Token from "./Components/Token";
import { useState } from "react";
import { Footer } from "./Components/Footer";
import { Sidebar } from "./Components/Sidebar";

function App() {
    const [active, setActive] = useState("token");

    return (
        <div className="App">
            <main>
                <Sidebar
                    vector={vector}
                    active={active}
                    setActive={setActive}
                    fluent={fluent}
                    ic={ic}
                    facebook={facebook}
                    twitter={twitter}
                    linkedin={linkedin}
                />
                {active === "token" ? <Token /> : <Pair />}
            </main>
            <Footer />
        </div>
    );
}

export default App;
