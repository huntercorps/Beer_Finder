import React, {Component} from 'react';
import Beers from '../beerdbapi/Beers';
import Search from '../components/Search';

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Search/>
                <Beers/>
            </React.Fragment>
        );
    }
}

export default Index;