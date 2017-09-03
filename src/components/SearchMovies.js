import React, { Component } from 'react';
import { AsyncTypeahead} from 'react-bootstrap-typeahead';

// var Typeahead = require('react-bootstrap-typeahead').Typeahead;

class SearchMovies extends Component {

    constructor(props) {
        super(props);
        this.state = {
            options: [],
            minLength: 3,
        };
    }

    change(value){
        this.props.onChange(this.props.name, value);
    }

    render() {
        return (
            <div>
                <AsyncTypeahead
                    {...this.state}
                    labelKey="login"
                    onSearch={this._handleSearch}
                    placeholder="Search for a movie"
                    renderMenuItemChildren={this._renderMenuItemChildren}
                    onInputChange={this.change.bind(this)}
                    minLengt
                />
            </div>
        );
    }

    _renderMenuItemChildren(option, props, index) {
        return (
            <div key={option.id}>
                <span>{option}</span>
            </div>
        );
    }

    _handleSearch = query => {
        fetch(`http://mdb.dev/api/search-movie?movie=${query}`)
            .then((response) => {
                if(response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(json => this.setState({options: json.data}))
            .catch(this.handleError.bind(this))
    }

    handleError() {
        this.setState({
            options: ['Wrong name']
        });
        this.change('');
    }
}


export default SearchMovies;