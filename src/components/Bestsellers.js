import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/action';

function Bestsellers() {
    const [bestsellers, setBestsellers] = useState([
        {
            id: "12314167jfj1",
            img: "./img/pic (12).png",
            price: 160,
            title: "Воздушные шары с надписями, набор 5 штук",
            article: "артикул 249202376",
            rating: 'all',
            color: "blue"
        },
        {
            id: "12314167jfj2",
            img: "./img/pic (6).png",
            price: 157,
            title: "Воздушные шары 'ЩЕНЯЧИЙ ПАТРУЛЬ' С Днем рождения! 7 шт. 30 см.",
            article: "артикул 249202376",
            rating: 'all',
            color: "red"
        },
        {
            id: "12314167jfj3",
            img: "./img/pic (7).png",
            price: 100,
            title: "Воздушные шары с надписями, набор 5 штук",
            article: "артикул 249202376",
            rating: 'all',
            color: "purple"
        },
        {
            id: "12314167jfj4",
            img: "./img/pic (8).png",
            price: 120,
            title: "Набор воздушных шаров МОСШАР серебряные - 10ш, 30 см",
            article: "артикул 249202376",
            rating: 'all',
            color: "green"
        },
        {
            id: "12314167jfj5",
            img: "./img/pic (8).png",
            price: 200,
            title: "Воздушные шарики, Paterra, 30 см, круглые, разноцветные, без рисунка, в упаковке 30 шт.",
            article: "артикул 249202376",
            rating: 'all',
            color: "yellow"
        },
        {
            id: "12314167jfj6",
            img: "./img/pic (9).png",
            price: 135,
            title: "Воздушные шары с надписями, набор 5 штук",
            article: "артикул 249202376",
            rating: 'all',
            color: "black"
        },
        {
            id: "12314167jfj7",
            img: "./img/pic (10).png",
            price: 189,
            title: "Воздушные шары с надписями, набор 5 штук",
            article: "артикул 249202376",
            rating: 'all',
            color: "blue"
        },
        {
            id: "12314167jfj8",
            img: "./img/pic (11).png",
            price: 132,
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
            <div className="bestsellers_top balloon">
                {bestsellers.map((itm) => (
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

export default Bestsellers;