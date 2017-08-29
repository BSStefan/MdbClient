import React, { Component } from 'react';
import { AsyncTypeahead} from 'react-bootstrap-typeahead';

var Typeahead = require('react-bootstrap-typeahead').Typeahead;

class SearchMovies extends Component {

    constructor(props) {
        super(props);
        this.state = {
            options: [],
        };
    }
    submit(v){
        console.log(v);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submit.bind(this)}>
                <AsyncTypeahead
                    {...this.state}
                    labelKey="login"
                    onSearch={this._handleSearch}
                    placeholder="Search for a movie"
                    renderMenuItemChildren={this._renderMenuItemChildren}
                    onInputChange={this.submit}
                />
                </form>
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
        if (!query || query.length<3) {
            return;
        }
        fetch(`http://mdb.dev/api/search-movie?movie=${query}`)
            .then(resp => resp.json())
            .then(json => this.setState({options: json.data}));
    }
}

export default SearchMovies;