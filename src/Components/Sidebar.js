import { Social } from "./Social";

export function Sidebar({
    vector,
    active,
    setActive,
    fluent,
    ic,
    facebook,
    twitter,
    linkedin,
}) {
    return (
        <div className="sidebar">
            <div className="header">
                <div className="logo">
                    <img src={vector} alt="" />
                    <h3>My App</h3>
                </div>

                <div
                    className={
                        active === "token"
                            ? "token-address active"
                            : "token-address"
                    }
                    onClick={() => setActive("token")}
                >
                    <div className="token-container">
                        <img src={fluent} alt="fluent" />
                        <p>Token Address</p>
                    </div>
                </div>
                <div
                    className={
                        active === "pair"
                            ? "pair-address active"
                            : "pair-address"
                    }
                    onClick={() => setActive("pair")}
                >
                    <div className="token-container">
                        <img src={ic} alt="" />
                        <p>Pair Address</p>
                    </div>
                </div>
            </div>
            <Social facebook={facebook} twitter={twitter} linkedin={linkedin} />
        </div>
    );
}
