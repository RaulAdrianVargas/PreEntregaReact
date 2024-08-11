import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import data from "../data/products.json"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useParams } from 'react-router-dom';

const defaultImage = 'https://via.placeholder.com/150';

export const ItemListContainer = ()=>{
    const [items, setItems ] = useState([]);
    const [loading, setLoading] = useState(true);

    const {id} = useParams();

    useEffect(()=>{
        new Promise((resolve, reject) => setTimeout(resolve(data), 2000))
        .then((response) => {
                if(!id){
                    setItems(response);
                } else{
                    const filtered= response.filter((i) => i.category === id);
                    setItems(filtered);
                }
            })
        .finally(setLoading(false));
    }, [id] );

    if(loading) return "wait";

    return (
        <Container className="mt-4">
            <Row>
                {items.map(i => (
                    <Col xs={12} sm={6} md={4} lg={3} key={i.id} className="mb-4">
                        <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" src={defaultImage} />
                            <Card.Body>
                                <Card.Title>{i.name}</Card.Title>
                                <Card.Text>
                                    {i.description}
                                </Card.Text>
                                <Card.Text>
                                    {i.category}
                                </Card.Text>
                                <Link to={`/item/${i.id}`}> <Button variant="primary">Comprar</Button></Link>  
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}