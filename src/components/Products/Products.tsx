import './Products.css';
import likeIcon from '../../assets/image/likeIcon.png'
import redLike from '../../assets/image/redLike.png'


import * as React from 'react';
import {connect} from "react-redux";
import {setLike, setMoreProducts, setProducts} from "../../redux/ProductsReducer";
import {useEffect, useState} from "react";
import {shopServiceApi} from "../../service/shopServiceApi";
import {Grid} from '@mui/material';



function Products({products, setProducts, setLike, id, setId}: any) {
    const srcImg = 'https://testbackend.nc-one.com'

    useEffect(() => {
        (async () => {
            const res = await shopServiceApi.getProduct().then((response: any) => {
                response.data.map((item: any) => {
                    item.like = false
                })
                setProducts(response.data)
            });
        })()
    }, [])

    return (
        <div className="Products">
            <Grid container rowSpacing={2} columnSpacing={2} xs={12}>
                {products !== undefined && products.map((item: any) => <Grid key={item.id} item
                                                                             xs={3}>
                        <div className={'productContainer'}>
                            <div className='imgProductContainer' onClick={() => setId(item.id)}>
                                {
                                    item.src ?
                                    <img src={srcImg + item.src} alt={item.id} className='imgProduct'/> : 
                                    <img src={likeIcon} alt={item.id} className='imgProduct'/>
                                }
                            </div>
                            <div className={'priceBox'}>
                                <div>
                                    <p>{item.name}</p>
                                    <p>$ {item.price}</p>
                                </div>
                                <div>
                                    {
                                        !item.like ?
                                            <img src={likeIcon} alt={'likeIcon'}
                                                 onClick={() => setLike(item.id, true)}/> :
                                            <img src={redLike} className={'active-like'} alt={'redLike'} onClick={() => setLike(item.id, false)}/>
                                    }
                                </div>
                            </div>
                        </div>
                    </Grid>
                )}
            </Grid>
        </div>
    );
}

const productsData = (state: any) => ({
    products: state.products.products,
    like: state.products.like,
    categoriesId: state.sortBar.categories,
})

export default connect(productsData, {setProducts, setLike})(Products);
