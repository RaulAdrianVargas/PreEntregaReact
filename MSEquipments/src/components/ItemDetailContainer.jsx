import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { ItemsContext } from "../context/ItemsContext";
import { ItemDetail } from "./ItemDetail";
import { Container, Spinner } from "react-bootstrap";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { addItem } = useContext(ItemsContext);

  useEffect(() => {
    const db = getFirestore();
    const refDoc = doc(db, "items", id);

    getDoc(refDoc)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setItem({ ...snapshot.data(), id: snapshot.id });
        } else {
          setItem(null);
        }
      })
      .finally(() => setLoading(false));
  }, [id]);

  const onAdd = (quantity) => {
    if (item) {
      addItem({ ...item, quantity });
    }
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
      <ItemDetail item={item} onAdd={onAdd} />
    </Container>
  );
};
