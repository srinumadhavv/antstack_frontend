import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Header from './container/Header';
const Create = () => {
    const[data,setData] = useState({
        "id": "",
        "start_date": "",
        "expiry_date": "",
        "type": "",
        "discount": "",
        "min_amount": ""
    });
    const [getData,setGetData]= useState({});
    const {id,start_date,expiry_date,type,discount,min_amount} = {...data};
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
    fetch('http://127.0.0.1:8000/coupons/create', requestOptions)
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
        "id": "",
        "start_date": "",
        "expiry_date": "",
        "type": "",
        "discount": "",
        "min_amount": ""
    })
    
}
  return <div>
      <Header/>
      <div>
          <center>
          <h2 style={{"textAlign":"center"}}>Create coupon</h2><br/>
          <form className='form-horizantal p-2' onSubmit = {submitHandler} autoComplete="off">
                <div className='form-group'>
                    <label className='control-label col-sm-2'>Coupon Name</label>
                    <div className='col-sm-4'>
                        <input type = "text"
                        className='form-control' placeholder='coupon name'
                        name="id" value={id} onChange={changeHandler}/>
                    </div>
                </div>
                <div className='form-group'>
                    <label className='control-label col-sm-2'>Start Date</label>
                    <div className='col-sm-4'>
                        <input type = "text"
                        className='form-control' placeholder='epoch timestamp'
                        name="start_date" value={start_date} onChange={changeHandler}/>
                    </div>
                </div>
                <div className='form-group'>
                    <label className='control-label col-sm-2'>Expiry Date</label>
                    <div className='col-sm-4'>
                        <input type = "text"
                        className='form-control' placeholder='epoch timestamp'
                        name="expiry_date" value={expiry_date} onChange={changeHandler}/>
                    </div>
                </div>
                <div className='form-group'>
                    <label className='control-label col-sm-2'>Coupon Type</label>
                    <div className='col-sm-4'>
                        <input type = "text"
                        className='form-control' placeholder='type'
                        name="type" value={type} onChange={changeHandler}/>
                    </div>
                </div>
                <div className='form-group'>
                    <label className='control-label col-sm-2'>Discount</label>
                    <div className='col-sm-4'>
                        <input type = "text"
                        className='form-control' placeholder='discount'
                        name="discount" value={discount} onChange={changeHandler}/>
                    </div>
                </div>
                <div className='form-group'>
                    <label className='control-label col-sm-2'>Minimum Amount</label>
                    <div className='col-sm-4'>
                        <input type = "text"
                        className='form-control' placeholder='type'
                        name="min_amount" value={min_amount} onChange={changeHandler}/>
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
                <p>id: {getData.id}</p>
                <p>Discount: {getData.discount}</p>
                <p>Expiry Date: {getData.expiry_date}</p>
                <p>Min Amount: {getData.min_amount}</p>
            </div>
          }
      </div>
      <center>
          <h3>create coupon</h3>
          <Link to='/create' class="btn btn-warning">Create</Link>{" "}
          {/* <Link to='/' class="btn btn-primary">Home</Link>{" "} */}
          <Link to='/coupons' class="btn btn-primary">Coupons</Link>{" "}
          <Link to='/validate' class="btn btn-primary">Validate</Link>
      </center>
  </div>;
};

export default Create;
