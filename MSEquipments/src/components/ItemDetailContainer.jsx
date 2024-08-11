import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import data from "../data/products.json";

export const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const parsedId = Number(id);

        new Promise((resolve) => setTimeout(() => resolve(data), 2000)).then(
            (response) => {
                const finded = response.find((i) => i.id === parsedId);
                if (finded) {
                    setItem(finded);
                }
            }
        ).finally(() => setLoading(false));
    }, [id]);

    if (loading) return "wait";

    if (!item) return <Container className="mt-4"><h1>Item not found</h1></Container>;

    return (
        <Container className="mt-4">
            <h1>{item.name}</h1>
            <p>Category: {item.category}</p>
            <p>Subcategory: {item.subcategory}</p>
            <p>Price: ${item.price}</p>
            <p>Description: {item.description}</p>
            <p>Brand: {item.brand}</p>
            <p>Rating: {item.rating}</p>
        </Container>
    );
};
