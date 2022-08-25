import { Badge } from "react-bootstrap";
import './Cart.css'

function CartIcon ({products, conso}) {
    return <div onClick={conso} class="cart-top">      
      <i class="icon-shopping-cart icon-2x">&#128722;
          <Badge pill className="badge icon-2x bg-danger text-white" id="countGoods">
              {products.reduce((acc, product) => acc + product.count, 0)}
          </Badge>
      </i>
      <span className="cartText">Кошик</span>    
  </div>
}

export default CartIcon;