export const NavigationBar = () => {
    return (
        <nav className="navbar">
            <div className="search-bar">
                <input type="text" placeholder="Enter pair/token address" />
                <button className="search-button">Search</button>
            </div>

            <button className="connect-button">Connect Wallet</button>
        </nav>
    );
};
