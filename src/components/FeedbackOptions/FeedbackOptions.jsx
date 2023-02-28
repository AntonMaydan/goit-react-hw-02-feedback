import React from "react";

export const FeedbackOptions = ({ good, neutral, handleBad}) => (
   <div>
        <button type="button"
            onClick={good}>
            Good</button>
        <button type="button"
            onClick={neutral}>
            Neutral</button>
        <button type="button"
            onClick={handleBad}>
            Bad</button>
    </div>
    
);