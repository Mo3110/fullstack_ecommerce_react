import { getCartLength } from '../helpers';
import useGlobalStore from '../store';
import Icon from './icons';
import Logo from './icons/logo';
import Text from './text';
import { Link } from "react-router-dom"

const Header = () => {

  const { cart } = useGlobalStore()
  const itemsInCart = getCartLength(cart)
  return (
    <header className="p-[22px] flex items-center justify-between rounded-[26px] my-[18px] mx-[50px] bg-[#f5f5f5] backdrop-blur-[10px]">
      <Link to={"/"}>
        <Logo />
      </Link>
      <div className="flex flex-row items-center space-x-[38px]">
        <Link to={"/shop"}>
          <Text variant="caption-one">Shop</Text>
        </Link>
        <Link to={"/about"}>
          <Text variant="caption-one">About</Text>
        </Link>
        <Link to={"/cart"} className='relative'>
        <Icon name="cart-icon" />
        <span className='absolute -right-2 -top-2 bg-white rounded-full
        w-[18px] h-[18px] flex items-center justify-center'>
          {itemsInCart}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
