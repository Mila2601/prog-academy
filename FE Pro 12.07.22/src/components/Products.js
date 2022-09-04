import { useContext, useEffect, useState } from "react";
import Product from "./Product";
import {Row, Container} from 'react-bootstrap';
import Cart from './Cart';
import CartIcon from "./CartIcon";
import MessageContext from "../context/MessageContext";
import TimeCounter from "./TimeCounter";

function Products () {
    const [products, setProducts] = useState([]);
    const {setMessage} = useContext(MessageContext);

    useEffect(() => {
      setProducts([
        {
          id: 1,
          imgSrc: 'https://book-ye.com.ua/upload/resize_cache/iblock/e8d/520_860_1/1d054ef2_f54e_11e7_80e4_000c29ae1566_1dde31a7_d5e0_11ec_816f_0050568ef5e6.jpg',
          author: 'Деніел Ґоулман',
          publishing: 'Vivat',
          title: 'Емоційний інтелект',
          price: 235,
          addedToCart: false,
          count: 1
        },
        {
          id: 2,
          imgSrc: 'https://book-ye.com.ua/upload/iblock/9cc/c873ff31_a80d_11eb_814a_0050568ef5e6_b0ee6fdf_e563_11eb_8150_0050568ef5e6.jpg',
          author: "Андрій Сем'янків",
          publishing: 'Віхола',
          title: 'Медицина доказова і не дуже',
          price: 215,
          addedToCart: false,
          count: 1
        },
        {
          id: 3,
          imgSrc: 'https://book-ye.com.ua/upload/iblock/462/4cf1563a_7da1_11eb_814a_0050568ef5e6_cd4054cd_7da1_11eb_814a_0050568ef5e6.jpg',
          author: 'Мей Маск',
          publishing: 'Vivat',
          title: 'Жінка, яка має план. Життя, сповнене пригод, краси й успіху',
          price: 274,
          addedToCart: false,
          count: 1
        },
        {
          id: 4,
          imgSrc: 'https://book-ye.com.ua/upload/iblock/6d7/84e61597_e264_11ec_8170_0050568ef5e6_d414f624_e266_11ec_8170_0050568ef5e6.jpg',
          author: 'Всеволод Нестайко',
          publishing: 'Школа',
          title: 'Тореадори з Васюківки: трилогія про пригоди двох друзів',
          price: 175,
          addedToCart: false,
          count: 1
        },
        {
          id: 5,
          imgSrc: 'https://book-ye.com.ua/upload/resize_cache/iblock/b6d/520_860_1/d982a9a6_f8f3_11eb_8150_0050568ef5e6_425ef70c_1230_11ec_8150_0050568ef5e6.jpg',
          author: 'Катя Бльостка',
          publishing: 'Віхола',
          title: 'Матера вам не наймичка, або Чому діти це — прекрасно...',
          price: 228,
          addedToCart: false,
          count: 1
        },
        {
          id: 6,
          imgSrc: 'https://book-ye.com.ua/upload/iblock/63e/3b181f94_0997_11ec_8150_0050568ef5e6_aa67f6eb_0997_11ec_8150_0050568ef5e6.jpg',
          author: 'Фредрік Бакман',
          publishing: '#книголав',
          title: 'Тривожні люди',
          price: 299,
          addedToCart: false,
          count: 1
        },
        {
          id: 7,
          imgSrc: 'https://book-ye.com.ua/upload/iblock/659/690a15a6_dcd1_11ec_8170_0050568ef5e6_73fc3580_dcd2_11ec_8170_0050568ef5e6.jpg',
          author: 'Дженніфер Л. Арментраут',
          publishing: 'Book Chef',
          title: 'Кров і попіл. Книга 1. Із крові й попелу',
          price: 276,
          addedToCart: false,
          count: 1
        },
        {
          id: 8,
          imgSrc: 'https://book-ye.com.ua/upload/iblock/c6f/d6508466_e107_11e9_8121_000c29ae1566_fffeaf27_e107_11e9_8121_000c29ae1566.jpg',
          author: 'Елізабет Ґілберт',
          publishing: 'Видавництво Старого Лева',
          title: 'Місто дівчат',
          price: 249,
          addedToCart: false,
          count: 1
        },
        {
          id: 9,
          imgSrc: 'https://book-ye.com.ua/upload/iblock/e38/c463077c_fafc_11e9_8123_000c29ae1566_9f9a6c70_fafd_11e9_8123_000c29ae1566.jpg',
          author: 'Джон П. Стрелекі',
          publishing: 'Vivat',
          title: 'Кафе на краю світу',
          price: 144,
          addedToCart: false,
          count: 1
        },
        {
          id: 10,
          imgSrc: 'https://book-ye.com.ua/upload/iblock/0d7/b833fe36_e084_11eb_8150_0050568ef5e6_6c3d9dc8_5bee_11ec_815d_0050568ef5e6.jpg',
          author: 'Метью Макконагі',
          publishing: 'Book Chef',
          title: 'Зелене світло',
          price: 319,
          addedToCart: false,
          count: 1
        },
        {
          id: 11,
          imgSrc: 'https://book-ye.com.ua/upload/iblock/e56/1301c6ba_8443_11ec_8166_0050568ef5e6_264a5666_caab_11ec_816f_0050568ef5e6.jpg',
          author: 'В. Е. Шваб',
          publishing: '#книголав',
          title: 'Незриме життя Адді Лярю',
          price: 350,
          addedToCart: false,
          count: 1
        },
        {
          id: 12,
          imgSrc: 'https://book-ye.com.ua/upload/iblock/7e6/175d1207_162a_11ec_8150_0050568ef5e6_4ba3282a_1631_11ec_8150_0050568ef5e6.jpg',
          author: ' Дісней',
          publishing: 'Егмонт',
          title: 'Історії на ніч',
          price: 251,
          addedToCart: false,
          count: 1
        }
      ]) 
  }, [])

    function addToCart (id) {
      setProducts(products.map(product => ({...product, addedToCart: product.id === id ? true : product.addedToCart})));
      setMessage(`<p>Ви додали у кошик "${(products.map(product => product.id === id ? product.title : '')).toString().replace(/,/g, '')}"</p>`);
    }

    function removeFromCart (id) {
      setProducts(products.map(product => ({...product, addedToCart: product.id === id ? false : product.addedToCart})));
      setMessage(`<p>Ви видалили з кошика "${(products.map(product => product.id === id ? product.title : '')).toString().replace(/,/g, '')}"</p>`);
    }

    function reduceQuantity (id) {
      setProducts(products.map(product => ({...product, count: product.id === id ? 
                                                               product.count > 1 ? 
                                                               product.count - 1 : product.count : product.count})))
    }

    function increaseQuantity (id) {
      setProducts(products.map(product => ({...product, count: product.id === id ? product.count + 1 : product.count})))
    }

    TimeCounter();
    
    return <div className="container bg-white"> 
      <CartIcon products={products.filter(product => product.addedToCart)}></CartIcon>
      <h1 className="text-center">КНИГИ</h1>
      <Container>
        <Row>
        {products.map(product => <Product key={product.title} 
                                          product={product} 
                                          addToCart={addToCart} 
                                          removeFromCart={removeFromCart}/>)}
        </Row>
      </Container>
      {
        products.filter((product) => product.addedToCart).length ? 
        <Cart reduceQuantity={reduceQuantity} increaseQuantity={increaseQuantity} 
        removeFromCart={removeFromCart} products={products.filter(product => product.addedToCart)}></Cart> : ''
      }
     
    </div>
}

export default Products;