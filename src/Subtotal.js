import React, { useImperativeHandle } from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


function Subtotal() {


  const history =useHistory();
  const [{ basket }, dispatch] = useStateValue();
  
  return (
    <div className='subtotal'>
      <CurrencyFormat
            renderText={(value)=>(
            <>
                <p>
                    Subtotal ({basket.length} items): <strong>{value}</strong>
                </p>
                <small className='subtotal__gift'>
                    <input type="checkbox"/>
                    This order contains a gift
                </small>
            </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={'$'}
        />
        <button onClick={e=>history.push('/payment')}>Proceed to Checkout </button>
    </div>
  )
}

export default Subtotal
