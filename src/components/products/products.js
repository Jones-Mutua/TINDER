import {AiOutlineLike} from 'react-icons/ai';
import {BiDislike} from 'react-icons/bi';
import './products.css'

const Productcard = ({product}) => {
  return (
    <>
      <div className="product_wrapper">
            <div>
                <img className="productcard_img" src={product.image} alt=""/>
                <div className="icons"><a href='#k'> {< AiOutlineLike/>}LOVE IT </a> 
                <a href='#w'> <span>{<BiDislike/>} NOPE IT</span></a></div>

            </div>
      </div>
    </>
  );
};

export default Productcard;
