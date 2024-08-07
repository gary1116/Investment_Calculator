import {React,  useState } from 'react'
import '../ExtractDetails/ExtractDetails.css';

function ExtractDetails(props) {

    function handleChange(event){
        const {name, value} = event.target;

        if(name ==='initialInvestment'){
            props.setInitialInvestment(()=>(value));
        }else if(name==='expectedReturn'){
            props.setExpectedReturn(()=>(value));
        }else if(name==='annualInvestment'){
            props.setAnnualInvestment(()=>(value));
        }else if(name==='duration'){
            props.setDuration(()=>(value));
        }
    }

    
   

    return (
        <>
            <div className="inputBox">
                <div className="leftSection">
                    <label htmlFor="InitialInvestment"> Initial Investment :</label>
                    <input type="number" id='initialInvestment' required name='initialInvestment' onChange={handleChange} />

                    <label htmlFor="expectedReturn"> Expected Return (%):</label>
                    <input type="number" id='expectedReturn' required name='expectedReturn' onChange={handleChange}/>
                </div>
                <div className="rightSection">
                    <label htmlFor="annualInvestment"> Annual Investment :</label>
                    <input type="number" id='initialInvestment' required name='annualInvestment' onChange={handleChange}/>

                    <label htmlFor="duration">Duration (Years) :</label>
                    <input type="number" id='expectedReturn' required name='duration' onChange={handleChange}/>
                </div>
            </div>
        </>
    )
}

export default ExtractDetails
