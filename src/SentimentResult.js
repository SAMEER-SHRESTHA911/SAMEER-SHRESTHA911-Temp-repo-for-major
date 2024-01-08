import React, { useState, useEffect } from "react";
import "./style.css";

const SentimentResult = () => {
  const [sentimentData, setSentimentData] = useState({
    tag: "Positive",
    confidence: 80,
    aspectTerms: [{
      term : "एशियन लाईफ",
      tag: "Positive",
      confidence: 0.90
  },
  {
      term:"शेयरधनी",
      tag: "Negative",
      confidence: -0.80
  }],
  });

  useEffect(() => {
    // Fetch data from the local JSON file
    const fetchData = async () => {
      try {
        // Assuming the JSON file is in the same directory as SentimentResult.js
        const response = await fetch("./backend/sentimentData.json");
        const data = await response.json();
        setSentimentData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="sentimentResult">
        <h2>Results</h2>
        <div className="resultHeading">
          <span><b>ASPECTS</b></span>
          <span><b>SENTIMENT</b></span>
          {/* <span><b>CONFIDENCE</b></span> */}
        </div>
        {/* <div className="resultBody">
          <div className="aspectTerms">
          {sentimentData.aspectTerms.map((aspect, index) => (
            <li>
                <span key={index}>{aspect}</span>
            </li>
          ))}
        </div> */}
          <div className ="aspectTerms">
            {sentimentData.aspectTerms.map((aspect,index) => (
            
              <div className="aspectTermSingle">
                <span>{aspect.term}</span>
                <span>{aspect.tag}</span>
                {/* <span className ="percentage"><b>{aspect.confidence}</b></span> */}
              </div>
          ))}
            {/* <span className={sentimentData.tag.toLowerCase()}>
            {sentimentData.tag}
          </span> 
          <span className="percentage">
            {sentimentData.confidence !== undefined
              ? `${sentimentData.confidence}%`
              : "N/A"}
          </span>
          </div>


          <span className={sentimentData.tag.toLowerCase()}>
            {sentimentData.tag}
          </span>
          <span className="percentage">
            {sentimentData.confidence !== undefined
              ? `${sentimentData.confidence}%`
              : "N/A"}
          </span> */}
        </div>
        {/* <h2>Aspect Terms & Sentiments</h2>
        <div className="aspectTerms">
        {sentimentData.aspectTerms.map((aspect, index) => (
          <li>
          <span key={index}>{aspect}</span>
          </li>
          ))}
        </div> */}
        </div>
    </>
  );
};

export default SentimentResult;