import React from 'react'
import Slider from '../components/Slider'
import { NavLink } from 'react-router-dom'
import Card from '../components/Card'
import Balloons from '../components/Balloons'
import Bestsellers from '../components/Bestsellers'
import Bestsellers2 from '../components/Bestsellers2'

function Home() {
  return (
    <div className='home'>
      <Slider />
      <div className="slider_bottom">
        <div className="bottom_div">
          <img src="./img/check-ic.png" alt="" />
          <p>Доставляем по Москве и области 24/7</p>
        </div>
        <div className="bottom_div">
          <img src="./img/check-ic (1).png" alt="" />
          <p>Только сертифицированные товары</p>
        </div>
        <div className="bottom_div">
          <img src="./img/check-ic.png" alt="" />
          <p>Более 10 лет занимаемся товарами для праздника</p>
        </div>
        <div className="bottom_div">
          <img src="./img/check-ic (1).png" alt="" />
          <p>Самый большой магазин товаров для праздника в Королёве</p>
        </div>
      </div>
      <div id='directory' className="directory_products">
        <h1 className='directory_products_h1'>
          Каталог товаров
        </h1>
        <div className="product_div ">
          <img className='product_div_img' src="./img/base-pic.png" alt="" />
          <div className="productdiv_text">
            <h1>Воздушные шары из латекса</h1>
            <p>Круглые без рисунка</p>
            <p>Круглые с рисунком</p>
            <p>Для моделирования</p>
            <p>Сердца</p>
            <p>Для упаковки</p>
            <p>Линколуны</p>
          </div>
          <div className="productdiv_button">
            <NavLink to="lateks">Смотреть все</NavLink>
            <img src="./img/fi_arrow-right-circle.png" alt="" />
          </div>
        </div>
        <div className="product_div">
          <img className='product_div_img' src="./img/base-pic (1).png" alt="" />
          <div className="productdiv_text">
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
          <div className="productdiv_button">
            <NavLink to="folga">Смотреть все</NavLink>
            <img src="./img/fi_arrow-right-circle.png" alt="" />
          </div>
        </div>
        <div className="product_div">
          <img className='product_div_img' src="./img/base-pic (2).png" alt="" />
          <div className="productdiv_text">
            <h1>Товары для праздника</h1>
            <p>Посуда</p>
            <p>Свечи</p>
            <p>Хлопушки</p>
            <p>Гирлянды</p>
            <p>Фотозона</p>
            <p>Конфетти, пенопласт, серпантин</p>
            <p>Карнавальная косметика</p>
          </div>
          <div className="productdiv_button">
            <NavLink to="celebration">Смотреть все</NavLink>
            <img src="./img/fi_arrow-right-circle.png" alt="" />
          </div>
        </div>
        <div className="product_div">
          <img className='product_div_img' src="./img/base-pic (3).png" alt="" />
          <div className="productdiv_text">
            <h1>Оборудование, инструменты</h1>
            <p>Клей для шаров</p>
            <p>Светодиодная подсветка</p>
            <p>Печать на шарах</p>
            <p>Компрессоры, насосы</p>
          </div>
          <div className="productdiv_button">
            <NavLink to="instruments">Смотреть все</NavLink>
            <img src="./img/fi_arrow-right-circle.png" alt="" />
          </div>
        </div>
        <div className="product_div">
          <img className='product_div_img' src="./img/base-pic (4).png" alt="" />
          <div className="productdiv_text">
            <h1>Упаковка для праздника</h1>
            <p>Пакеты</p>
            <p>Коробки</p>
            <p>Банты</p>
            <p>Ленты</p>
            <p>Упаковочная бумага</p>
          </div>
          <div className="productdiv_button">
            <NavLink to="package">Смотреть все</NavLink>
            <img src="./img/fi_arrow-right-circle.png" alt="" />
          </div>
        </div>
      </div>
      <div className="cards">
        <div className="balloons">
          <h1 className='balloons_h1'>Надувные шары</h1>
          <Balloons />
        </div>
        <div style={{
          backgroundImage: `url('./img/Rectangle 6.png')`
        }} className="skidkadiv">
          <h1><h1>элитные шары</h1> со скидкой 50%</h1>
        </div>
        <div className="bestsellers">
          <h1 className='bestsellers_h1'>Бестселлеры</h1>
          <Bestsellers />
        </div>
        <div className="bestsellers">
          <h1 className='bestsellers_h1'>Скидки недели</h1>
          <Bestsellers2 />
        </div>

      </div>
      <div className="howbuy">
        <h1 className='howbuy_h1'>Как приобрести товары в нашем интернет-магазине</h1>
        <div className="howbuy_divs">
          <div className="howbuy_div">
            <img src="./img/num.png" alt="" />
            <div className="howbuy_div_text">
              <h1>Выбираете товары</h1>
              <p>Наберите товар в корзину и перейдите к оформлению. Или сделайте заказ по телефону. Вы всегда можете позвонить нам и проконсультироваться.</p>
            </div>
          </div>
          <div className="howbuy_div">
            <img src="./img/num (1).png" alt="" />
            <div className="howbuy_div_text">
              <h1>Оплачиваете заказ</h1>
              <p>Мы принимаем все способы оплаты. Наличными заказ можно оплатить в нашем магазине: Королёв, Лесная 12. Если нужно выставить счёт на юридическое лицо, позвоните или напишите нам. Сделаем всё оперативно.</p>
            </div>
          </div>
          <div className="howbuy_div">
            <img src="./img/num (2).png" alt="" />
            <div className="howbuy_div_text">
              <h1>Получаете</h1>
              <p>Доставляем своими курьерами по г. Королёв. Можно оформить доставку Почты России или СДЭК. Забрать лично можно в нашем магазине в Королёве.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="uslugiservice">
        <h1 className='uslugiservice_h1'>Услуги и сервис в магазине</h1>
        <div className="usligiservice_imges">
          <div style={{
            backgroundImage: `url("./img/Rectangle 3.png")`
          }} className="uslugiservice_img">
            <h1>Надуем воздушные шары к празднику</h1>
            <button>Подробнее <img src="./img/fi_arrow-right-circle (1).png" alt="" /></button>
          </div>
          <div style={{

            backgroundImage: `url("./img/Rectangle 3 (1).png")`
          }} className="uslugiservice_img">
            <h1>Сдаём баллоны для надувания в аренду</h1>
            <button>Подробнее <img src="./img/fi_arrow-right-circle (1).png" alt="" /></button>
          </div>
        </div>
      </div>
      <section className='sections'>
        <h1 className='section_h1'>Помогаем делать праздники красивыми 10 лет</h1>
        <section className='section'>
          <div className="section_text">
            <h2>Товары для праздника</h2>
            <p>Равным образом, внедрение современных методик позволяет выполнить важные задания по разработке первоочередных требований. Ясность нашей позиции очевидна: высокотехнологичная концепция общественного уклада требует анализа укрепления моральных ценностей! <span>Кстати,  сделанные на базе интернет-аналитики выводы в равной степени предоставлены сами себе. Но постоянное информационно-пропагандистское обеспечение нашей деятельности требует анализа поэтапного и последовательного развития общества. С другой стороны, новая модель организационной деятельности обеспечивает широкому кругу (специалистов) участие в формировании укрепления моральных ценностей.</span></p>
          </div>
          <div className="section_img">
            <img src="./img/Vector (2).png" alt="" />
          </div>
        </section>
        <section className='section'>
          <div className="section_img">
            <img src="./img/blob-pic.png" alt="" />
          </div>
          <div className="section_text">
            <h2>Аэродизайн и клуб</h2>
            <p>Имеется спорная точка зрения, гласящая примерно следующее: активно развивающиеся страны третьего мира, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут превращены в посмешище, хотя само их существование приносит несомненную пользу обществу! Но разбавленное изрядной долей эмпатии, рациональное мышление, в своём классическом представлении, допускает внедрение благоприятных перспектив. <span>Идейные соображения высшего порядка, а также граница обучения кадров прекрасно подходит для реализации благоприятных перспектив. Банальные, но неопровержимые выводы, а также непосредственные участники технического прогресса будут своевременно верифицированы. Сложно сказать, почему ключевые особенности структуры проекта могут быть в равной степени предоставлены сами себе.</span></p>
          </div>
        </section>
        <section className='section'>
          <div className="section_text">
            <h2>Российские и международные фестивали</h2>
            <p>Стремящиеся вытеснить традиционное производство, нанотехнологии являются только методом политического участия и описаны максимально подробно. Равным образом, реализация намеченных плановых заданий является качественно новой ступенью соответствующих условий активизации. Банальные, но неопровержимые выводы, а также тщательные исследования конкурентов призваны к ответу. <span>И нет сомнений, что независимые государства рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок. Являясь всего лишь частью общей картины, явные признаки победы институционализации являются только методом политического участия и смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности. Но консультация с широким активом играет важную роль в формировании системы обучения кадров, соответствующей насущным потребностям.</span></p>
          </div>
          <div className="section_img">
            <img src="./img/blob-pic (1).png" alt="" />
          </div>
        </section>
      </section>
      <div className="location">
        <div className="loc_text">
          <h1>Наш магазин в королёве</h1>
          <p>Приходите в гости. У нас несколько тысяч интересных и качественных товаров для отличного праздника!</p>
          <div className="loc_divs">
            <div className="loc_div">
              <img src="./img/MapPin.png" alt="" />
              <span>Королёв, Лесная 12</span>
            </div>
            <div className="loc_div">
              <img src="./img/Phone.png" alt="" />
              <span>+7(903) 014-87-25</span>
            </div>
            <div className="loc_div">
              <img src="./img/EnvelopeSimple.png" alt="" />
              <span>contact@salon-surprise.ru</span>
            </div>
          </div>
        </div>
        <iframe className='location_image' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8937.23046659612!2d37.874421131974714!3d55.94404006527799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b52dc5b08eaa6f%3A0xde0db7f22acfe66c!2z0YPQuy4g0JvQtdGB0L3QsNGPLCAxMiwg0JrQvtGA0L7Qu9GR0LIsINCc0L7RgdC60L7QstGB0LrQsNGPINC-0LHQuy4sINCg0L7RgdGB0LjRjywgMTQxMDYy!5e0!3m2!1sru!2s!4v1706680604666!5m2!1sru!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}

export default Home