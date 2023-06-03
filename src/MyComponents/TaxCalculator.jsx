import { useState } from "react";

const TaxCalculator = ()=>{
  const [salaryIncome, setSalaryIncome] = useState();
  const [SD, setSD] = useState();
  const [exemptAllowances, setExemptAllowances] = useState();
  const [incomeInterest, setIncomeInterest] = useState();
  const [IHomeLaon, setIHomeLaon] = useState();
  const [RentalIncome, setRentalIncome] = useState();
  const [ILoan, setILoan] = useState();
  const [IDigital, setIDigital] = useState();
  const [otherIncome, setotherIncome] = useState();

  const [sec80C, setSec80C] = useState();
  const [sec80TTA, setSec80TTA] = useState();
  const [sec80D, setSec80D] = useState();
  const [sec80G, setSec80G] = useState();
  const [sec80E, setSec80E] = useState();
  const [sec80EEA, setSec80EEA] = useState();
  const [sec80CCD, setSec80CCD] = useState();

  const[page1, setPage1] = useState('showpage');
  const[page2, setPage2] = useState('page');
  const[page3, setPage3] = useState('page');
  const[oldTaxIncome, setOldTaxIncome] = useState();
  const[newTaxIncome, setNewTaxIncome] = useState();
  const[oldFinalTax, setOldFinalTax] = useState();
  const[newFinalTax, setNewFinalTax] = useState();
  function newcalculatorIncomeTax(income){
      let tax= 0;
      if(income <= 300000){
          tax = 0;
      }else if(income > 300000 && income <= 600000){
          tax = (income - 300000) *0.05;
      }else if(income > 600000 && income <= 900000){
          tax = (300000) * 0.05 + (income - 600000) * 0.10
      }else if(income > 900000 && income <= 1200000){
          tax = (300000) * 0.05 + (300000) * 0.10 + (income - 900000) * 0.15
      }else if(income > 1200000 && income <= 1500000){
          tax = (300000) * 0.05 + (300000) * 0.10 + ( 300000) * 0.15 + (income - 1200000) * 0.20
      }else{
          tax = (300000 * 0.05) + (300000 * 0.10) +  (300000 * 0.15) + (300000 * 0.20) + (income - 1500000) * 0.30
      }
      return tax;
  }

  function oldcalculatorIncomeTax(income){
    let tax= 0;
    if(income <= 250000){
        tax = 0;
    }else if(income > 250000 && income <= 500000){
        tax = (income - 250000) *0.05;
    }else if(income > 500000 && income <= 1000000){
        tax = (250000) * 0.05 + (income - 500000) * 0.20;
    }else{
        tax = (250000 * 0.05) + (500000 * 0.20) + (income - 1000000) * 0.30
    }
    return tax;
}
// var grossTaxableIncome = grossTotal - sec80c-sec80d-sec80tta;


  const TaxCalculate = (e)=>{
    console.log(parseFloat(salaryIncome)||0);
    const grossAmount = (parseFloat(salaryIncome)||0)+(parseFloat(incomeInterest)||0)+
    (parseFloat(RentalIncome)||0)+(parseFloat(otherIncome)||0);

    const oldDed = 50000+(parseFloat(exemptAllowances)||0)+(parseFloat(IHomeLaon)||0)+(parseFloat(ILoan)||0)+(parseFloat(RentalIncome)||0)*0.3+(parseFloat(sec80TTA)||0)+
                    (parseFloat(sec80C)||0)+(parseFloat(sec80G)||0)+(parseFloat(sec80D)||0)+(parseFloat(sec80E)||0)+(parseFloat(sec80EEA)||0)+(parseFloat(sec80CCD)||0);
    const newDed = 50000+(parseFloat(RentalIncome)||0)*0.3+(parseFloat(ILoan)||0);
    const newTaxableIncome = grossAmount-newDed;
    const oldTaxableIncome = grossAmount-oldDed;

    console.log(oldDed);
    console.log(newDed);
    if(oldTaxableIncome<0) oldTaxableIncome=0;
    if(newTaxableIncome<0) newTaxableIncome=0;
    setOldTaxIncome(Math.round(oldTaxableIncome));
    setNewTaxIncome(Math.round(newTaxableIncome));
    console.log(oldTaxIncome);
    console.log(newTaxIncome)
    let newtax = newcalculatorIncomeTax(newTaxableIncome)+(parseFloat(IDigital)||0)*0.3;
    newtax = newtax*1.04;
   
      if(grossAmount<=750000){
        newtax=0;
      }
      let oldTax = (oldcalculatorIncomeTax(oldTaxableIncome)+(parseFloat(IDigital)||0)*0.3)*1.04;
      if(grossAmount<=550000){
        oldTax=0;
      }
      setNewFinalTax(Math.round(newtax));
      setOldFinalTax(Math.round(oldTax));

      setPage3('showPage');
      setPage2('page');
      setPage1('page');

  }
    return (
<>
        <section className="section">
        <div className="container">
          <div className="content">
            <h1>Tax calculator</h1>
            <p>
               

            </p>
          </div>

          
  
          <div className="columns">
            <div className="column is-three-quarters">
              <div className="card">
                <div className="card-content">
                  <form id="loan-form">

                  <div className="pages">
                    
                    <div  className= {page1}>
                      <div className="level">
                        <div className="level-left is-marginless">
                          <div className="level-item">
                            <p className="number">1</p>
                            Income from salary (Rs)
                          </div>
                        </div>
    
                        <div className="level-right">
                          <div className="level-item">
                            <div className="field">
                              <div className="control has-icons-left ">
                                <input className="input" value={salaryIncome} onChange={(e)=>{setSalaryIncome(e.target.value);console.log(e.target.value)}} id="annual_gross_salary" type="number"  />
                                <span className="icon is-small is-left">
                                  {/* <i className="fa fa-rupee-sign"></i> */}
                                  ₹
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="level">
                      <div className="level-left is-marginless">
                        <div className="level-item">
                          <p className="number">2</p>
                          Exempt Allowances
                        </div>
                      </div>
  
                      <div className="level-right">
                        <div className="level-item">
                          <div className="field">
                            <div className="control has-icons-left ">
                              <input className="input" id="annual_gross_salary" value={exemptAllowances} onChange={(e)=>setExemptAllowances(e.target.value)} type="number"  />
                              <span className="icon is-small is-left">
                                {/* <i className="fa fa-rupee-sign"></i> */}
                                ₹
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="level">
                      <div className="level-left is-marginless">
                        <div className="level-item">
                          <p className="number">3</p>
                          Income from Interest
                        </div>
                      </div>
  
                      <div className="level-right">
                        <div className="level-item">
                          <div className="field">
                            <div className="control has-icons-left ">
                              <input className="input" id="annual_gross_salary" value={incomeInterest} onChange={(e)=>setIncomeInterest(e.target.value)} type="number"  />
                              <span className="icon is-small is-left">
                                {/* <i className="fa fa-rupee-sign"></i> */}
                                ₹
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="level">
                      <div className="level-left is-marginless">
                        <div className="level-item">
                          <p className="number">4</p>
                          Interest Paid on Home Loan
                        </div>
                      </div>
  
                      <div className="level-right">
                        <div className="level-item">
                          <div className="field">
                            <div className="control has-icons-left ">
                              <input className="input" id="annual_gross_salary" value={IHomeLaon} onChange={(e)=>setIHomeLaon(e.target.value)} type="number" />
                              <span className="icon is-small is-left">
                                {/* <i className="fa fa-rupee-sign"></i> */}
                                ₹
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="level">
                      <div className="level-left is-marginless">
                        <div className="level-item">
                          <p className="number">5</p>
                          Rental Income Received
                        </div>
                      </div>
  
                      <div className="level-right">
                        <div className="level-item">
                          <div className="field">
                            <div className="control has-icons-left ">
                              <input className="input" id="annual_gross_salary" value={RentalIncome} onChange={(e)=>setRentalIncome(e.target.value)} type="number" />
                              <span className="icon is-small is-left">
                                {/* <i className="fa fa-rupee-sign"></i> */}
                                ₹
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="level">
                      <div className="level-left is-marginless">
                        <div className="level-item">
                          <p className="number">6</p>
                          Interest Paid on Loan
                        </div>
                      </div>
  
                      <div className="level-right">
                        <div className="level-item">
                          <div className="field">
                            <div className="control has-icons-left ">
                              <input className="input" id="annual_gross_salary" value={ILoan} onChange={(e)=>setILoan(e.target.value)} type="number" />
                              <span className="icon is-small is-left">
                                {/* <i className="fa fa-rupee-sign"></i> */}
                                ₹
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="level">
                      <div className="level-left is-marginless">
                        <div className="level-item">
                          <p className="number">7</p>
                          Income from Digital Assets
                        </div>
                      </div>
  
                      <div className="level-right">
                        <div className="level-item">
                          <div className="field">
                            <div className="control has-icons-left ">
                              <input className="input" id="annual_gross_salary" value={IDigital} onChange={(e)=>setIDigital(e.target.value)} type="number" />
                              <span className="icon is-small is-left">
                                {/* <i className="fa fa-rupee-sign"></i> */}
                                ₹
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="level">
                      <div className="level-left is-marginless">
                        <div className="level-item">
                          <p className="number">8</p>
                          Other Income
                        </div>
                      </div>
  
                      <div className="level-right">
                        <div className="level-item">
                          <div className="field">
                            <div className="control has-icons-left ">
                              <input className="input" id="annual_gross_salary" value={otherIncome} onChange={(e)=>setotherIncome(e.target.value)} type="number" />
                              <span className="icon is-small is-left">
                                {/* <i className="fa fa-rupee-sign"></i> */}
                                ₹
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="control">
                      <button
                        className="button is-large is-fullwidth is-primary is-outlined" type="button" 
                        onClick={()=>{setPage2('showPage');setPage1('page');setPage3('page')}}
                      >
                       Next
                      </button>
                    </div>
                  
                  

                    

                  
                  </div>


                  <div  className= {page2}>
                      <div className="level">
                        <div className="level-left is-marginless">
                          <div className="level-item">
                            <p className="number">1</p>
                            Basic Deductions - 80C
                          </div>
                        </div>
    
                        <div className="level-right">
                          <div className="level-item">
                            <div className="field">
                              <div className="control has-icons-left ">
                                <input className="input" id="annual_gross_salary" value={sec80C} onChange={(e)=>setSec80C(e.target.value)} type="number"  />
                                <span className="icon is-small is-left">
                                  {/* <i className="fa fa-rupee-sign"></i> */}
                                  ₹
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="level">
                      <div className="level-left is-marginless">
                        <div className="level-item">
                          <p className="number">2</p>
                          Interest from Deposits - 80TTA 
                        </div>
                      </div>
  
                      <div className="level-right">
                        <div className="level-item">
                          <div className="field">
                            <div className="control has-icons-left ">
                              <input className="input" id="annual_gross_salary" value={sec80TTA} onChange={(e)=>setSec80TTA(e.target.value)} type="number"  />
                              <span className="icon is-small is-left">
                                {/* <i className="fa fa-rupee-sign"></i> */}
                                ₹
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="level">
                      <div className="level-left is-marginless">
                        <div className="level-item">
                          <p className="number">3</p>
                          Medical Insurance - 80D
                        </div>
                      </div>
  
                      <div className="level-right">
                        <div className="level-item">
                          <div className="field">
                            <div className="control has-icons-left ">
                              <input className="input" id="annual_gross_salary" value={sec80D} onChange={(e)=>setSec80D(e.target.value)} type="number"  />
                              <span className="icon is-small is-left">
                                {/* <i className="fa fa-rupee-sign"></i> */}
                                ₹
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="level">
                      <div className="level-left is-marginless">
                        <div className="level-item">
                          <p className="number">4</p>
                          Donations to Charity - 80G
                        </div>
                      </div>
  
                      <div className="level-right">
                        <div className="level-item">
                          <div className="field">
                            <div className="control has-icons-left ">
                              <input className="input" id="annual_gross_salary" value={sec80G} onChange={(e)=>setSec80G(e.target.value)} type="number" />
                              <span className="icon is-small is-left">
                                {/* <i className="fa fa-rupee-sign"></i> */}
                                ₹
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="level">
                      <div className="level-left is-marginless">
                        <div className="level-item">
                          <p className="number">5</p>
                          Interest on Educational Loan - 80E
                        </div>
                      </div>
  
                      <div className="level-right">
                        <div className="level-item">
                          <div className="field">
                            <div className="control has-icons-left ">
                              <input className="input" id="annual_gross_salary" value={sec80E} onChange={(e)=>setSec80E(e.target.value)} type="number" />
                              <span className="icon is-small is-left">
                                {/* <i className="fa fa-rupee-sign"></i> */}
                                ₹
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="level">
                      <div className="level-left is-marginless">
                        <div className="level-item">
                          <p className="number">6</p>
                          Interest on Housing Loan - 80EEA
                        </div>
                      </div>
  
                      <div className="level-right">
                        <div className="level-item">
                          <div className="field">
                            <div className="control has-icons-left ">
                              <input className="input" id="annual_gross_salary" value={sec80EEA} onChange={(e)=>setSec80EEA(e.target.value)} type="number" />
                              <span className="icon is-small is-left">
                                {/* <i className="fa fa-rupee-sign"></i> */}
                                ₹
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="level">
                      <div className="level-left is-marginless">
                        <div className="level-item">
                          <p className="number">7</p>
                          Employee's contribution to NPS - 80CCD
                        </div>
                      </div>
  
                      <div className="level-right">
                        <div className="level-item">
                          <div className="field">
                            <div className="control has-icons-left ">
                              <input className="input" id="annual_gross_salary" value={sec80CCD} onChange={(e)=>setSec80CCD(e.target.value)} type="number" />
                              <span className="icon is-small is-left">
                                {/* <i className="fa fa-rupee-sign"></i> */}
                                ₹
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="control">
                      <button
                        className="button is-large is-fullwidth is-primary is-outlined" type="button" onClick={TaxCalculate}
                      >
                        Calculate
                      </button>
                    </div>

                 

                    </div>

                  


                  <div  className= {page3}>
                    <section className="section"> 
      
                      <div className="columns is-multiline">
        
                        <div className="column is-12-tablet is-6-desktop is-5-widescreen">
                            <div className="notification is-info has-text">
                              <p id="oldincome" className="title is-1">₹ {oldTaxIncome}</p>
                              <p className="subtitle is-4">TAXABLE INCOME (OLD)</p>
                            </div>
                          </div>
      
                          <div className="column is-12-tablet is-6-desktop is-5-widescreen">
                            <div className="notification is-link has-text">
                              <p id="newincome" className="title is-1">₹{newTaxIncome}</p>
                              <p className="subtitle is-4">TAXABLE INCOME (NEW)</p>
                            </div>
                          </div>
      
                      </div>
                    </section>

                    <section className="section"> 
                        
                      <div className="columns is-multiline">
                        
                        <div className="column is-12-tablet is-6-desktop is-5-widescreen">
                          <div className="notification is-primary has-text">
                            <p id="OLDTAX" className="title is-1">₹{oldFinalTax}</p>
                            <p className="subtitle is-4">Tax acc. to old system</p>
                          </div>
                        </div>
                  
                        <div className="column is-12-tablet is-6-desktop is-6-widescreen">
                          <div className="notification is-primary has-text">
                            <p id="NEWTAX" className="title is-1">₹{newFinalTax}</p>
                            <p className="subtitle is-4">Tax acc. to new system</p>
                          </div>
                        </div>
                    
                      </div>
                    </section>

                      <div className="control">
                          <button
                            className="button is-large is-fullwidth is-primary is-outlined" 
                            onClick={()=>{setPage1('showPage');setPage2('page');setPage3('page')}}
                          >
                              Calculate Again
                          </button>
                        </div>           
                                          
                    </div>

                  </div>
                  
                </form>
              </div>
            </div>
          </div>
        </div>
        </div>
      
    </section>

      
    </>

    );
};

export default TaxCalculator;