export function ProductList(){
    const products = [
        {
            id:1, name:"Laptop", price:343
        },{
            id:2, name:"Phone", price:3433
        },{
            id:3, name:"Watch", price:888
        },{
            id:4, name:"Headphones", price:33
        }
    ]
    return(
        <div>
            <h2>Our Products</h2>
            {products.
                filter((product)=>{
                    return product.price > 500;
                }).map((product)=>{
                return(
                    <div key={product.id}>
                        <h3>{product.name}</h3>
                        <p>Price: ${product.price}</p>
                    </div>
                )
            })}
        </div>
    )
}