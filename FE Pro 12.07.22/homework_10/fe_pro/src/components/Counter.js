function Counter ({increaseQuantity, product, reduceQuantity}) {
    return <div className="counter">
        <div onClick={() => reduceQuantity(product.id)}>-</div>
        <div>{product.count}</div>
        <div onClick={() => increaseQuantity(product.id)}>+</div>
    </div>
}

export default Counter;