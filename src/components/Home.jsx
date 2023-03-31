import HomeMenu from "./HomeMenu";
import Gallery from "./Gallery";
import Container from "react-bootstrap/Container";

const Home = () => {
    return (
        <Container>
            <HomeMenu />
            <Gallery movie="harry"/>
        </Container>
    )
}

export default Home;