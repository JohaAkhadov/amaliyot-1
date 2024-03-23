import React from 'react'

function Contact() {
  return (
    <div className='contact'>
      <div className="contact_main">
        <div className="contact_text">
          <h1>Контакты</h1>
          <p className='ct_paragraph'>Приходите в гости. У нас несколько тысяч интересных и качественных товаров для отличного праздника!</p>
          <div className="contact_divs">
            <div className="contact_div">
              <img src="./img/MapPin (1).png" alt="" />
              <p>Королёв, Лесная 12</p>
            </div>
            <div className="contact_div">
              <img src="./img/Phone (1).png" alt="" />
              <p>8(800) 237-24-75</p>
            </div>
            <div className="contact_div">
              <img src="./img/Phone (1).png" alt="" />
              <p>+7(903) 014-87-25</p>
            </div>
            <div className="contact_div">
              <img src="./img/EnvelopeSimple (1).png" alt="" />
              <p>contact@salon-surprise.ru</p>
            </div>
          </div>
          <div className="contact_socials">
            <div className="contact_social">
              <img src="./img/Instagram - Original (1).png" alt="" />
              <p>Instagram</p>
            </div>
            <div className="contact_social">
              <img src="./img/VK - Original (1).png" alt="" />
              <p>ВКонтакте</p>
            </div>
            <div className="contact_social">
              <img src="./img/uil_whatsapp-alt (1).png" alt="" />
              <p>WhatsApp</p>
            </div>
            <div className="contact_social">
              <img src="./img/Telegram - Original (1).png" alt="" />
              <p>Telegram</p>
            </div>
          </div>
        </div>
        <iframe className='location_image' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8937.23046659612!2d37.874421131974714!3d55.94404006527799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b52dc5b08eaa6f%3A0xde0db7f22acfe66c!2z0YPQuy4g0JvQtdGB0L3QsNGPLCAxMiwg0JrQvtGA0L7Qu9GR0LIsINCc0L7RgdC60L7QstGB0LrQsNGPINC-0LHQuy4sINCg0L7RgdGB0LjRjywgMTQxMDYy!5e0!3m2!1sru!2s!4v1706680604666!5m2!1sru!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
  )
}

export default Contact