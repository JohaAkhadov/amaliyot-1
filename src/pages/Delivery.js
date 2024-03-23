import React from 'react'

function Delivery() {
  return (
    <div className='delivery'>
      <div className="delivery_top">
        <h1>Доставка и оплата</h1>
        <h2>Способы получения товара</h2>
        <div className="dedlivery_divs">
          <div className="delivery_div">
            <img src="./img/Storefront.png" alt="" />
            <p>Самовывоз из магазина по адресу: <br /> г. Королёв, Лесная 12</p>
          </div>
          <div className="delivery_div">
            <img src="./img/Truck (1).png" alt="" />
            <p>Доставка курьером по Москве<br /> и области</p>
          </div>
          <div className="delivery_div">
            <img src="./img/Package.png" alt="" />
            <p>Отправка Почтой России <br />в любой регион</p>
          </div>
        </div>
      </div>
      <div className="delivery_bottom">
        <h1 className='del_bot_h1'>Способы оплаты</h1>
        <div className="delivery_bottom_top">
          <div className="delivery_text">
            <p>Принимаем наличный и безналичный расчёт. Для современного мира укрепление и развитие внутренней структуры требует определения и уточнения соответствующих условий активизации. Как уже неоднократно упомянуто, некоторые особенности внутренней политики лишь добавляют фракционных разногласий и в равной степени предоставлены сами себе!</p>
            <p>Но базовые сценарии поведения пользователей преданы социально-демократической анафеме. Предварительные выводы неутешительны: семантический разбор внешних противодействий обеспечивает актуальность укрепления моральных ценностей.</p>
          </div>
          <div className="delivery_imges">
            <img src="./img/Frame 114.png" alt="" />
            <img src="./img/Frame 117.png" alt="" />
            <img src="./img/Frame 115.png" alt="" />
          </div>
        </div>
        <div className="delivery_main_bottom">
          <h1>Реквизиты организации</h1>
          <div className="delivery_text_divs">
            <div className="delivery_text_div">
              <div><p>Полное наименование организации</p>
              <span>Общество с ограниченной ответственностью «Сюрприз»</span></div>
              <div className="line"></div>
            </div>
            <div className="delivery_text_div">
              <div><p>Юридический адрес</p>
              <span>123456, г. Королёв, ул. Советская, д. 25</span></div>
              <div className="line"></div>
            </div>
            <div className="delivery_text_div">
              <div><p>Почтовый адрес	</p>
              <span>123456, г. Королёв, ул. Советская, д. 25</span></div>
              <div className="line"></div>
            </div>
            <div className="delivery_text_div">
              <div><p>ИНН</p>
              <span>7712345678</span></div>
              <div className="line"></div>
            </div>
            <div className="delivery_text_div">
              <div><p>КПП</p>
              <span>779101001</span></div>
              <div className="line"></div>
            </div>
            <div className="delivery_text_div">
              <div><p>БИК</p>
              <span>044521234</span></div>
              <div className="line"></div>
            </div>
            <div className="delivery_text_div">
              <div><p>Р/С	</p>
              <span>40702810123450101230 в Московский банк ПАО Сбербанк г. Москва</span></div>
              <div className="line"></div>
            </div>
            <div className="delivery_text_div">
              <div><p>К/С	</p>
              <span>30101234500000000225</span></div>
              <div className="line"></div>
            </div>
            <div className="delivery_text_div">
              <div><p>ОКПО</p>
              <span>45748578475</span></div>
              <div className="line"></div>
            </div>
            <div className="delivery_text_div">
              <div><p>ОКАТО</p>
              <span>87654321000</span></div>
              <div className="line"></div>
            </div>
            <div className="delivery_text_div">
              <div><p>ОКВЭД (основной)	</p>
              <span>18.15</span></div>
              <div className="line"></div>
            </div>
            <div className="delivery_text_div">
              <div><p>ОГРН</p>
              <span>1047712345678</span></div>
              <div className="line"></div>
            </div>
            <div className="delivery_text_div">
              <div><p>Генеральный директор	</p>
              <span>Петров Сергей Петрович</span></div>
              <div className="line"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Delivery