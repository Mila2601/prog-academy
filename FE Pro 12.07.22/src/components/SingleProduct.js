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
    <h6>Ви вибрали: "{singleProduct?.title}", автор {singleProduct?.author}</h6>
    <h6>Ціна: {singleProduct.price} грн</h6>
  </Col>
}

export default SingleProduct;
