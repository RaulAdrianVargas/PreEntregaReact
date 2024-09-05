import { useContext, useState } from "react";
import { Container, Button, Form, Col, Row } from "react-bootstrap";
import { ItemsContext } from "../context/ItemsContext";
import { collection, getFirestore, addDoc } from "firebase/firestore";

const valorInicial = {
  name: "",
  phone: "",
  email: "",
};

export const Cart = () => {
  const [buyer, setBuyer] = useState(valorInicial);
  const { items, reset, removeItem, updateItemQuantity } =
    useContext(ItemsContext);

  const handleChange = (ev) => {
    setBuyer((prev) => ({
      ...prev,
      [ev.target.name]: ev.target.value,
    }));
  };

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const sendOrder = async (ev) => {
    ev.preventDefault();

    const order = {
      buyer,
      items,
      total,
    };

    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    try {
      const docRef = await addDoc(orderCollection, order);
      alert(`Su orden: ${docRef.id} Ha sido completada`);
    } catch (error) {
      alert(`Error al completar la orden: ${error.message}`);
    } finally {
      reset();
      setBuyer(valorInicial);
    }
  };

  if (items.length === 0) {
    return (
      <Container>
        <h1>El carrito está vacío. Ve a la home para agregar productos.</h1>
      </Container>
    );
  }

  return (
    <Container>
      <Button variant="danger" onClick={reset}>
        Vaciar carrito
      </Button>
      {items.map((item) => (
        <Row key={item.id} className="mb-3">
          <Col md={4}>
            <img src={item.image} alt={item.title} className="img-fluid" />
          </Col>
          <Col md={6}>
            <h1>{item.title}</h1>
            <p>Quantity: {item.quantity}</p>
            <Button
              variant="secondary"
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
            >
              -1
            </Button>
            <Button
              variant="secondary"
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            >
              +1
            </Button>
          </Col>
          <Col md={2}>
            <Button variant="danger" onClick={() => removeItem(item.id)}>
              x
            </Button>
          </Col>
        </Row>
      ))}
      <div>Total: ${total}</div>
      <Form onSubmit={sendOrder}>
        <Form.Group controlId="formName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={buyer.name}
            required
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formPhone">
          <Form.Label>Telefono</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            value={buyer.phone}
            required
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={buyer.email}
            required
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Comprar
        </Button>
      </Form>
    </Container>
  );
};
