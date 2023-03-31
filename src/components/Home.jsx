import HomeMenu from "./HomeMenu";
import Gallery from "./Gallery";
import Container from "react-bootstrap/Container";

const Home = () => {
    return (
        <Container className="px-0">
            <HomeMenu />
            <Gallery movie="star wars" />
            <Gallery movie="lord of the rings" />
            <Gallery movie="matrix" />
        </Container>
    )
}

export default Home;