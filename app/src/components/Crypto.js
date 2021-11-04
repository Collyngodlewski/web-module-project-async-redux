import axios from 'axios';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchStart, fetchSuccess, getData } from './../actions';


const Crypto = (props) => {
     const { data, isFetching, error, dispatch} = props;

    useEffect(()=> {
        getData();
    }, []);


    if (error) {
        return <h2>We got an error: {error}</h2>;
        }
    
        if (isFetching) {
        return <h2>Fetching Crypto Data!</h2>;
        }

        

        const handleClick = () => {
          props.getData();
            }
        
        
    return (
        <>
        <div>
            <h2>Crypto here!</h2>
            <h2> Crypto: {data.symbol} </h2>
            <h2> Price Change: {data.priceChange} </h2>
            <h2> Price Change Percent: {data.priceChangePercent} </h2>
            </div>
            <button onClick={handleClick}>Get Crypto data</button>
        </>
    )
    
    } 

    const mapStateToProps = (state) => {
        return{
            data: state.data,
            isFetching: state.isFetching,
            error: state.error,

        }
    }

    export default connect(mapStateToProps, { getData })(Crypto);