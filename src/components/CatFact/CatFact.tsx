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
        console.log(catFactList)
        setCatFact(
            catFactList[Math.floor(Math.random() * catFactList.length)]
        );
    };

    useEffect(listFactCollector, [catFactList]);

    const refreshCatFact = () => {
        catFactRandomiser();
    };

    return (
        <section className="catFact">
            <div className="catFactBox">
                <h2 className="factText">{catFact}</h2>
            </div>
            <div className="factButton">
                <button className="newbtn" onClick={refreshCatFact}>
                    Get me a Cat Fact
                </button>
            </div>
        </section>
    );
};

export default CatFact;
