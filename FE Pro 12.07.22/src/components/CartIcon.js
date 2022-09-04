import { Badge } from "react-bootstrap";
import './Cart.css'

function CartIcon ({products}) {    
    function showCart () {
        document.getElementsByClassName('bg-gray-transp')[0].classList.remove('d-none');
      }

    return <div onClick={showCart} className="cart-top">      
      <i className="icon-shopping-cart icon-2x">&#128722;
          <Badge pill className="badge icon-2x bg-danger text-white" id="countGoods">
              {products.reduce((acc, product) => acc + product.count, 0)}
          </Badge>
      </i>
  </div>
}

export default CartIcon;