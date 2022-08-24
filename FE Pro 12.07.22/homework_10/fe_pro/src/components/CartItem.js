import { ListGroup, Badge } from 'react-bootstrap';

function CartItem({product, removeFromCart}) {
    return <ListGroup.Item className="listItem"
        key={product.id}>{product.title} ({(product.price).toFixed(2)} грн)<Badge 
        pill className='bg-dark' onClick={() => removeFromCart(product.id)}>✕</Badge></ListGroup.Item>
}
 
export default CartItem;