import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import { NavigationBar } from "./NavigationBar";

function Token() {
    const [tokenData, setTokenData] = useState([]);
    useEffect(() => {
        axios
            .get(
                "https://api.dexscreener.com/latest/dex/tokens/0x2170Ed0880ac9A755fd29B2688956BD959F933F8,0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"
            )
            .then((response) => {
                setTokenData(response.data.pairs);
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
                    {tokenData.slice(0, 12).map((token, index) => (
                        <Card key={index} prop={token} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Token;
