import React from 'react'

function Service() {
  return (
    <div className='service'>
      <div className="service_top">
        <h1 className='service_top_h1'>Услуги и сервис в магазине</h1>
        <section className="service_section1">
          <h1>Надуем воздушные шары к празднику</h1>
          <div className="s1_div">
            <div className="service_s1text">
              <p>Высокое качество позиционных исследований обеспечивает актуальность новых принципов формирования материально-технической и кадровой базы. А также многие известные личности заблокированы в рамках своих собственных рациональных ограничений. В рамках спецификации современных стандартов, предприниматели в сети интернет, превозмогая сложившуюся непростую экономическую ситуацию, ограничены исключительно образом мышления. Элементы политического процесса объявлены нарушающими общечеловеческие нормы этики и морали.</p>
              <p>Каждый из нас понимает очевидную вещь: постоянное информационно-пропагандистское обеспечение нашей деятельности предоставляет широкие возможности для форм воздействия. Высокое качество позиционных исследований, а также свежий взгляд на привычные вещи - безусловно открывает новые горизонты для модели развития.</p>
            </div>
            <img src="./img/Vector (3).png" alt="" />
          </div>
          <div className="ser_s1_divs">
            <div className="ser_s1_div">
              <img src="./img/Frame 112 (1).png" alt="" />
              <p>Любое количество</p>
            </div>
            <div className="ser_s1_div">
              <img src="./img/Truck.png" alt="" />
              <p>Доставим в нужное время</p>
            </div>
            <div className="ser_s1_div">
              <img src="./img/ShieldCheck.png" alt="" />
              <p>Гарантия на полёт 3 дня</p>
            </div>
            <div className="ser_s1_div">
              <img src="./img/Intersect.png" alt="" />
              <p>Украсим пространство</p>
            </div>
          </div>
        </section>
        <div className="zayavka">
          <h1>Оставьте заявку на услугу. <h1>Перезвоним, чтобы обсудить детали</h1></h1>
          <div className="zayavka_div">
            <div className="zayavka_input">
              <input type="text" placeholder='Имя' />
              <input type="text" placeholder='Номер телефона' />
              <button>Отправить</button>
            </div>
            <p>Нажимая «Отправить», вы принимаете условия политики обработки персональных данных</p>
          </div>
        </div>
      </div>
      <div style={{
        backgroundColor: '#F1F1F8'
      }} className="service_top">
        <section className="service_section1">
          <h1>Сдадим баллоны для надувания в аренду</h1>
          <div className="s1_div">
            <div className="service_s1text">
              <p>Равным образом, сложившаяся структура организации создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса стандартных подходов. И нет сомнений, что действия представителей оппозиции, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут преданы социально-демократической анафеме.</p>
              <p>Предварительные выводы неутешительны: глубокий уровень погружения играет определяющее значение для поэтапного и последовательного развития общества. Повседневная практика показывает, что синтетическое тестирование требует от нас анализа существующих финансовых и административных условий.</p>
            </div>
            <img src="./img/Vector (4).png" alt="" />
          </div>
          <div className="ser_s1_divs">
            <h1 className='ser_s1_div_p'>Какие баллоны у нас есть</h1>
            <div style={{ background: 'white' }} className="ser_s1_div">
              <img src="./img/BatteryFull.png" alt="" />
              <p>На 100 шаров</p>
            </div>
            <div style={{ background: 'white' }} className="ser_s1_div">
              <img src="./img/BatteryFull (1).png" alt="" />
              <p>На 50 шаров</p>
            </div>
            <div style={{ background: 'white' }} className="ser_s1_div">
              <img src="./img/BatteryFull (2).png" alt="" />
              <p>На 25 шаров</p>
            </div>
            <div style={{ background: 'white' }} className="ser_s1_div">
              <img src="./img/BatteryFull (3).png" alt="" />
              <p>УНа 15 шаров</p>
            </div>
          </div>
        </section>
        <div style={{background:`linear-gradient(280deg, #081A1B 1.66%, #102B33 88.54%)`}} className="zayavka">
          <h1>Оставьте заявку на услугу. <h1>Перезвоним, чтобы обсудить детали</h1></h1>
          <div className="zayavka_div">
            <div className="zayavka_input">
              <input type="text" placeholder='Имя' />
              <input type="text" placeholder='Номер телефона' />
              <button>Отправить</button>
            </div>
            <p>Нажимая «Отправить», вы принимаете условия политики обработки персональных данных</p>
          </div>
        </div>
      </div>
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

export default Service