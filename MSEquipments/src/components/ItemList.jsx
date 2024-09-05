import { Row, Col } from "react-bootstrap";
import { Item } from "./Item";

export const ItemList = ({ items }) => {
  return (
    <Row>
      {items.map((item) => (
        <Col xs={12} sm={6} md={4} lg={3} key={item.id} className="mb-4">
          <Item item={item} />
        </Col>
      ))}
    </Row>
  );
};
