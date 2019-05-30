import React, {Component} from 'react';
import {Consumer} from '../context';
import Spinner from '../components/Spinner';
import Beer from './Beer';

class Beers extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const {beer_list, heading}= value;

                    console.log(value);

                    if (beer_list === undefined || beer_list.length === 0){
                        // return <Spinner/>
                        return <h6>No Resuts</h6>
                    } else {
                        return (
                            <React.Fragment>
                                <h3 className={"text-center mb4"}>{heading}</h3>
                            <div className="row">
                                {beer_list.map(item => (
                                    <Beer key={item.id} beer={item}/>
                                ))}
                            </div>
                            </React.Fragment>
                        )
                    }
                }}
            </Consumer>
        );
    }
}

export default Beers;