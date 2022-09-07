import {useOutletContext, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Col} from 'react-bootstrap'

function SingleProduct() {
  const {productId} = useParams();
  const products = useOutletContext();
  const [singleProduct, setSingleProduct] = useState({});

  useEffect(() => {
    if(products?.length) {
      setSingleProduct(products.filter(el => el.id === +productId)[0]);
      window.scroll({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [products, productId]);

  return <Col xs={12}>
    {console.log(JSON.stringify(singleProduct))}
    <h2>Ви вибрали: "{singleProduct.title}", автор {singleProduct.author}</h2>
    <h2>Ціна: {singleProduct.price} грн</h2>
  </Col>
}

export default SingleProduct;