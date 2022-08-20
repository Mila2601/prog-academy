import { Card } from "react-bootstrap";

function Product({product}) {
    return <Card className="mb-3">
    <div class="imageContainer">
        <Card.Img className="image" variant="top" src={product.images[0]} />
    </div>
    <Card.Body>
      <Card.Title>{product.title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{product.brand ? product.brand : '0'}</Card.Subtitle>
      <Card.Text>
        {product.description}
      </Card.Text>
      <div className="badge bg-primary">{product.price ? product.price : '0'}$</div>
    </Card.Body>
  </Card>
  }
  
  export default Product;