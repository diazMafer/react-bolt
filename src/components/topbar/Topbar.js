import React from 'react';
import "../../css/topbar.css";
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';

const Topbar = () => (
    <div className="topbar">
        <div className="topbarWrapper">
            <div className="topLeft">
                <h1 className="leftTop">
                    HAU
                </h1>
                <h2 className="leftBottom">
                    Calidad del aire
                </h2>
            </div>
            <div className="topRight">
                <div className="topbarButtonsWrapper">
                    <div className="topbarButton">
                        <HomeOutlinedIcon fontSize="small" ></HomeOutlinedIcon>
                        <span className="topButtonText">Tablero</span>

                    </div>
                    <div className="topbarButton">
                        <DescriptionOutlinedIcon fontSize="small" ></DescriptionOutlinedIcon>
                        <span className="topButtonText">Datos</span>

                    </div>
                </div>
            </div>
        </div>

    </div>
);

export default Topbar;