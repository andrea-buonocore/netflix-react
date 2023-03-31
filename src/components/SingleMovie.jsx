import Col from "react-bootstrap/Col";

const SingleMovie = (props) => {
    return (
        <Col className="my-2">
            <img src={props.movie.Poster} class="img-fluid" alt="thumbnail" />
        </Col>
    )
}

export default SingleMovie;