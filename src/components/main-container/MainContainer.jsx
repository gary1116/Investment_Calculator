import React, { useState } from 'react'
import '../main-container/MainContainer.css';
import ExtractDetails from '../ExtractDetails/ExtractDetails';
import OutputData from '../outputData/OutputData';

function MainContainer() {

  const [initialInvestment , setInitialInvestment]=useState(undefined);
  const [expectedReturn, setExpectedReturn] = useState(undefined);
  const [annualInvestment,setAnnualInvestment]=useState(undefined);
  const [duration, setDuration] = useState(undefined);

  return (
    <>
      <div className="mainContent">
      <ExtractDetails setInitialInvestment={setInitialInvestment} setExpectedReturn={setExpectedReturn} setAnnualInvestment={setAnnualInvestment} setDuration={setDuration}/>
      {(initialInvestment && expectedReturn && annualInvestment && duration)===undefined || duration <= 0  || (initialInvestment && expectedReturn && annualInvestment && duration)  < 0 ? <><p>Please fill all the values above</p> <span style={ {color: 'white'} }>all values must be above 0</span></>:<OutputData initialInvestment={initialInvestment} annualInvestment={annualInvestment} expectedReturn={expectedReturn} duration={duration} />}
      
      </div>
    </>
  )
}

export default MainContainer
