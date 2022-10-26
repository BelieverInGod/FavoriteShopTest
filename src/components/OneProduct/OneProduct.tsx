import './OneProduct.scss';

import { Link } from 'react-router-dom';
import {connect} from "react-redux";
import {setLike, setProducts} from "../../redux/ProductsReducer";
import likeIcon from '../../assets/image/likeIcon.png'
import redLike from '../../assets/image/redLike.png'
import {Data} from "../../service/shopServiceApi";
import {useParams} from "react-router-dom";
import { useEffect } from 'react';


function OneProduct({products, setLike}: any) {
    const srcImg = 'https://testbackend.nc-one.com'
    const {id} = useParams()
    let arr = JSON.parse(localStorage.getItem("names") || '{}')

    useEffect (() => {
        arr = JSON.parse(localStorage.getItem("names") || '{}')
    }, [arr])

    const likeInLocal = (id: string, bool: boolean) => {
        setLike(id, bool)
        localStorage.setItem("names", JSON.stringify(products));
    }

    return (
        <div className="OneProduct">
                {arr.map((item: Data) =>
                    { if(item.id == id) {
                        return <div className={'OneProductContainer'}>
                            <div className='imgOneProductContainer' >
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
                                                 onClick={() => likeInLocal(item.id, true)}/> :
                                            <img src={redLike} className={'active-like'} alt={'redLike'} onClick={() => likeInLocal(item.id, false)}/>
                                    }
                                </div>
                            </div>
                            <div className='BackToMain'>
                                <Link to={`/`}>Back to main</Link>
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
})

export default connect(productsData, {setProducts, setLike})(OneProduct);
