import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/action';

function Balloons() {
    const [balloons, setBalloons] = useState([
        {
            id: "12314167jfh8",
            img: './img/base-pic (5).png',
            price: 167,
            title: "Воздушные шары 'ХРОМ ассорти' 10 шт. 25 см.",
            article: "артикул 249202376",
            rating: 'all',
            color: "red"
        },
        {
            id: "12314167jfh1",
            img: './img/pic.png',
            price: 167,
            title: "Воздушные шары 'ЩЕНЯЧИЙ ПАТРУЛЬ' С Днем рождения! 7 шт. 30 см.",
            article: "артикул 249202376",
            rating: 'all',
            color: "red"
        },
        {
            id: "12314167jfh2",
            img: './img/pic (1).png',
            price: 167,
            title: "Воздушные шары 'ЧЁРНАЯ пастель/ЗОЛОТО хром' 20 шт. 25 см.",
            article: "артикул 249202376",
            rating: 'all',
            color: "red"
        },
        {
            id: "12314167jfh3",
            img: './img/pic (2).png',
            price: 167,
            title: "Набор воздушных шаров МОСШАР серебряные - 10ш, 30 см",
            article: "артикул 249202376",
            rating: 'all',
            color: "red"
        },
        {
            id: "12314167jfh4",
            img: './img/base-pic (6).png',
            price: 167,
            title: "Воздушные шарики, Paterra, 30 см, круглые, разноцветные, без рисунка, в упаковке 30 шт.",
            article: "артикул 249202376",
            rating: 'all',
            color: "red"
        },
        {
            id: "12314167jfh5",
            img: './img/pic (3).png',
            price: 167,
            title: "Воздушные шары с надписями, набор 5 штук",
            article: "артикул 249202376",
            rating: 'all',
            color: "red"
        },
        {
            id: "12314167jfh6",
            img: './img/pic (4).png',
            price: 167,
            title: "Воздушные шары 'ЧЁРНЫЙ / КРАСНАЯ пастель' 20 шт. 25 см.",
            article: "артикул 249202376",
            rating: 'all',
            color: "red"
        },
        {
            id: "12314167jfh7",
            img: './img/pic (5).png',
            price: 167,
            title: "Шар латексный 12' Страна Карнавалия 'Любимому папе' 5 шт.",
            article: "артикул 249202376",
            rating: 'all',
            color: "red"
        },
    ])
    const dispatch = useDispatch();
    const cart = useSelector((state) => state); // Access the cart state from Redux

    const handleAddToCart = (item) => {
        dispatch(addItem(item));
    };

    return (
        <>
            <div className="balloons_top balloon">
                {balloons.map((itm) => (
                    <div className="card" key={itm.title}>
                        <img className="card_img" src={itm.img} alt="" />
                        <p>{itm.price}₽</p>
                        <h5>{itm.title}</h5>
                        <h6>{itm.article}</h6>
                        <button onClick={() => handleAddToCart(itm)}>
                            <img src="./img/fi_shopping-cart (1).png" alt="" />
                            <span>В корзину</span>
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Balloons;