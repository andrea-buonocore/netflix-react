import SingleMovie from "./SingleMovie";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Component } from "react";

class Gallery extends Component {

    state = {
        movies: []
    }

    MOVIE_URL = 'https://www.omdbapi.com/?apikey=d35b2b10&s=';
    movieQuery = this.props.movie;
    
    getMovies = async () =>  {
        try{
            let respose = await fetch(this.MOVIE_URL + this.movieQuery)
            if(respose.ok){
                let data = await respose.json();
                console.log('Ho trovato:', data);
                let foundMovies = data.Search;
                console.log('Film trovati:', foundMovies);
                this.setState({
                    movies: foundMovies
                })
             
            }
            else{
                return new Error('Errore nella richiesta', respose.status);
            }    
    
        }
        catch(err){
            console.log('Errore nella richiesta', err);
        }
    }
    
    
    componentDidMount() {
        
        console.log('SONO COMPONENTDIDMOUNT()!')
        this.getMovies()
    
      }

    render() {
        return (
            <Container className="my-5">
                <h2 className="mb-3">Gallery</h2>
                <Row xs={2} md={3} lg={6}>
                    {
                        this.state.movies.slice(0, 6).map(movie => {
                            return <SingleMovie key={movie.imdbID} movie={movie} />
                        })
                    }

                </Row>
            </Container>
        )
    }
}

export default Gallery;