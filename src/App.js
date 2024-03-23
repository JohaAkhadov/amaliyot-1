import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Directory from "./pages/Directory";
import Service from "./pages/Service";
import Delivery from "./pages/Delivery";
import AllUs from "./pages/AllUs";
import Stock from "./pages/Stock";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import Lateks from "./pages/Lateks";
import Folga from "./pages/Folga";
import Celebration from "./pages/Celebration";
import Instruments from "./pages/Instruments";
import Package from "./pages/Package";
import Product from "./pages/Product";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "./redux/reducer/searchSlice";
import { useState } from "react";

function App() {

  const state = useSelector((state) => state.handleCart);
  const { searchDis } = useSelector(state => state.searchSlice);
  const [navigation, setNavigation] = useState(false)
  const dispatch = useDispatch();
  function NavFunc() {
    setNavigation(!navigation)
  }
  return (
    <div className="App">
      <div id="navigation_menu"  >
        <div className="navigation_top">
          <div className="nt_left">
            <img src="./img/u_location-point.png" alt="" />
            <p>г. Королёв, Лесная 12, ТРЦ Вертикаль</p>
          </div>
          <div className="nt_right">
            <div className="nt_socials">
              <img src="./img/Instagram - Original.png" alt="" />
              <img src="./img/uil_whatsapp-alt.png" alt="" />
              <img src="./img/Telegram - Original.png" alt="" />
              <img src="./img/VK - Original.png" alt="" />
            </div>
            <div className="nt_telefons">
              <div className="nt_telefon">
                <img src="./img/Vector.png" alt="" />
                <p>+7(903) 014-87-25</p>
              </div>
              <div className="nt_telefon">
                <img src="./img/Vector.png" alt="" />
                <p>8(800) 237-24-75</p>
              </div>
            </div>
          </div>
        </div>
        <div className="navigation_center">
          <div className="logo">
            <NavLink to="/" ><img src="./img/logo-svg-horizontal.png" alt="" /></NavLink>
          </div>
          <div id="nc_center">
            <div className="nc_search">
              <input type="search" id="search" disabled={searchDis} onInput={(e) => dispatch(setFilter(e.target.value))} name="search" />
              <button><img src="./img/fi_search.png" alt="" /></button>
            </div>
            <ul className="nc_links">
              <li><a href="#directory"><img src="./img/u_apps.png" alt="" /><p>Каталог</p></a></li>
              <li><NavLink to="service">Услуги</NavLink></li>
              <li><NavLink to="delivery">Доставка и оплата</NavLink></li>
              <li><NavLink to="allus">О нас</NavLink></li>
              <li><NavLink to="stock">Акции</NavLink></li>
              <li><NavLink to="blog">Блог</NavLink></li>
              <li><NavLink to="contact">Контакты</NavLink></li>
            </ul>
          </div>
          {navigation && (
            <>
              <div id="nc_center_2">
                <div className="nc_search">
                  <input type="search" id="search" disabled={searchDis} onInput={(e) => dispatch(setFilter(e.target.value))} name="search" />
                  <button><img src="./img/fi_search.png" alt="" /></button>
                </div>
                <ul className="nc_links">
                  <li><a href="#directory"><img src="./img/u_apps.png" alt="" /><p>Каталог</p></a></li>
                  <li><NavLink to="service">Услуги</NavLink></li>
                  <li><NavLink to="delivery">Доставка и оплата</NavLink></li>
                  <li><NavLink to="allus">О нас</NavLink></li>
                  <li><NavLink to="stock">Акции</NavLink></li>
                  <li><NavLink to="blog">Блог</NavLink></li>
                  <li><NavLink to="contact">Контакты</NavLink></li>
                </ul>
                <div className="ncr_divs_2">
                <NavLink to="profile">
                  <div className="ncr_div">
                    <img src="./img/fi_user.png" alt="" />
                    <p>Профиль</p>
                  </div>
                </NavLink>
                <NavLink to="cart">
                  <div className="ncr_div">
                    <span>{state.length}</span>
                    <img src="./img/fi_shopping-cart.png" alt="" />
                    <p>Корзина</p>
                  </div>
                </NavLink>
              </div>
              <button className="menuClose" type="button" onClick={NavFunc}>Close</button>
              </div>
              </>
          )}
          <div className="ncr_divs">
            <NavLink to="profile">
              <div className="ncr_div">
                <img src="./img/fi_user.png" alt="" />
                <p>Профиль</p>
              </div>
            </NavLink>
            <NavLink to="cart">
              <div className="ncr_div">
                <span>{state.length}</span>
                <img src="./img/fi_shopping-cart.png" alt="" />
                <p>Корзина</p>
              </div>
            </NavLink>
          </div>
          <div className="humburger" onClick={NavFunc}>
            <img src="./img/humburger.png" alt="humburger image" />
          </div>
        </div>

      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="directory" element={<Directory />} />
        <Route path="service" element={<Service />} />
        <Route path="delivery" element={<Delivery />} />
        <Route path="allus" element={<AllUs />} />
        <Route path="stock" element={<Stock />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="profile" element={<Profile />} />
        <Route path="cart" element={<Cart />} />
        <Route path="lateks" element={<Lateks />} />
        <Route path="folga" element={<Folga />} />
        <Route path="celebration" element={<Celebration />} />c
        <Route path="instruments" element={<Instruments />} />
        <Route path="package" element={<Package />} />
        <Route path='katalogs/:id' element={<Product />} />
      </Routes>
      <div className="main_footer">
        <ul className="nc_links">
          <li><NavLink to="/">Главная</NavLink></li>
          <li><NavLink to="service">Услуги</NavLink></li>
          <li><NavLink to="delivery">Доставка и оплата</NavLink></li>
          <li><NavLink to="allus">О нас</NavLink></li>
          <li><NavLink to="stock">Акции</NavLink></li>
          <li><NavLink to="blog">Блог</NavLink></li>
          <li><NavLink to="contact">Контакты</NavLink></li>
        </ul>
        <div className="footer_texts">
          <div className="footer_text">
            <h1>Воздушные шары из латекса</h1>
            <p>Круглые без рисунка</p>
            <p>Круглые с рисунком</p>
            <p>Для моделирования</p>
            <p>Сердца</p>
            <p>Для упаковки</p>
            <p>Линколуны</p>
          </div>
          <div className="footer_text">
            <h1>Воздушные шары из фольги</h1>
            <p>Decco Bubble</p>
            <p>3D-фигуры</p>
            <p>Шары-самодувы</p>
            <p>Оформительские без рисунка</p>
            <p>Сердца, круги, звёзды</p>
            <p>Фигурные</p>
            <p>Цифры</p>
            <p>Буквы, надписи</p>
          </div>
          <div className="footer_text">
            <h1>Товары для праздника</h1>
            <p>Посуда</p>
            <p>Свечи</p>
            <p>Хлопушки</p>
            <p>Гирлянды</p>
            <p>Фотозона</p>
            <p>Конфетти, пенопласт, серпантин</p>
            <p>Карнавальная косметика</p>
          </div>
          <div className="footer_text">
            <h1>Оборудование, инструменты</h1>
            <p>Клей для шаров</p>
            <p>Светодиодная подсветка</p>
            <p>Печать на шарах</p>
            <p>Компрессоры, насосы</p>
            <p>Полироль для шаров</p>
          </div>
          <div className="footer_text">
            <h1>Упаковка</h1>
            <p>Пакеты</p>
            <p>Коробки</p>
            <p>Банты</p>
            <p>Ленты</p>
            <p>Упаковочная бумага</p>
          </div>
        </div>
        <div className="footer_bottom">
          <h1>© 2022 ООО «Салон Сюрприз». ОГРН 39483948320. Политика обработки персональных данных</h1>
          <div className="nt_socials">
            <img src="./img/Instagram - Original.png" alt="" />
            <img src="./img/uil_whatsapp-alt.png" alt="" />
            <img src="./img/Telegram - Original.png" alt="" />
            <img src="./img/VK - Original.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;