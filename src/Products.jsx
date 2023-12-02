import React from 'react'
import Product from './Product'

export default function Products() {


    const products = [
        {id:1,title:'TURKEY OMLETTE', desc:'Fluffy eggs filled with tender turkey, sautéed bell peppers, onions, and ripe tomatoes, all generously folded around melted cheese.'},
        {id:2, title:'BEEF SANDWICH', desc:'Tender, thinly sliced roast beef piled high on fresh artisan bread, accompanied by your choice of toppings and sauces.'},
        {id:3,title:'CEASER SALAD', desc:'Crisp romaine lettuce, tangy Caesar dressing, shaved Parmesan cheese, and crunchy croutons.'},        
        {id:4,title:'VEGETABLES PIZZA', desc:'A medley of colorful, garden-fresh vegetables atop a perfectly baked crust, generously covered with our signature tomato sauce and melted cheese.'}

    ];

    return (
    <>
            <div className="row py-5">
                
                {products.map((product) => {
                    return <Product {...product} key={product.id} />
                })}

            </div>    

    </>
    )
}
