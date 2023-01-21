import React from 'react';
import "./Banner.css";

const Banner = () => {

    function truecate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + ' ...' :
            string;
    };

    return (
        <header
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/c/cd/Black_flag.svg")`,
                backgroundPosition: "center center"
            }}
        >
            <div className="banner-contents">
                <h1 className="banner-title">
                    Movie Name
                </h1>
                <div className="banner-buttons">
                    <button className="banner-button">Play</button>
                    <button className="banner-button">My List</button>
                </div>
                <h1 className="banner-description">
                    {truecate(`This is a Test Description This is a Test Description This is a Test DescriptionThis is a Test DescriptionThis is a Test Description This is a Test Description This is a Test Description This is a Test DescriptionThis is a Test DescriptionThis is a Test DescriptionThis is a Test DescriptionThis is a Test DescriptionThis is a Test DescriptionThis is a Test DescriptionThis is a Test DescriptionThis is a Test Description`, 150)}
                </h1>
            </div>

            <div className="banner-fadeBottom" />
        </header>
    )
};

export default Banner;