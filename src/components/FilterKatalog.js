let FilterKatalog = (props) => {
    function onFilterValueChanged(e){
        props.onFilterValueSelected(e.target.value)
    }
    return (
        <div className="filterRating">
            <select name="isRating" onChange={onFilterValueChanged}>
                <option value="all">Все</option>
                <option value="popular">Популярные</option>
                <option value="sold">Много продано</option>
                <option value="new">Новые</option>
            </select>
        </div>
    ) 
}
export default FilterKatalog;