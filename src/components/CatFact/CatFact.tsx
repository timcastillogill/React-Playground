import React, { useEffect, useState } from "react";
import "./CatFact.css";

const CatFact = () => {
    const [catFact, setCatFact] = useState("");
    const [catFactList, setCatFactList] = useState([]);

    const listFactCollector = () => {
        fetch("https://catfact.ninja/facts")
            .then((response) => response.json())
            .then((data) => setCatFactList(data.data));
    };

    const catFactRandomiser = () => {
        setCatFact(
            catFactList[Math.floor(Math.random() * catFactList.length)].fact
        );
    };

    useEffect(listFactCollector, [catFactList]);

    const refreshCat = () => {
        catFactRandomiser();
    };

    return (
        <section className="catFact">
            <div className="catFactBox">
                <p className="factText">{catFact}</p>
            </div>
            <div className="factButton">
                <button className="newbtn" onClick={refreshCat}>
                    Get me a Cat Fact
                </button>
            </div>
        </section>
    );
};

export default CatFact;
