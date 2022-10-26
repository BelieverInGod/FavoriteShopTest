import './OneProduct.css';

import {connect} from "react-redux";
import {setLike, setProducts} from "../../redux/ProductsReducer";
import likeIcon from '../../assets/image/likeIcon.png'
import redLike from '../../assets/image/redLike.png'
import {Data} from "../../service/shopServiceApi";


function OneProduct({products, setLike, id, setId}: any) {
    const srcImg = 'https://testbackend.nc-one.com'


    return (
        <div className="OneProduct">
                {products !== undefined && products.map((item: Data) =>
                    { if(item.id === id) {
                        return <div className={'OneProductContainer'}>
                            <div className='imgOneProductContainer' onClick={() => setId(item.id)}>
                                    <img src={srcImg + item.src} alt={item.id} className='imgOneProduct'/>
                            </div>
                            <div className={'priceOneProductBox'}>
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
                            <div className='BackToMain'>
                                <p onClick={() => setId(0)}>Back to main</p>
                            </div>
                        </div>
                    }
                    }
           
                )}
        </div>
    );
}

const productsData = (state: any) => ({
    products: state.products.products,
    like: state.products.like,
    categoriesId: state.sortBar.categories,
})

export default connect(productsData, {setProducts, setLike})(OneProduct);
