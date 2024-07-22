import React from 'react';
import "./review.css";
function Review({image,name,description}){
    return (
        <div classname="review">
            <img src={image} alt={name} classname="review-image"/>
            <div classname="review-content">
                <h3 classname="review-name">{name}</h3>
                <p classname="review-description">{description}</p>
            </div>
        </div>
    );
}
export default Review;