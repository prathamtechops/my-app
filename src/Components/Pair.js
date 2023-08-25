import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card"; // Import the PairCard component
import { NavigationBar } from "./NavigationBar";

function Pair() {
    const [pairsData, setPairsData] = useState([]);

    useEffect(() => {
        axios
            .get(
                "https://api.dexscreener.com/latest/dex/pairs/bsc/0x7213a321F1855CF1779f42c0CD85d3D95291D34C,0x16b9a82891338f9ba80e2d6970fdda79d1eb0dae"
            )
            .then((response) => {
                setPairsData(response.data.pairs);
                console.log(response.data.pairs);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div className="content">
            <NavigationBar />
            <div className="content-body">
                <div className="main-content">
                    {pairsData.slice(0, 12).map((pair, index) => (
                        <Card key={index} prop={pair} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Pair;
