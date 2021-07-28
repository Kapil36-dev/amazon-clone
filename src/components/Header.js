import React,{useState} from 'react'
import './header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from '../firebase/firebase';

function Header({searchitem}) {
    const [{ basket,user }, dispatch] = useStateValue();
    const [input,setinput] = useState('');
    
    const Authentication = () =>{
        if(user){
            auth.signOut();
        }
    }
    const searchinput = ()=>{
        if(!input){
        }
        else{
            const inputval= input.toLowerCase();
            searchitem(inputval);
        }
    }
    return (
        <div className='header'>
            <Link to='/'>
                <img className='header-logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='logo' />
            </Link>
            <div className="header-search">
                <input className='header-input' type="text" value={input} onChange={e =>{setinput(e.target.value)}}/>
                <SearchIcon className='search-icon' onClick ={searchinput} />
            </div>
            <div className="header-nav">
                <Link to={!user && '/login'}>
                    <div onClick={Authentication}className="header-option">
                        <span className='header-option-heading'>Hello {!user? 'Guest':user.email}</span>
                        <span className='header-option-main'>{user?'Sign Out':'Sign In' }</span>
                    </div>
                </Link>
                <div className="header-option">
                    <span className='header-option-heading'>Return</span>
                    <span className='header-option-main'> Orders</span>
                </div>
                <div className="header-option">
                    <span className='header-option-heading'>Your</span>
                    <span className='header-option-main'>Prime</span>
                </div>
            </div>
            <Link to='/checkout'>
                <div className="header-basket">
                    <ShoppingBasketIcon />
                    <span className="header-option-main  header-basketCount">{basket?.length}</span>
                </div>
            </Link>
        </div>
    );
}

export default Header
