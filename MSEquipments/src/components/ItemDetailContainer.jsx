import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { ItemCount } from "./ItemCount";
import { ItemsContext } from "../context/ItemsContext";
import { Card, Spinner } from "react-bootstrap";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { addItem } = useContext(ItemsContext);

  useEffect(() => {
    const db = getFirestore();
    const refDoc = doc(db, "items", id);

    getDoc(refDoc)
      .then((snapshot) => {
        setItem({ ...snapshot.data(), id: snapshot.id });
      })
      .finally(() => setLoading(false));
  }, [id]);

  const onAdd = (quantity) => {
    addItem({ ...item, quantity });
  };

  if (loading) {
    return (
      <Container className="mt-4 text-center">
        <Spinner animation="border" />
      </Container>
    );
  }

  if (!item) {
    return (
      <Container className="mt-4 text-center">
        <h1>Item not found</h1>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
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
    </Container>
  );
};
