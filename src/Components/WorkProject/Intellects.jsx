import React, { useContext } from "react";
import { ThemeContext } from "./../../themeProvider";

export const Intellects = () => {
    const theme = useContext(ThemeContext);
    const darkmode = theme.state.darkmode;
    
    return (
        <>
            <div className = 'int-main'>
                <div style={{backgroundImage: `url(${"/img/stb2.png"})`, backgroundSize: "cover"}} className="int-bg"></div>
                <div className="count-text">01</div>
                <div className="int-container">
                    <div className="int-left">
                        <div className='hero-text'>
                            <h1>The Intellects</h1>
                            <h3>A website cum resource</h3>
                        </div>
                    </div>
                    <div className="int-right">
                        <div style={{backgroundImage: `url(${"/img/Intellects.png"})`, backgroundSize: "cover"}} className='ss'></div>
                    </div>
                </div>
                <div className="desc-bottom">
                    <div className='short-text'><span className="text-orange-400">Role:</span> Frontend-Backend</div>
                    <div className='short-text'><span className="text-orange-400">Stack:</span> JavaScript, Nodejs, Express, MongoDB</div>
                    <div className='short-text'><span className="text-orange-400">Period:</span> Aug, 2020 - Oct-2020</div>
                </div>
            </div>
            <div className = "project-desc1">
                <div className = "hero-text">
                    <h1>The Intellects</h1>
                    <h3>A website cum resource</h3>
                </div>
                <div className = "desc">
                Sportland aims to promote the economy and tourism in the foothills and the High Friuli thanks to the multiple 
                sports that you can enjoy in the area. The municipal government is working on this project since a long time 
                willing to relaunch the economy and tourism of the whole territory.
                </div>
                <div className="website-button">
                    <a href="http://theintellects.tk/" target= "_blank">Visit Website</a>
                </div>
            </div>
        </>
    )
}