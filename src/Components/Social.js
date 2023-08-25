export function Social({ facebook, twitter, linkedin }) {
    return (
        <div className="social">
            <div className="social-icon">
                <img src={facebook} alt="facebook" />
            </div>
            <div className="social-icon">
                <img src={twitter} alt="twitter" />
            </div>
            <div className="social-icon">
                <img src={linkedin} alt="linkedln" />
            </div>
        </div>
    );
}
