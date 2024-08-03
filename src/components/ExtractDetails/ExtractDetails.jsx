import React from 'react'
import '../ExtractDetails/ExtractDetails.css';

function ExtractDetails() {
    return (
        <>
            <div className="inputBox">
                <div className="leftSection">
                    <label htmlFor="InitialInvestment"> Initial Investment :</label>
                    <input type="number" id='initialInvestment' name='initialInvestment' />

                    <label htmlFor="ExpectedReturn"> Expected Return :</label>
                    <input type="number" id='expectedReturn' name='expectedReturn' />
                </div>
                <div className="rightSection">
                    <label htmlFor="InitialInvestment"> Initial Investment :</label>
                    <input type="number" id='initialInvestment' name='initialInvestment' />

                    <label htmlFor="ExpectedReturn"> Expected Return :</label>
                    <input type="number" id='expectedReturn' name='expectedReturn' />
                </div>
            </div>
        </>
    )
}

export default ExtractDetails
