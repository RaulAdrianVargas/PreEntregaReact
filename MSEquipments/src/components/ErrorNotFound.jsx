import Container from 'react-bootstrap/Container';

export const ErrorNotFound = () => {
    return (
        <Container className="mt-4">
            <h1>404 - Acá no hay nada</h1>
            <p>Parece que la pagina que estas buscando no existe.</p>
        </Container>
    );
};