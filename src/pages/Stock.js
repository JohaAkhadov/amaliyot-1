import React from 'react'

function Stock() {
  return (
    <div className='stock'>
      <h1 className='stock_h1'>Акции</h1>
      <div className="stock_imges">
        <div style={{backgroundImage:`url('./img/Rectangle 13.png')`,}} className="stock_img_top">
          <h1>Именниникам Скидка на все товары для праздника до 15%</h1>
        </div>
        <div className="stock_imges_center">
          <div style={{
            backgroundImage:`url('./img/Rectangle 14.png')`
          }} className="stock_img_center">
            <h1>элитные шары
              <span>со скидкой 50%</span>
            </h1>
          </div>
          <div  style={{
            backgroundImage:`url('./img/Rectangle 15.png')`
          }} className="stock_img_center">
            <h1>Новый привоз световых гирлянд
              из голландии</h1>
          </div>
        </div>
      </div>
      <div className="stock_bottom">
        <h1>Подпишитесь на email-рассылку
            <span>и первыми узнавайте о новых акциях</span>
        </h1>
        <div className="stock_input">
          <div className="si">
            <input type="email" placeholder='Email'/>
            <button>Подписаться</button>
          </div>
          <p>Нажимая «Подписаться», вы принимаете условия политики обработки персональных данных</p>
        </div>
      </div>
    </div>
  )
}

export default Stock