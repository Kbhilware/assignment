import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem';


const Product = (props) => {

    const [proInfo, setProInfo] = useState([]);
    
    const productsApi = async (i) => {
        let url = 'https://dummyjson.com/products?limit=12';
        let fetchUrl = await fetch(url),
            urlResult = await fetchUrl.json();
        setProInfo(urlResult.products);
        
            
    }
    let percentage = (num, per) => {
        let price = Math.ceil(num / 100) * per,
            finalPrice = num - price;
        return finalPrice.toFixed(2);
    };
    useEffect(() => {
        productsApi();
    }, [])
    return (
        <>
            <div className='container'>
                <div className='row'>
                    {proInfo.map((ele, i) => {
                        return (
                        <ProductItem key={i} category={ele.category} title={ele.title ? ele.title : ''} des={ele.description ? ele.description : ''} cPath={ele.images} price={percentage(ele.price, ele.discountPercentage)} brand={ele.brand} rating={ele.rating ? ele.rating : 'rating'} stock={ele.stock} cat={ele.category}  prevCat={ele.category}/>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Product
