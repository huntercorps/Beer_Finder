import React, {Component} from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import {Link} from 'react-router-dom';

const base = 'https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/beer/';
const ending = '?withBreweries=Y&key=916cf860ed4e121aa959566b84e7de7d';

class Details extends Component {

    state = { details: {} };

    componentDidMount() {
        // 'https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/beer/${this.props.match.params.id}?withBreweries=Y&key=916cf860ed4e121aa959566b84e7de7d'
        let thisUrl = base+this.props.match.params.id+ending;
        console.log(this.props.match.params.id);
        axios.get(thisUrl)
            .then(res => {
                console.log(res);
                this.setState({details: res.data.data});
            })
            .catch(err => console.log(err))
    }

    render() {
        const {details} =this.state;
        if (details === undefined || Object.keys(details).length ===0) {
            return <Spinner/>;
        } else {
            return (
                <React.Fragment>
                    <Link to="/" className="btn btn-dark btn-sm mb-4">Go Back</Link>
                    <div className={"card"}>
                        <h5 className={"card-header"}>
                            <strong><i className={"fas fa-beer"}/> Name: {details.name}</strong>
                        </h5>
                        <div className={"card-body"}>
                            <p className={"card-text"}>
                                <strong>Description: </strong>
                                {details.description}
                                <p/>
                                <strong>Style: </strong>
                                {details.style.shortName} : {details.style.name}
                                <br/>
                                <strong>Style Notes: </strong>
                                {details.style.description}
                                <p/>
                                ABV: {details.abv}
                                <p/>
                                <img
                                    src={details.breweries[0].images.medium}
                                    alt={"Loading..."}
                                    style={{width: '200px', margin: '40px auto', display: 'block'}}/>
                                Brewery: {details.breweries[0].name} Website: {details.breweries[0].website}
                                <br/>
                            </p>
                        </div>
                    </div>

                </React.Fragment>
            );
        }

    }
}

export default Details;