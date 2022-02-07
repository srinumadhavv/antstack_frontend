import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import Header from './container/Header';
const Home = () => {
    const apis = ["create coupon", "validate coupon", "get coupons"];
    const inActiveBtn = 'btn btn-outline-primary m-1';
    const activeBtn = 'btn btn-outline-primary m-1 active'
    const [api_selected, setApi] = React.useState(null);
    return <div>
        <Header />
        <center>
        <h3>HOME PAGE</h3>
        </center>
        <div class="card-group m-2">
            
            <div class="card m-2" style={{border:"1px solid Green", background:"#C1DEAE"}}>
                    <div class="card-body m-2">
                        <h5 class="card-title">React App</h5>
                        <p class="card-text">This is an Application Built using React for Front end .</p>
                        <p class="card-text">Note : This is an Application Created By A Python Backend Developer who doesnt know React </p>
                    </div>
            </div>
            <div class="card m-2" style={{border:"1px solid Red",background:"#FDEBF7"}}>
                    <div class="card-body m-2">
                        <h5 class="card-title">FastApi</h5>
                        <p class="card-text">This App uses FastApi for Backend .</p>
                        <p class="card-text">To Test the complete Api functionalities Please Use Postman with proper Error messages .</p>
                        <p class="card-text">Please use http://127.0.0.1:8000/docs For Api Docs.</p>
                    </div>
            </div>
            <div class="card m-2" style={{border:"1px solid Brown",background:"#FBF8F1"}}>
                    <div class="card-body m-2">
                        <h5 class="card-title">Postgres</h5>
                        <p class="card-text">This App uses Postgres for A Database Storage .</p>
                        <p class="card-text">Uses Alembic For Database migration .</p>
                    </div>
            </div>
        </div>
        <div class="card-group m-2">
            
            <div class="card m-2" style={{border:"1px solid Brown",background:"#FBF8F1"}}>
                    <div class="card-body m-2">
                        <h5 class="card-title">1. Create Coupon Api</h5>
                        <p class="card-text">SUMMARY : Creates a coupon with appropriate params and returns the coupon created.</p>
                        <p class="card-text">Takes Args: </p>
                        <p class="card-text">Id : String Ex: ANTSTACK10 </p>
                        <p class="card-text">StartDate : Integer Ex:1644166304 </p>
                        <p class="card-text">ExpiryDate : Integer Ex:1654166304</p>
                        <p class="card-text">MinAmt : Integer Ex: 1000</p>
                        <p class="card-text">Discount : Integer Ex:20</p>
                        <p class="card-text">Type : string Ex: percentage</p>
                        <p class="card-text">Click on Create Button to test the Api</p>
                    </div>
            </div>
            <div class="card m-2" style={{border:"1px solid Green",background:"#C1DEAE"}}>
                    <div class="card-body m-2">
                        <h5 class="card-title">2. Get Coupons</h5>
                        <p class="card-text">SUMMARY : Fetches and Lists All the Active and Expired Coupons</p>
                        <p class="card-text">Click on Coupons Button to test the Api</p>
                    </div>
            </div>
            <div class="card m-2" style={{border:"1px solid Red",background:"#FDEBF7"}}>
                    <div class="card-body m-2">
                        <h5 class="card-title">3. Checkout Api</h5>
                        <p class="card-text">SUMMARY : Validates Coupon based on Question Parameters</p>
                        <p class="card-text">Takes Args: </p>
                        <p class="card-text">Coupoun : String Ex: ANTSTACK10 </p>
                        <p class="card-text">amount : Integer Ex:300 </p>
                        <p class="card-text">Click on Create Validate to test the Api</p>
                    </div>
            </div>
        </div>
        <center>
            <Link to='/' class="btn btn-warning">Home</Link>{" "}
            <Link to='/coupons' class="btn btn-primary">Coupons</Link>{" "}
            <Link to='/validate' class="btn btn-primary">Validate</Link>{" "}
            <Link to='/create' class="btn btn-primary">Create</Link>

        </center>
        <center>
        <h5 style={{padding:"5px",color:"#96CEB4"}}>Made With Love By SrinuMadhav Vysyaraju.</h5>
        </center>
    </div>;
};

export default Home;
