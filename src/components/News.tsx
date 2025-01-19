import { Row, Col, Card } from "react-bootstrap";
import Container from "./Container";
import slider1 from "../assets/images/homepage/slider1.jpg";

const newsData = [
  {
    id: 1,
    title: "Haber Başlığı 1",
    description:
      "Haber detayı Haberlerin burada uzun bir yazı detayı detayı Haber detayı Haber detayı Haber detayı Haber detayı Haber detayıHaber detayıHaber detayıHaber detayı 1...",
    date: "01.01.2023",
    image: slider1,
  },
  {
    id: 2,
    title: "Haber Başlığı 2",
    description: "Haber detayı 2...",
    date: "02.01.2023",
    image: slider1,
  },
  {
    id: 3,
    title: "Haber Başlığı 3",
    description: "Haber detayı 3...",
    date: "03.01.2023",
    image: slider1,
  },
  {
    id: 4,
    title: "Haber Başlığı 3",
    description: "Haber detayı 3...",
    date: "03.01.2023",
    image: slider1,
  },
  {
    id: 5,
    title: "Haber Başlığı 3",
    description: "Haber detayı 3...",
    date: "03.01.2023",
    image: slider1,
  },
];

const News = () => {
  return (
    <Container>
      <h2 className="cg-part-title">Haberler ve Duyurular</h2>
      <Row className="align-items-stretch justify-content-center  cg-news-container">
        {newsData.slice(-4).map((news) => (
          <Col key={news.id} md={3} className="mb-4 cg-new">
            <Card className="height-100">
              <Card.Img variant="top" src={news.image} />
              <Card.Body>
                <Row>
                  <Col md={7}>
                    <Card.Title className="cg-color-red">
                      {news.title}
                    </Card.Title>
                  </Col>
                  <Col md={5} className="text-right ">
                    <Card.Text>{news.date}</Card.Text>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <Card.Text>{news.description}</Card.Text>
                  </Col>
                </Row>
                <Row>
                  <Col className="text-center">
                    <button className="cg-buttons">Detay Gör</button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default News;
