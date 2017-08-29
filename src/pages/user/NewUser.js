import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import { AsyncTypeahead} from 'react-bootstrap-typeahead';
var Typeahead = require('react-bootstrap-typeahead').Typeahead;

class NewUser extends Component {

    constructor(props) {
        super(props);

        this.state = {
            options: [],
        };
    }

    render() {
        return (
            <div className="start-form">
                <AsyncTypeahead
                    {...this.state}
                    labelKey="login"
                    onSearch={this._handleSearch}
                    placeholder="Search for a movie"
                    renderMenuItemChildren={this._renderMenuItemChildren}
                />
            </div>
        );
    }

    _renderMenuItemChildren(option, props, index) {
        return (
            <div key={option.id}>
                <img
                    src={option.avatar_url}
                    style={{
                        height: '24px',
                        marginRight: '10px',
                        width: '24px',
                    }}
                />
                <span>{option.login}</span>
            </div>
        );
    }

    _handleChange = e => {
        const {checked, name} = e.target;
        this.setState({[name]: checked});
    }

    _handleSearch = query => {
        if (!query) {
            return;
        }

        fetch(`https://api.github.com/search/users?q=${query}`)
            .then(resp => resp.json())
            .then(json => this.setState({options: json.items}));
    }
}

export default NewUser;