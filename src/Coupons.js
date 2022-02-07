import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './container/Header';
const Coupons = () => {
    const [getData, setGetData] = useState([]);
    const submitHandler = async (e) => {
        e.preventDefault();
        fetch('http://127.0.0.1:8000/coupons')
            .then(response => response.json())
            .then(data => setGetData(data.coupons));
    }
    return <div>
        <Header />
        <div style={{ margin: "2px" }}>
            <center>
                <h3>Get Coupons</h3>
                <Link to='/coupons' className="btn btn-warning p-1">Coupons</Link>{" "}
                {/* <Link to='/' class="btn btn-primary">Home</Link>{" "} */}
                <Link to='/validate' className="btn btn-primary p-1">Validate</Link>{" "}
                <Link to='/create' className="btn btn-primary p-1">Create</Link>
            </center>
        </div>

        <center>
            <form className='form-horizantal p-2' onSubmit={submitHandler} autoComplete="off">
                <div className='form-group'>
                    <div className='col-sm-offset-2 col-sm-10 p-2'>
                        <input type="submit" className='btn btn-success' value="submit"></input>
                    </div>
                </div>
            </form>
        </center>
        <div >
            {getData &&
                Object.keys(getData).map(key =>
                    <div className='border'>
                        <p>Coupon Name : {getData[key].id}</p>
                        <p>Start Date : {getData[key].start_date}</p>
                        <p>Expiry Date : {getData[key].expiry_date}</p>
                        <p>Discount : {getData[key].discount}</p>
                        <p>Type : {getData[key].type}</p>
                        <p>Min Amount : {getData[key].min_amount}</p>
                    </div>)}
        </div>

    </div>;
};

export default Coupons;
