import React, {useEffect} from 'react';
import './FavoriteBar.css'
import {shopServiceApi} from "../../service/shopServiceApi";
import {setLike, setMoreProducts, setProducts} from "../../redux/ProductsReducer";
import {connect} from "react-redux";

function FavoriteBar({ setProducts, setLike, products}: any) {
    const srcImg = 'https://testbackend.nc-one.com'

    return (
        <div className="FavoriteBarContainer">
            <div className="FavoriteBar">
                <p>FAVORIVE</p>
                {products !== undefined && products.map((item: any) => {
                    if(item.like) {
                        return(<div className={'favoriteProductContainer'}>
                            <div className='imgFavoriteProductContainer'>
                                <img src={srcImg + item.src} alt={item.id} className='imgFavoriteProduct'/>
                            </div>
                            <div className={'favoritePriceBox'}>
                                <div>
                                    <p>{item.name}</p>
                                    <p>$ {item.price}</p>
                                </div>
                            </div>
                        </div>)
                    }
                }
                )}
            </div>
        </div>
        
    );
}

const productsData = (state: any) => ({
    products: state.products.products,
    like: state.products.like,
    categoriesId: state.sortBar.categories,
})

export default connect(productsData, {setProducts, setLike})(FavoriteBar);

