import './FavoriteBar.scss'
import {setLike, setMoreProducts, setProducts} from "../../redux/ProductsReducer";
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import likeIcon from '../../assets/image/likeIcon.png'

function FavoriteBar({products}: any) {
    const srcImg = 'https://testbackend.nc-one.com'

    return (
        <div className="FavoriteBarContainer">
            <div className="FavoriteBar">
                <p>FAVORIVE</p>
                <div className='ProductsContainer'>
                    {products !== undefined && products.map((item: any) => {
                            if (item.like) {
                                return (<Link to={`/${item.id}`} className={'favoriteProductContainer'}>
                                    <div className='imgFavoriteProductContainer'>
                                        {
                                            item.src ?
                                                <img src={srcImg + item.src} alt={item.id}
                                                     className='imgFavoriteProduct'/> :
                                                <img src={likeIcon} alt={item.id} className='imgProduct'/>
                                        }
                                    </div>
                                    <div className={'favoritePriceBox'}>
                                        <div>
                                            <p>{item.name}</p>
                                            <p>$ {item.price}</p>
                                        </div>
                                    </div>
                                </Link>)
                            }
                        }
                    )}
                </div>
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

