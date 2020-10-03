import React from 'react';
import './App.css';
import './css/bootstrap.min.css';
import { Col, Row, Container, Alert, Breadcrumb, Badge, Button, Card, CardGroup, Image } from 'react-bootstrap';

function App() {
  return (
    <div id="divPad" >
        <Row>
          <Col sm={3}><Alert variant="primary">Website React Bootstrap</Alert></Col>
          <Col sm={4}></Col>
          <Col md="auto">
              <Button variant="primary">Notifications <Badge variant="light">9</Badge></Button>
              <Button variant="primary">Message <Badge variant="light">9</Badge><span className="sr-only">Belum Dibaca</span></Button>
          </Col>
          <Col sm={2} id="colProf"><Image id="imgProf" src="https://banner2.kisspng.com/20180420/kuq/kisspng-computer-icons-user-clip-art-my-vector-5ad9a348cd2ce1.8035052415242125528404.jpg" roundedCircle /><b> Andreas</b></Col>
        </Row>
        <Row noGutters>
          <Col sm></Col>
          <Col sm></Col>
          <Col sm>
              <Breadcrumb>
                  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                  <Breadcrumb.Item href="https://bola.com">Berita</Breadcrumb.Item>
                  <Breadcrumb.Item active>Bola</Breadcrumb.Item>
              </Breadcrumb>
          </Col>
        </Row>
        <Container>
            <Row>
            <CardGroup>
                  <Card className="cardWidth">
                      <Card.Img variant="top" src="https://images.performgroup.com/di/library/GOAL/f7/ad/diego-godin-vs-thailand_l9viaa2o7afh19gjl6vnekbgq.jpg?t=-1214473334&w=1920&h=1362&quality=100" />
                      <Card.Body>
                        <Card.Title>Diego Godin Ukir Rekor Spesial Lawan Thailand</Card.Title>
                        <Card.Text>
                          Godin sekarang menjadi pemain Uruguay dengan Caps terbanyak setelah membantu neganya melibas Thailand di final Piala Tiongkok. Diego Godin boleh berbangga setelah resmi menjadi...
                        </Card.Text>
                        <Button variant="primary">Read More</Button>
                      </Card.Body>
                  </Card>
                  <Card className="cardWidth">
                      <Card.Img variant="top" src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600" />
                      <Card.Body>
                        <Card.Title>Neymar Bahas Kontrak Baru di Paris Saint-Germain</Card.Title>
                        <Card.Text>
                          Ayah sang pemain bintang Brasil berusaha memendam rumor ketertarikan Madrid. Neymar sedang berdiskusi dengan Paris Saint-Germain soal perpanjangan kontrak bersama kampiun Ligue 1 Prancis, demikian kata Ayahnya..
                        </Card.Text>
                        <Button variant="primary">Read More</Button>
                      </Card.Body>
                  </Card>
                  <Card className="cardWidth">
                      <Card.Img variant="top" src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600" />
                      <Card.Body>
                        <Card.Title>Inggris Mau Jadi Tim Terbaik di Dunia</Card.Title>
                        <Card.Text>
                          Kumpulan talenta terbaik yang dimiliki Inggris saat ini membuat Barkley sangat optimis. Ross Barkley merasa Inggris sudah berada di jalur yang benar untuk bisa menjadi tim terbaaik di dunia dengan banyaknya talenta yang muncul sekarang ini...
                        </Card.Text>
                        <Button variant="primary">Read More</Button>
                      </Card.Body>
                  </Card>
                  <Card className="cardWidth">
                      <Card.Img variant="top" src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600" />
                      <Card.Body>
                        <Card.Title>Sani Rizki Fauzi Tegaskan Mental Pemain Timnas Indonesia U-23 Tetap Bagus</Card.Title>
                        <Card.Text>
                          Gelandang tin nasional (Timnas) Indonesia U-23, Sani Rizki Fauzi, menegaskan kesiapannya untuk bermain pada laga melawan Brunei Darussalam U-23. Kedua tim akan bentrok pada laga pamungkas group K.
                        </Card.Text>
                        <Button variant="primary">Read More</Button>
                      </Card.Body>
                  </Card>
              </CardGroup>
            </Row>
          </Container>
        </div>
  );
}

export default App;
