import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useParams } from "react-router-dom";
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const defaultImage = "https://via.placeholder.com/150";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const ref = !id
      ? collection(db, "items")
      : query(collection(db, "items"), where("categoryId", "==", id));

    getDocs(ref)
      .then((snapshot) => {
        setItems(
          snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
      })
      .finally(setLoading(false));
  }, [id]);

  if (loading) return "wait";

  return (
    <Container className="mt-4">
      <Row>
        {items.map((i) => (
          <Col xs={12} sm={6} md={4} lg={3} key={i.id} className="mb-4">
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={defaultImage} />
              <Card.Body>
                <Card.Title>{i.title}</Card.Title>
                <Card.Text>{i.description}</Card.Text>
                <Card.Text>{i.categoryId}</Card.Text>
                <Link to={`/item/${i.id}`}>
                  {" "}
                  <Button variant="primary">Comprar</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
