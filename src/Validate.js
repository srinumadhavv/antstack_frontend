import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Header from './container/Header';
const Validate = () => {
    const[data,setData] = useState({
        amount:"",
        coupon:""
    });
    
    const [getData,setGetData]= useState({});
    const {amount,coupon} = {...data};
    const changeHandler =e =>{
        setData({...data,[e.target.name]:e.target.value});
    }
    const submitHandler = async(e) =>{
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        fetch('http://127.0.0.1:8000/checkout/', requestOptions)
        .then(async response => {
            const isJson = response.headers.get('content-type')?.includes('application/json');
            const data = isJson && await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                console.log(error);
                return Promise.reject(error);
            }
            else{
                setGetData(data);
                console.log(data);
            }
            // this.setState({ postId: data.id })
            
        })
        .catch(error => {
            this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
        });
        setData({
            amount:"",
            coupon:""
        })
        
    }
  return <div>
      <Header/>
      <div>
          <center>
          <h2 style={{"textAlign":"center"}}>Checkout Product</h2><br/>
          <form className='form-horizantal p-2' onSubmit = {submitHandler} autoComplete="off">
                <div className='form-group'>
                    <label className='control-label col-sm-2'>Amount</label>
                    <div className='col-sm-4'>
                        <input type = "text"
                        className='form-control' placeholder='Amount'
                        name="amount" value={amount} onChange={changeHandler}/>
                    </div>
                </div>
                <div className='form-group'>
                    <label className='control-label col-sm-2'>Coupon</label>
                    <div className='col-sm-4'>
                        <input type = "text"
                        className='form-control' placeholder='Coupon'
                        name="coupon" value={coupon} onChange={changeHandler}/>
                    </div>
                </div>

                <div className='form-group'>
                    <div className='col-sm-offset-2 col-sm-10 p-2'>
                    <input type="submit" className='btn btn-success' value ="submit"></input>
                    </div>
                </div>
          </form>
          </center>
      </div>
      <div>
          {getData && 
            <div className='border'>
                <p>Amount: {getData.total_amount}</p>
                <p>Discount: {getData.discount}</p>
            </div>
          }
      </div>
      <center>
          <h3>Checkout product</h3>
          <Link to='/validate' className="btn btn-warning">Validate</Link>{" "}
          {/* <Link to='/' class="btn btn-primary">Home</Link>{" "} */}
          <Link to='/coupons' className="btn btn-primary">Coupons</Link>{" "}
          <Link to='/create' className="btn btn-primary">Create</Link>
      </center>

  </div>;
};

export default Validate;
