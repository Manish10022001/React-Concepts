//props
export function Product({title, price, inStock, category}){
    return(
        <div>
            <h3>{title}</h3>
            <p>Price:${price}</p>
            <p>In Stock: {inStock?"yes":"no"}</p>
            <p>Categories: {category.join(", ")}</p>
        </div>
    )
}