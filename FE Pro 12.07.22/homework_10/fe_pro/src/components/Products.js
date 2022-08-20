import { useEffect, useState } from "react";
import Product from "./Product";
import {Row, Col, Container} from 'react-bootstrap';

function Products () {
    const [products, setProducts] = useState([]);

    useEffect(() => {fetch('https://dummyjson.com/products/').then(res => res.json()).then((data = {}) => {        
        setProducts(data.products);  
    });
    }, [])

// Можно массив products просто поделить на нужное число массивов по числу 
// колонок (например методом Slice) и расположить получившиеся короткие массивы по колонкам. Как второй вариант.
    
    return <div className='container bg-white mx-auto p-3'>
      <h1 className="text-center">PRODUCTS</h1>
      <Container>
        <Row>
          <Col>{products.filter(product => (product.id % 3 == 0)).map(product => <Product key={product.title} product={product} />)}</Col>
          <Col>{products.filter(product => ((product.id + 1) % 3 == 0)).map(product => <Product key={product.title} product={product} />)}</Col>
          <Col>{products.filter(product => ((product.id + 2) % 3 == 0)).map(product => <Product key={product.title} product={product} />)}</Col>
        </Row>
      </Container>
    </div>
}

export default Products;