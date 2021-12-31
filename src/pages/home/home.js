import React from 'react'

import NavBar from '../../components/Navbar'
import './home.css';
import products from '../../data'
import Productcard from '../../components/products/products';
import './home.css'

function Homepage() {
    return (
        <>
            < NavBar />
            <div className='products_wrapper'>
            {products.map((product)=>(
                <Productcard key={product.id} product={product}/>
            ))}
            </div>
        </>
    )
}

export default Homepage
