import {useOutletContext, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Col} from 'react-bootstrap'

function SingleProduct() {
  const {productId} = useParams();
  const [singleProduct, setSingleProduct] = useState({});
  const products = useOutletContext();

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
    <h2>Product: {singleProduct.brand} {singleProduct.model}</h2>
    <h2>Price: ${singleProduct.price}</h2>
  </Col>
}

export default SingleProduct;