import './Products.css';
import likeIcon from '../../assets/image/likeIcon.png'
import redLike from '../../assets/image/redLike.png'


import * as React from 'react';
import {connect} from "react-redux";
import {setLike, setProducts} from "../../redux/ProductsReducer";
import {useEffect} from "react";
import {Data, GetDataResponse, shopServiceApi} from "../../service/shopServiceApi";
import {Grid} from '@mui/material';


function Products({products, setProducts, setLike, id, setId}: any) {
    const srcImg = 'https://testbackend.nc-one.com'

    useEffect(() => {
        JSON.parse(localStorage.getItem("names") || '{}')
            ?
            setProducts(JSON.parse(localStorage.getItem("names") || '{}')) :
            (async () => {
                await shopServiceApi.getProduct().then((response: GetDataResponse) => {
                    response.data.map((item: Data) => {
                        item.like = false
                    })
                    setProducts(response.data)
                    localStorage.setItem("names", JSON.stringify(response.data));
                });
            })()
    }, [id])

    const likeInLocal = (id: string, bool: boolean) => {
        setLike(id, bool)
        localStorage.setItem("names", JSON.stringify(products));
    }

    return (
        <div className="Products">
            <Grid container rowSpacing={2} columnSpacing={2} xs={12}>
                {products !== undefined && products.map((item: Data) => <Grid key={item.id} item
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
                                                 onClick={() => likeInLocal(item.id, true)}/> :
                                            <img src={redLike} className={'active-like'} alt={'redLike'}
                                                 onClick={() => likeInLocal(item.id, false)}/>
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
