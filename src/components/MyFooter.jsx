import Container from "react-bootstrap/Container";

const MyFooter = () => {
    return (
        <Container fluid>
            <footer class="p-0 container footerContainer mt-5">
                <div>
                    <a href="#"><i class="bi bi-facebook"></i></a>
                    <a href="#"><i class="bi bi-twitter"></i></a>
                    <a href="#"><i class="bi bi-instagram"></i></a>
                    <a href="#"><i class="bi bi-youtube"></i></a>
                </div>
                <div class="row row-cols-3 row-cols-sm-4  my-3">
                    <div class="col my-1 my-sm-3"><a class="text-decoration-none" href="#">Audio and
                            Subtitles</a>
                    </div>
                    <div class="col my-1 my-sm-3"><a class="text-decoration-none" href="#">Media
                            Center</a> </div>
                    <div class="col my-1 my-sm-3"><a class="text-decoration-none" href="#">Privacy</a>
                    </div>
                    <div class="col my-1 my-sm-3"><a class="text-decoration-none" href="#">Contact
                            Us</a> </div>
                    <div class="col my-1 my-sm-3"><a class="text-decoration-none" href="#">Media
                            Center</a> </div>
                    <div class="col my-1 my-sm-3"><a class="text-decoration-none" href="#">Investor
                            Relations</a> </div>
                    <div class="col my-1 my-sm-3"><a class="text-decoration-none" href="#">Jobs</a>
                    </div>
                    <div class="col my-1 my-sm-3"><a class="text-decoration-none" href="#">Terms of
                            Use</a> </div>
                    <div class="col my-1 my-sm-3"><a class="text-decoration-none" href="#">Privacy</a>
                    </div>
                    <div class="col my-1 my-sm-3"><a class="text-decoration-none" href="#">Legal
                            Notices</a> </div>
                    <div class="col my-1 my-sm-3"><a class="text-decoration-none" href="#">Cookie
                            Preferences</a> </div>
                    <div class="col my-1 my-sm-3"><a class="text-decoration-none" href="#">Corporate
                            Information</a>
                    </div>
                    <div class="col my-3"><a class="text-decoration-none" href="#">Contact
                            Us</a> </div>
                </div>

                <button type="button" class="btn btn-outline-secondary rounded-0 my-3 button">Service
                    Code</button>

                <p class="grigio">&copy; 1997-2019 Netflix, Inc.</p>
            </footer>
        </Container>
    )
}

export default MyFooter;

