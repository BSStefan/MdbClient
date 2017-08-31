import React, { Component } from 'react';
import { Grid, Row, Col, Button} from 'react-bootstrap';
import SearchMovies from "../../components/SearchMovies";

class NewUser extends Component {

    constructor(props) {
        super(props);

        this.state = {
            'movie1' : '',
            'movie2' : '',
            'movie3' : '',
        };
    }

    componentWillMount() {
        document.body.style.background = '#007991';
        document.body.style.background =  '-webkit-linear-gradient(to right, #78ffd6, #007991)';
        document.body.style.background = 'linear-gradient(to right, #78ffd6, #007991)';
    }
    componentWillUnmount() {
        document.body.style.background = '#FFF';
    }

    handleChange(name,value){
        this.setState({
            ...this.state,
         [name]: value
        });
    }
    handleSubmit() {
        if(this.state.movie1 !== '' && this.state.movie2 !== '' && this.state.movie3 !== '') {
            alert('ok');
        }
        else{
            alert('jbg');
        }
    }

    render() {
        return (
            <Grid className="auth-page">
                <Row>
                    <Col md={6} mdOffset={3}>
                        <section className="auth-form text-center">
                            <div className="start-form">
                                <h1>Your favorite three movies</h1>
                                <Row className="movie-start-input">
                                    <Col md={8} mdOffset={2}>
                                        <SearchMovies name="movie1" onChange={this.handleChange.bind(this)}/>
                                    </Col>
                                </Row>
                                {/*<Row className="movie-start-input">*/}
                                    {/*<Col md={8} mdOffset={2}>*/}
                                        {/*<SearchMovies name="movie2" onChange={this.handleChange.bind(this)}/>*/}
                                    {/*</Col>*/}
                                {/*</Row>*/}
                                {/*<Row className="movie-start-input">*/}
                                    {/*<Col md={8} mdOffset={2}>*/}
                                        {/*<SearchMovies name="movie3" onChange={this.handleChange.bind(this)}/>*/}
                                    {/*</Col>*/}
                                {/*</Row>*/}

                                <Button onClick={this.handleSubmit.bind(this)}>Next</Button>
                            </div>
                        </section>
                    </Col>
                </Row>
            </Grid>

        );
    }

}

export default NewUser;