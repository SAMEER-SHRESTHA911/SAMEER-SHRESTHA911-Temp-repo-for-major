import React, { useState, useEffect } from "react";
import "./style.css";

const SentimentResult = ({resp}) => {
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
        <div className ="title">
          <h2>Results</h2>
        </div>
        <div className="resultHeading">
          <div>
            <h4>ASPECTS</h4>
          </div>
          <div>
            <h4>SENTIMENTS</h4>
          </div>
        </div>
          {/* <span><b>CONFIDENCE</b></span> */}
        {/* <div className="resultBody">
          <div className="aspectTerms">
          {sentimentData.aspectTerms.map((aspect, index) => (
            <li>
                <span key={index}>{aspect}</span>
            </li>
          ))}
        </div> */}
          <div className="aspectTerms">
            {sentimentData.aspectTerms.map((aspect,index) => (
              <div className="aspectTermSingle" key={index}>
                <div className="word">{aspect.term}</div>
                
                <div className={aspect.tag === 'Positive'? 'positive':'negative'}>{aspect.tag}</div>  
                
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
        <div>
          <p>{resp}</p>
        </div>
    </>
  );
};

export default SentimentResult;