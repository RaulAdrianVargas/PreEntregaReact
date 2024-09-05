import { Card } from "react-bootstrap";
import { ItemCount } from "./ItemCount";

export const ItemDetail = ({ item, onAdd }) => {
  return (
    <Card className="shadow-lg mx-auto">
      <Card.Img
        variant="top"
        src={item.image || "https://via.placeholder.com/400x200"}
        className="card-img-top"
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="card-title">{item.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted card-subtitle">
          Category: {item.categoryId}
        </Card.Subtitle>
        <Card.Text className="card-text">
          <strong>Description:</strong> {item.description}
        </Card.Text>
        <Card.Text className="card-text">
          <strong>Price:</strong> ${item.price}
        </Card.Text>
        <Card.Text className="card-text">
          <strong>Stock:</strong> {item.stock}
        </Card.Text>
        <div className="item-count-container">
          <ItemCount stock={item.stock} onAdd={onAdd} />
        </div>
      </Card.Body>
    </Card>
  );
};
