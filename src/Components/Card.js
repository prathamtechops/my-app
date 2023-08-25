import React from "react";

const PairCard = ({ prop }) => {
    return (
        <div className="prop-container">
            <div className="prop-card">
                <h3>
                    {prop.baseToken.name}/{prop.quoteToken.name}
                </h3>
                <p>Price: {prop.priceUsd} USD</p>
                <p>Volume (24h): {prop.volume.h24}</p>
                <p>Liquidity: {prop.liquidity.usd} USD</p>
                {/* Add more details as needed */}
            </div>
        </div>
    );
};

export default PairCard;
