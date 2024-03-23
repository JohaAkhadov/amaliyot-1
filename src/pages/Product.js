import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { addItem } from '../redux/action';
import Card from '../components/Card';

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addItem(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`http://localhost:5000/category/${id}`);
      const data = await response.json();
      setProduct(data);
      setLoading(false);
    };
    getProduct();
  }, [id]);

  const ShowProduct = () => {
    return (
      <>
        <div className="product">
          <div className="product_top">
            <div className="product_top_div">
              Воздушные шары из латекса
            </div>
            <img src="../img/Frame 84.png" alt="" />
            <div className="product_top_div">
              Круглые без рисунка
            </div>
          </div>
          <div className="product_center">
            <div className="product_center_top">
              <div className="product_images">
                <div className="product_image_div">
                  <img src="../img/Rectangle 8.png" alt="" />
                  <img src="../img/Rectangle 9.png" alt="" />
                  <img src="../img/Rectangle 10.png" alt="" />
                  <img src="../img/Rectangle 11.png" alt="" />
                  <img src="../img/vid.png" alt="" />
                </div>
                <img className='product_center_top_image' src="../img/Rectangle 7.png" alt="" />
              </div>
            <div className="product_center_text">
              <div className="pct_top">
                <div className="pct_top_divs">
                  <div className="pct_top_div">
                    Бестселлер
                  </div>
                  <div className="pct_top_div">
                    -20%
                  </div>
                </div>
                <p>{product.article}</p>
              </div>
              <div className="pc_text">
                <h1>{product.title}</h1>
                <p>Шары из натурального латекса, мягкие, легко надуваются ртом или ручным насосом, отлично подходят для заполнения гелием. Цвет шариков зелёный.</p>
                <span>Поставка происходит в ненадутом виде в уникальной фирменной упаковке.</span>
              </div>
              <div className="pc_price">
                <h1>{product.price}₽</h1>
                <button onClick={() => addProduct(product)}>В корзину</button>
              </div>
              <div className="pc_bottom">
                <div className="pc_bottom_top">
                  <h1>Доставим <h2>по Москве и области</h2></h1>
                  <img src="../img/arrow (1).png" alt="" />
                </div>
                <div className="pc_bottom_divs">
                  <div className="pc_bottom_div">
                    <img src="../img/Smiley.png" alt="" />
                    <p>Курьером сегодня от 500 ₽</p>
                  </div>
                  <div className="pc_bottom_div">
                    <img src="../img/Storefront (1).png" alt="" />
                    <p>Самовывоз из магазина: г. Королёв, Лесная 12</p>
                  </div>
                  <div className="pc_bottom_div">
                    <img src="../img/Package (1).png" alt="" />
                    <p>Почтой России</p>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="product_center_bottom">
              <h1>Характеристики</h1>
              <div className="pcb_divs">
                <div className="pcb_divss">
                  <div className="pcb_div">
                    <p>Цвет</p>
                    <img src="../img/Line 1.png" alt="" />
                    <span>Зелёный</span>
                  </div>
                  <div className="pcb_div">
                    <p>Количество в упаковке, шт</p>
                    <img src="../img/Line 1.png" alt="" />
                    <span>30</span>
                  </div>
                  <div className="pcb_div">
                    <p>Длина, см</p>
                    <img src="../img/Line 1.png" alt="" />
                    <span>13</span>
                  </div>
                  <div className="pcb_div">
                    <p>Материал</p>
                    <img src="../img/Line 1.png" alt="" />
                    <span>Натуральный латекс</span>
                  </div>
                  <div className="pcb_div">
                    <p>Артикул</p>
                    <img src="../img/Line 1.png" alt="" />
                    <span>35745890</span>
                  </div>
                </div>
                <div className="pcb_divss">
                <div className="pcb_div">
                    <p>Срок годности, дней</p>
                    <img src="../img/Line 1.png" alt="" />
                    <span>365</span>
                  </div>
                  <div className="pcb_div">
                    <p>Страна-изготовитель</p>
                    <img src="../img/Line 1.png" alt="" />
                    <span>Китай</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product_bottom">
            <h1>Похожие товары</h1>
            <div className="product_cards">
              <Card img={"../img/pic (26).png"} title={"Свеча для торта цифра 0 яркая"} price={190}/>
              <Card img={"../img/pic (27).png"} title={"Свеча для торта цифра 0 яркая"} price={190}/>
              <Card img={"../img/base-pic (10).png"} title={"Свеча для торта цифра 0 яркая"} price={190}/>
              <Card img={"../img/pic (28).png"} title={"Свеча для торта цифра 0 яркая"} price={190}/>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container">
        {loading ? <h1>Loading...</h1> : <ShowProduct />}
      </div>
    </div>
  );
}

export default Product;