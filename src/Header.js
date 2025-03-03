import React from 'react'
import './Header.css';
import ReactDOM from 'react-dom'                                                                        
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
function Header() {
  
  
  const[{basket,user},dispatch]=useStateValue();
  
  const userName = user ? user.email.split('@')[0] : 'Guest';
  const handleAuthentication=()=>{
    if(user){
      auth.signOut();
    }
  }

  return (
    <div className='header'>
    <Link to='/'>
      <img 
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
    </Link>
      <div className='header__search'>
          <input className='header__searchInput'type='text'/>
          <FontAwesomeIcon icon={faMagnifyingGlass} className='header__searchIcon'/>
      </div>
      
      <div className='header__nav'>
        <Link to={ !user && '/login' }>
          <div onClick={handleAuthentication}
          className='header__option'>
            <span className='header__optionLineOne'>Hello {userName}</span>
            <span className='header__optionLineTwo'>{user? "Sign Out":"Sign In"}</span>
          </div>
        </Link>
        

        <Link to='/orders'>

        <div className='header__option'>
          <span className='header__optionLineOne'>Returns</span>
          <span className='header__optionLineTwo'>& Orders</span>
        </div>
        </Link>

        <div className='header__option'>
          <span className='header__optionLineOne'>Your</span>
          <span className='header__optionLineTwo'>Prime</span>
        </div>
        <Link to='/checkout'>
          <div className='header__optionBasket'>
            <FontAwesomeIcon icon={faBasketShopping} />
            <span className='header__optionLineTwo header__basketCount'>{basket.length}</span>
          </div>
        </Link>
      </div>

      
    
    </div>
  )
}

export default Header
