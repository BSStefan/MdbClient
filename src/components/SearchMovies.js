import React from 'react';
import Autosuggest, { ItemAdapter } from 'react-bootstrap-autosuggest';
import { FormGroup, ControlLabel, Glyphicon} from 'react-bootstrap';
import  axios from 'axios';

class SearchMovies extends ItemAdapter {

    constructor(props){
        super(props);
        this.state={
            repos : [],
            reposMessage: '',
            reposMore: '',
            repo: null
        }
    };
    renderItem(item) {
        return <div className="repo">
            <div className="repo-avatar">
                <img src={item.owner.avatar_url} />
            </div>
            <div className="repo-meta">
                <div className="repo-title">{item.full_name}</div>
                <div className="repo-desc">{item.description}</div>
                <div className="repo-stats">
                    <div><Glyphicon glyph="eye-open" /> {item.watchers_count} Watchers</div>
                    <div><Glyphicon glyph="star" /> {item.stargazers_count} Stars</div>
                    <div><Glyphicon glyph="flash" /> {item.forks_count} Forks</div>
                </div>
            </div>
        </div>
    }
    render() {
        return (
            <FormGroup controlId="repoInput">
                <ControlLabel>Movie</ControlLabel>
                <Autosuggest
                    datalist={this.state.repos}
                    datalistPartial
                    datalistMessage={this.state.reposMessage}
                    onDatalistMessageSelect={this.state.reposMore}
                    placeholder="Select a GitHub repository..."
                    value={this.state.repo}
                    itemAdapter={SearchMovies.instance}
                    itemValuePropName="full_name"
                    searchDebounce={500}
                    onSearch={this.onRepoSearch}
                    onChange={this.onRepoChange} />
            </FormGroup>
        );
    };

    onRepoSearch(search, page, prev) { // $fold-line$
    if (search) {
        // GitHub search doesn't allow slashes, so strip off user prefix
        const sp = search.lastIndexOf('/');
        if (sp >= 0) {
            search = search.substring(sp + 1)
        }

        // ignore redundant searches where only the user prefix changed
        if (search === lastSearch && !page) {
            return
        }
        lastSearch = search;

        this.setState({
            reposMessage: 'Searching for matching repositories...',
            reposMore: null
        });
        let url = 'https://api.github.com/search/repositories?q=' +
            encodeURIComponent(search);
        if (page) {
            url += '&page=' + page;
        }
        axios.get(url).then(response => {
            if (response.ok) {
                response.json().then(json => {
                    let repos, reposMessage, reposMore
                    if (json.total_count === 0) {
                        reposMessage = 'No matching repositories'
                    } else {
                        repos = prev ? prev.concat(json.items) : json.items
                        if (repos.length < json.total_count) {
                            reposMessage = 'Load more...'
                            reposMore = () => this.onRepoSearch(search, page ? page + 1 : 2, repos)
                        }
                    }
                    this.setState({
                        repos,
                        reposMessage,
                        reposMore
                    })
                })
            } else {
                this.setState({
                    repos: null,
                    reposMessage: 'Repository search returned error: ' + response.statusText,
                    reposMore: null
                })
            }
        }, err => {
            this.setState({
                repos: null,
                reposMessage: 'Repository search failed: ' + err.message,
                reposMore: null
            })
        })
    } else {
        this.setState({
            repos: null,
            reposMessage: 'Type at least one character to get suggestions',
            reposMore: null
        })
    }
}

    onRepoChange(value) {
    this.setState({ repo: value })
}
}
SearchMovies.instance = new SearchMovies();

let lastSearch;




export default SearchMovies;