import React from 'react';
import '../outputData/OutputData.css';

function OutputData(props) {
 
  
   // Convert expected return percentage to a decimal
   const r = props.expectedReturn / 100;

   // Arrays to hold calculated values
   const investmentValues = [];
   const interestPerYear = [];
   const totalInterest = [];
   const investedCapital = [];
 
   let cumulativeInterest = 0;
 
   // Calculation for each year
   for (let n = 1; n <= props.duration; n++) {
     // Investment Value at the end of year n
     const investmentValue = props.initialInvestment * Math.pow(1 + r, n) + 
                             props.annualInvestment * (Math.pow(1 + r, n) - 1) / r;
     
     // Invested Capital at the end of year n
     const investedCap = Number(props.initialInvestment) + Number(props.annualInvestment) * n;
 
     // Interest earned in year n
     const interest = investmentValue-investedCap;
 
     // Cumulative Interest up to year n
     cumulativeInterest += interest;
 
     // Push the calculated values to the arrays
     investmentValues.push(Number(investmentValue).toFixed(0));
    interestPerYear.push(Number(interest).toFixed(0));
    totalInterest.push(Number(cumulativeInterest).toFixed(0));
    investedCapital.push(Number(investedCap).toFixed(0));
   }
 

   // Render the table with the calculated values
   return (
     <div>
       <table className='DataList'>
         <thead>
             <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th> 
             </tr>
         </thead>
         <tbody>
           {investmentValues.map((value, index) => (
             <tr key={index}>
               <td>{index + 1}</td>
               <td>{investmentValues[index]}</td>
               <td>{interestPerYear[index]}</td>
               <td>{totalInterest[index]}</td>
               <td>{investedCapital[index]}</td>
             </tr>
           ))}
         </tbody>
       </table>
     </div>
   );
 }
 
 export default OutputData;
