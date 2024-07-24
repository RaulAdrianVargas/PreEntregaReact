import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

import image from "../assets/trabajando.jpg"

export const Tarjeta = ()=>{
    return (
      <Container className="d-flex justify-content-center">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Productos que vamos a ofrecer en nuestra pagina web
          </Card.Text>
          <Button variant="primary">Comprar</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Productos que vamos a ofrecer en nuestra pagina web
          </Card.Text>
          <Button variant="primary">Comprar</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Productos que vamos a ofrecer en nuestra pagina web
          </Card.Text>
          <Button variant="primary">Comprar</Button>
        </Card.Body>
      </Card>
      </Container>
    );
  } ;