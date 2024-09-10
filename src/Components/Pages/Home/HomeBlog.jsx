import { Container, Row, Col, Carousel } from "react-bootstrap";
import user1 from "../../../assets/blog/review-author-1.jpg";
import user2 from "../../../assets/blog/review-author-2.jpg";
import user3 from "../../../assets/blog/review-author-3.jpg";
import user4 from "../../../assets/blog/review-author-5.jpg";
function HomeBlog() {
  return (
    <>
      <section className="blog-section" name="blog">
        <Container>
          <Row>
            <Carousel>
              <Carousel.Item>
                <Carousel.Caption>
                  <div className="user-img">
                    <img src={user1} alt="user-1" className="img-fluid" />
                  </div>
                  <p>
                    " Etiam sapien sem at sagittis congue augue massa varius
                    sodales sapien undo tempus dolor egestas magna suscipit
                    magna tempus aliquet porta sodales augue suscipit luctus
                    neque "
                  </p>
                  <div className="item-rating mb-2">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <h5>BY AMELIE NEWLOVE</h5>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Carousel.Caption>
                  <div className="user-img">
                    <img src={user2} alt="user-2" className="img-fluid" />
                  </div>
                  <p>
                    " Etiam sapien sem at sagittis congue augue massa varius
                    sodales sapien undo tempus dolor egestas magna suscipit
                    magna tempus aliquet porta sodales augue suscipit luctus
                    neque "
                  </p>
                  <div className="item-rating mb-2">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <h5>BY AMELIE NEWLOVE</h5>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Carousel.Caption>
                  <div className="user-img">
                    <img src={user3} alt="user-3" className="img-fluid" />
                  </div>
                  <p>
                    " Etiam sapien sem at sagittis congue augue massa varius
                    sodales sapien undo tempus dolor egestas magna suscipit
                    magna tempus aliquet porta sodales augue suscipit luctus
                    neque "
                  </p>
                  <div className="item-rating mb-2">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <h5>BY AMELIE NEWLOVE</h5>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Carousel.Caption>
                  <div className="user-img">
                    <img src={user4} alt="user-4" className="img-fluid" />
                  </div>
                  <p>
                    " Etiam sapien sem at sagittis congue augue massa varius
                    sodales sapien undo tempus dolor egestas magna suscipit
                    magna tempus aliquet porta sodales augue suscipit luctus
                    neque "
                  </p>
                  <div className="item-rating mb-2">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <h5>BY AMELIE NEWLOVE</h5>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default HomeBlog;
