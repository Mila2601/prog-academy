import { ListGroup, Badge } from 'react-bootstrap';
import Counter from './Counter';

function CartItem({product, removeFromCart, reduceQuantity, increaseQuantity}) {
    return <ListGroup.Item className="listItem d-flex justify-content-between" key={product.id}>
                {product.title} ({(product.price).toFixed(2)} грн) 
                <Counter product={product} reduceQuantity={reduceQuantity} increaseQuantity={increaseQuantity} />
                <Badge pill className='bg-dark' onClick={() => removeFromCart(product.id)}>✕</Badge>
            </ListGroup.Item>
}
 
export default CartItem;