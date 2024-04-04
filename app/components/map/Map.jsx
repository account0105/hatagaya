import React from "react";
import "./map.css";

const Map = () => {
    return (
        <div className="mapBox">
            <div className="backgroundBox">
                <div className="contentsBox">
                    <h1 className="text">幡ヶ谷駅南口徒歩１分</h1>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.966009881996!2d139.67446977607514!3d35.67783892258833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f33b3ba5424b%3A0x495db0ce798b7e32!2z54S86IKJIOOBr-OBn-OBjOOChA!5e0!3m2!1sja!2sjp!4v1710489268209!5m2!1sja!2sjp"
                        width="600"
                        height="450"
                        className="map"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Map;
