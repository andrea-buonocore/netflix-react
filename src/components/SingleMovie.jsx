import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Component } from "react";


class SingleMovie extends Component {

    state = {
        isShown: false,
    }


    render() {


        return (
            <Col className="my-2">
                <Card className="border border-1 border-dark movieCard" >
                    <Card.Img
                        variant="top"
                        className="cardImg"
                        src={this.props.movie.Poster}
                        onMouseEnter={
                            () => {
        
                                this.setState({
                                    isShown: true
                                })
                            }
                        }
                        onMouseOut={
                            () => {
                                this.setState({
                                    isShown: false
                                })
                            }
                        }
                        

                    />

                    {this.state.isShown && (
                        <>
                            <Card.Body 
                                className="py-0 px-2"
                                
                            >
                                <Card.Text className="text-dark fw-bold text-truncate">
                                    <small>{this.props.movie.Title}</small>
                                    <br />
                                    <small className="text-muted">{this.props.movie.Year}</small>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer 
                                className="d-flex align-items-center m-0"
                            >
                                <i className="bi bi-play-circle-fill"></i>
                                <small className="text-dark mx-2">Watch Now</small>
                            </Card.Footer>

                        </>
                    )}


                </Card>
            </Col>
        )
    }
}

export default SingleMovie;