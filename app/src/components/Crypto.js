import axios from 'axios';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchStart, fetchSuccess, getCrypto } from './../actions';


const Crypto = ({ crypto, isFetching, error, dispatch}) =>{

    useEffect(()=> {
        dispatch(getCrypto());
    }, []);


    if (error) {
        return <h2>We got an error: {error}</h2>;
        }
    
        if (isFetching) {
        return <h2>Fetching Crypto Data!</h2>;
        }

        

        const handleClick = () => {
            dispatch(getCrypto());
            }
        
        
    return (
        <>
        <div>
            <h2>Crypto here!</h2>
            <h2>{crypto.symbol}</h2>
            </div>
            <button onClick={handleClick}>Get Crypto data</button>
        </>
    )
    
    } 

    const mapStateToProps = state => {
        return{
            crypto: state.crypto,
            isFetching: state.isFetching,
            error: state.error,

        }
    }

    export default connect(mapStateToProps)(Crypto);