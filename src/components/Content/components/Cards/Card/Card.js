import React from 'react';

const Card = ({title, text, imgSrc}) => {
    return (
        <div className="card" style={{height: '100%'}}>
            <div className="bg-image hover-overlay ripple">
                <img src={imgSrc} className="img-fluid"/>
                <a href="#!">
                    <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}}/>
                </a>
            </div>
            <div className="card-body" style={{color: 'black'}}>
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <a href="#!" className="btn btn-primary">Открыть</a>
            </div>
        </div>
    );
}

export default Card;
