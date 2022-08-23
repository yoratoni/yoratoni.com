import React from "react";
import "./Banner.css";


const Banner = () => {
    return (
        <div className="flex items-start mt-[16vh] justify-center w-full h-full pt-[4rem]">

            <div className="flex flex-col items-center justify-center w-full h-auto">
                <h1 className="banner__title">ADRIEN BIBOLLET</h1>
                {/* <h3>Mettons ensembles, tous les bougnoules à la poubelle (parasites)</h3> */}
            </div>


            {/* <div className="flex items-center justify-center w-[40vw]">
                <h1 className="font-thin text-[12vw]">YORATONI</h1>
            </div> */}
        </div>
    );
};


export default Banner;