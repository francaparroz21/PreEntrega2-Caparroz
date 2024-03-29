import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export const Item = ({ product }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.urlImg} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                    {product.description}
                </Card.Text>
                <div className='see-more'>
                    <Link to={`/item/${product.id}`}>
                        <Button className='btn btn-primary see-more'>Ver más</Button>
                    </Link>
                </div>
            </Card.Body>
        </Card>
    );
}