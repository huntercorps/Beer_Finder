import React, {Component} from 'react';
import axios from 'axios';
import {Consumer} from '../context';

const base = 'https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/search?q=';
const ending = '&type=beer&withBreweries=Y&key=916cf860ed4e121aa959566b84e7de7d';

class Search extends Component {
    state = {beerName: ''};

    findBeer = (dispatch, e) => {
        e.preventDefault();
        let thisSearch = base+this.state.beerName+ending;

        axios.get(thisSearch)
            .then(res => {
                console.log(res.data);
                dispatch({
                    type: 'SEARCH_BEERS',
                    payload: res.data.data
                });
            })
            .catch(err => console.log(err))
    };

    onChange(e) {
        this.setState({beerName: e.target.value});
    }

    render() {
        return (
            <Consumer>
                {value => {
                    const {dispatch} = value;
                    return (
                        <div className={"card card-body mb-4 p-4"}>
                            <h1 className={"display-4 text-center"}>
                                <i className={"fas fa-beer"}>Search For Beer</i>
                            </h1>
                            <p className={"lead text-center"}>Find beer and get beer details</p>
                            <form onSubmit={this.findBeer.bind(this, dispatch)}>
                                <div className={"form-group"}>
                                    <input
                                        type={"text"}
                                        className={"form-control form-control-lg"}
                                        placeholder={"Beer Name..."}
                                        name={"beerName"}
                                        value={this.state.beerName}
                                        onChange={this.onChange.bind(this)}
                                    />
                                </div>
                                <button className={"btn btn-primary btn-lg btn-block mb-5"} type="submit">Find Beer</button>
                            </form>
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

export default Search;