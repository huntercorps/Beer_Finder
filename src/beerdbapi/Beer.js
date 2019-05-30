import React from 'react';
import {Link} from 'react-router-dom';

const Beer = (props) => {
  const {beer} = props;

  return (

      <div className={"col-md-6"}>
          <div className={"card mb-4 shadow-sm"}>
              <div className={"card-body"}>
                  <p className={"card-text"}>
                      <strong><i className={"fas fa-beer"}/> Beer: {beer.name}</strong>
                      <br/>
                      <strong><i className={"fas fa-industry"}/> Brewery: {beer.breweries[0].name}</strong>
                  </p>
                  <Link to={`details/beer/${beer.id}`}
                        className={"btn btn-dark btn-block"}>
                      <i className={"fas fa-chevron-right"}/> View Details
                  </Link>
              </div>
          </div>
      </div>
  )
};

export default Beer;