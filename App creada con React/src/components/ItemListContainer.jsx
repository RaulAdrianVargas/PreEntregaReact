import Container from 'react-bootstrap/Container';

export const ItemContainer = (props)=>{
    return (
        <Container className="text-center"><h1>{props.greeting}</h1></Container>
    );
}