import { Card, Button, Col  } from "react-bootstrap";

function Product({product, addToCart, removeFromCart}) {
    return <Col xs={12} md={6} lg={4}>
      <Card className="mb-3">
      <div class="imageContainer">
          <Card.Img className="image" variant="top" src={product.imgSrc} />
      </div>
      <Card.Body>
        <Card.Title>{product.author}</Card.Title>
        <Card.Subtitle className="publisher mb-2 text-muted">Видавництво "{product.publishing}"</Card.Subtitle>
        <Card.Text>
          {product.title}
        </Card.Text>
        <Card.Text className="price">{product.price ? (product.price).toFixed(2) : '0'} грн</Card.Text>
        {!product.addedToCart ? 
          <Button onClick={() => addToCart(product.id)} variant="success">Додати в кошик</Button> : 
          <Button onClick={() => removeFromCart(product.id)} variant="danger">Видалити з кошика</Button>}
      </Card.Body>
    </Card>
  </Col>
  }
  
  export default Product;