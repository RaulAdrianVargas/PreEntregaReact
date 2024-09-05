import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const defaultImage = "https://via.placeholder.com/150";

export const Item = ({ item }) => {
  return (
    <Card style={{ width: "100%" }}>
      <Card.Img variant="top" src={item.image || defaultImage} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Card.Text>{item.categoryId}</Card.Text>
        <Link to={`/item/${item.id}`}>
          <Button variant="primary">Comprar</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};
