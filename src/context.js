import React, {Component} from 'react';
import axios from 'axios'

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
      case 'SEARCH_BEERS':
          return {
              ...state,
              beer_list: action.payload,
              heading: 'Search Results'
          };
      default:
          return state;
  }
};

class Provider extends Component {

    state = {

       beer_list: [],
        heading: 'Featured Beers',
        dispatch: action => this.setState(state => reducer(state, action))
    };

    componentDidMount() {
        axios.get('https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/search?q=Liberty&type=beer&withBreweries=Y&key=916cf860ed4e121aa959566b84e7de7d')
            .then(res => {
                //console.log(res);
                this.setState({beer_list: res.data.data})
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>

        );
    }
}

export const Consumer = Context.Consumer;
export default Provider;