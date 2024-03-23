import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom';
import { disableRed } from '../redux/reducer/searchSlice';
import { useDispatch, useSelector } from 'react-redux';
import NotFound from './NotFound';
// import Pagination from "./Pagination";

function Katalogs({ img }) {
    const [cards, setCards] = useState([]);
    const [error, setError] = useState('');
    const [selectedFilters, setSelectedFilters] = useState({});
    const [filteredProducts, setFilteredProducts] = useState([]);
    const location = useLocation();
    const dispatch = useDispatch();
    const { filter } = useSelector(state => state.searchSlice);
    useEffect(() => {
        axios
            .get('http://localhost:5000/category')
            .then((result) => {
                setCards(result.data);
                setFilteredProducts(result.data);
                dispatch(disableRed(location.pathname));
            })
            .catch((err) => setError(err.message));
    }, [setCards, setFilteredProducts, disableRed, dispatch]);

    // Hozirgi page raqami
    const [currentPage, setCurrentPage] = useState(1);

    // Har bir page-da nechtadan mahsulot bo'lishi
    const [perPage, setPerPage] = useState(6);

    // Hozirgi mahsulotlarni ko'rsatish
    const indexOfLastProduct = currentPage * perPage;
    const indexOfFirstProduct = indexOfLastProduct - perPage;
    // setFilteredProducts(pageProducts)
    
    // Previous va Next funksiyalari
    function handleClick(functionType) {
        if (functionType === "prev" && currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
        else if (functionType === "next" && currentPage <= pageNumbers.length) {
            setCurrentPage(currentPage + 1);
        }
    };
    
    
    const handleFilterChange = (event) => {
        const selectedValue = event.target.value;
        const selectedFilterName = event.target.name;
        let updatedFilters = { ...selectedFilters };
        if (selectedValue === '') {
            delete updatedFilters[selectedFilterName];
        } else {
            updatedFilters[selectedFilterName] = selectedValue;
        }
        
        setSelectedFilters(updatedFilters);
        
        let filtered = [...cards];
        
        Object.keys(updatedFilters).forEach((filterName) => {
            const filterValue = updatedFilters[filterName];
            
            if (filterName === 'minPrice') {
                filtered = filtered.filter((card) => {
                    return card.price >= parseInt(filterValue);
                });
            } else if (filterName === 'maxPrice') {
                filtered = filtered.filter((card) => {
                    return card.price <= parseInt(filterValue);
                });
            } else {
                filtered = filtered.filter((card) => {
                    return card[filterName] === filterValue;
                });
            }
        });
        setFilteredProducts(filtered);
    };
    
    const pageProducts = filteredProducts?.slice(indexOfFirstProduct, indexOfLastProduct);
    const pageNumbers = [];
    for (let i = 1; i < Math.ceil(cards.length / perPage); i++) {
        pageNumbers.push(i);
    };
    return (
        <div className='katalog'>
            <img className='katalogImage' src={img} alt='' />
            <div className="katalog_top_divs">
                <div className="katalog_top_div">
                    <p>Все шары из латекса</p>
                </div>
                <div className="katalog_top_div">
                    <p>Круглые без рисунка</p>
                </div>
                <div className="katalog_top_div">
                    <p>Круглые с рисунком</p>
                </div>
                <div className="katalog_top_div">
                    <p>Для моделирования</p>
                </div>
                <div className="katalog_top_div">
                    <p>ВСердца</p>
                </div>
                <div className="katalog_top_div">
                    <p>Для упаковки</p>
                </div>
                <div className="katalog_top_div">
                    <p>Линколуны</p>
                </div>
            </div>
            <div className='filterDivs'>
                <select name='rating' onChange={handleFilterChange}>
                    <option value=''>Все</option>
                    <option value='popular'>Популярные</option>
                    <option value='sold'>Много продано</option>
                    <option value='new'>Новые</option>
                </select>

                <div className="filterInputs">
                    <p>Цена:</p>
                    <label><p>от</p>
                        <input
                            type='number'
                            placeholder='Минимальная цена'
                            onChange={handleFilterChange}
                            name='minPrice'
                        />
                    </label>
                    <label><p>до</p>
                        <input
                            type='number'
                            placeholder='Максимальная цена'
                            onChange={handleFilterChange}
                            name='maxPrice'
                            />
                    </label>
                </div>

                <select name='color' onChange={handleFilterChange}>
                    <option value=''>Все</option>
                    <option value='red'>Красный</option>
                    <option value='white'>Белый</option>
                    <option value='pink'>Розовый</option>
                    <option value='blue'>Синий</option>
                    <option value='purple'>Фиолетовый</option>
                    <option value='yellow'>Желтый</option>
                </select>
                <select name='rating' onChange={handleFilterChange}>
                    <option value=''>Все</option>
                    <option value='popular'>Осталось</option>
                    <option value='sold'>Не осталось</option>
                </select>
            </div>
            <div className='CategoryCards'>
                {pageProducts.length === 0 ? <NotFound /> : pageProducts.filter(item => item.title?.toLowerCase().includes(filter.toLowerCase())).map((itm, ind) => (
                    <div className='CategoryCard' key={itm.id}>
                        <img className='CategoryCardImg' src={itm.img} alt='' />
                        <h1>{itm.price}</h1>
                        <h2>{itm.title}</h2>
                        <p>{itm.article}</p>
                        <button>
                            <NavLink to={`/katalogs/${itm.id}`}>
                                <img src='./img/fi_shopping-cart (2).png' alt='' />
                                <p>В корзину</p>
                            </NavLink>
                        </button>
                    </div>
                ))}
            </div>
            <nav>
                <div className="numberDiv"> 
                    <div onClick={() => handleClick("prev")} className="blogNumber">Previous</div>
                    {
                        pageNumbers.map((number, index) => (
                            <div onClick={() => setCurrentPage(number)} key={index} className="blogNumber">{number}</div>
                        ))
                    }
                    <div onClick={() => handleClick("next")} className="blogNumber">Next</div>
                </div>
            </nav>
        </div>

    );
}

export default Katalogs;