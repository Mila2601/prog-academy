import './Cart.css';
import { ListGroup } from 'react-bootstrap';
import Total from './Total';
import CartItem from './CartItem';
import { useEffect, useState } from 'react';

function Cart ({products, removeFromCart}) {
    const [total, setTotal] = useState(0);
    useEffect(() => {
        setTotal(products.reduce((acc, product) => {return acc + product.price}, 0))
    }, [products])
    return <div className='cart bg-white p-3'>
        <h3 className='text-center'>Кошик</h3>
        <ListGroup>            
            {products.map(product => <CartItem key={product.id} product={product} removeFromCart={removeFromCart}/>)}
        </ListGroup>
        <Total total={total} />
    </div>
}

export default Cart;