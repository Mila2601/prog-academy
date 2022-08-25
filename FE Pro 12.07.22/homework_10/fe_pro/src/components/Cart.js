import './Cart.css';
import { ListGroup } from 'react-bootstrap';
import Total from './Total';
import CartItem from './CartItem';
import { useEffect, useState } from 'react';
import CloseBtn from './CloseBtn';

function Cart ({products, removeFromCart, reduceQuantity, increaseQuantity}) {
    const [total, setTotal] = useState(0);
    useEffect(() => {
        setTotal(products.reduce((acc, product) => {return acc + product.price * product.count}, 0))
    }, [products])
    return <div className='bg-gray-transp d-none'>
        <div className='cart bg-white p-3'>
            <h3 className='text-center'>Кошик</h3>
            <ListGroup>            
                {products.map(product => <CartItem key={product.id} product={product} 
                removeFromCart={removeFromCart} increaseQuantity={increaseQuantity} reduceQuantity={reduceQuantity} />)}
            </ListGroup>
            <Total total={total} />
            <CloseBtn Cart="Cart" />
        </div>
    </div>
}

export default Cart;