import React, { useEffect, useState } from "react";
// import { Link } from 'react-router-dom';
import img from './Images/frntimg.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../App.css';
import SingleQuestion from "./SingleQuestion";
import data from './data';

export default function Body() {
    const [questions, setQuestions] = useState(data);

    useEffect(() => {
        Aos.init({
            duration: 2000
        });
    }, []);

    return (
        <>
{/* 
            <img src='./images/moneyfinance-1.jpg' alt="Front" height="900px" width="100%" /> */}
            <div className="Intropara">
                <div className="introContent">
                    <h1 className="introHead">Get the best bank & finance Service <span className="introHead2" >that is right for you and your company</span></h1>
                   
                </div>
                <img src="./images/pngchat.png" alt="" />
                
            </div>

            <div className="card">
                <div className="leftCard">
                    <h1 data-aos="zoom-in-right" data-aos-duration="800" className="cardhead">What is a Bank?</h1>
                    <div data-aos="fade-right" data-aos-duration="2000" className="carddesc">
                        A bank is a financial institution licensed to receive deposits and make loans. Banks may also provide financial services such as wealth management, currency exchange, and safe deposit boxes. There are several different kinds of banks including retail banks, commercial or corporate banks, and investment banks. In most countries, banks are regulated by the national government or central bank.
                    </div>
                </div>
                <div className="rightCard">
                    <img className="rimage" src="./images/bank.png" alt="" />
                </div>
                
            </div>
            <div className="card ">
                <div className="leftCard">
                    <img className="limage" src="./images/regulation-icon.jpg" alt="" />
                </div>
                <div className="rightCard">
                    <h1 data-aos="zoom-in-left" data-aos-duration="800" className="cardhead">How Are Banks Regulated?</h1>
                    <div data-aos="fade-left" data-aos-duration="2000" className="carddesc">
                        National banks are regulated by the Office of the Comptroller of the Currency (OCC). OCC regulations primarily cover bank capital levels, asset quality, and liquidity. As noted above, banks with FDIC insurance are additionally regulated by the FDIC.
                        The Dodd-Frank Wall Street Reform and Consumer Protection Act was passed in 2010 with the intention of reducing risks in the U.S. financial system following the financial crisis. Under this act, large banks are assessed on having sufficient capital to continue operating under challenging economic conditions. This annual assessment is referred to as a stress test.3
                    </div>
                </div>
                
                
            </div>
            <div className="card">
                <div className="leftCard">
                    <h1 data-aos="zoom-in-right" data-aos-duration="800" className="cardhead">How Do I Know My Money Is Safe in a Bank?</h1>
                    <div data-aos="fade-right" data-aos-duration="2000" className="carddesc">
                        The Federal Deposit Insurance Corporation (FDIC) is an independent agency created by Congress to maintain stability and public confidence in the U.S. financial system. The FDIC insures deposits; supervises and examines banks for safety and consumer protection. The standard insurance amount is $250,000 per depositor, per insured bank, for each account ownership category. You don't have to purchase this insurance—if you open a deposit in an FDIC-insured bank, you are automatically covered. This site can help you find FDIC-insured banks and branches.
                    </div>
                </div>
                <div className="rightCard">
                    <img className="rimage" src="./images/security.png" alt="" />
                </div>
                
            </div>
            <div className="card">
                <div className="leftCard cright">
                    <h1 data-aos="zoom-in-left" data-aos-duration="800" className="cardhead">What Other Factors Go Into Choosing a Bank?</h1>
                    <div data-aos="fade-left" data-aos-duration="2000" className="carddesc">
                        Bank size is another consideration. Large retail banks are often well-known, big-name banks and have locations throughout the U.S., which is convenient if you travel often for work or vacation. You would have easier access to your funds when you're away and may be able to avoid foreign ATM fees.
                        Otherwise, you might find that a smaller bank would offer more personalized customer service and the products you prefer. A community bank, for example, takes deposits and lends locally, which could offer a more personalized banking relationship.
                        Choose a convenient location if you are choosing a bank with a brick-and-mortar location. If you have a financial emergency, you don't want to have to travel a long distance to get cash.
                        See if the bank you are choosing offers other services such as credit cards, loans, and safe deposit boxes. Some banks also offer smartphone apps, which can be useful.
                        Check the fees associated with the accounts you want to open. Banks charge interest on loans as well as monthly maintenance fees, overdraft fees, and wire transfer fees. Some large banks are moving to end overdraft fees in 2022, so that could be an important consideration
                    </div>
                </div>
                
            </div>



            <div className="cfull">
                <h1>Types of Banks</h1>
                <div className="line"></div>
            </div>

            <details className="cfull cborder">
                <summary>Retail banks</summary>
               <p className="detailcFull"> Retail banks deal specifically with retail consumers, though some global financial services companies contain both retail and commercial banking divisions. These banks offer services to the general public and are also called personal or general banking institutions. Retail banks provide services such as checking and savings accounts, loan and mortgage services, financing for automobiles, and short-term loans such as overdraft protection. Many larger retail banks may also offer their customers credit card and foreign currency exchange services. Larger retail banks also often cater to high-net-worth individuals with specialty services such as private banking and wealth management. Examples of retail banks include TD Bank and Citibank.</p>
            </details>
            <details className="cfull cborder">
                <summary>Commercial or corporate banks</summary>
                <p className="detailcFull"> Commercial or corporate banks provide specialty services to their business clients, from small business owners to large, corporate entities. Along with day-to-day business banking, these banks also provide their clients with credit services, cash management, commercial real estate services, employer services, and trade finance, among other services. JPMorgan Chase and Bank of America are two popular examples of commercial banks, though both have large retail banking divisions as well.</p>
            </details>
            <details className="cfull cborder">
                <summary>Investment banks</summary>
                <p className="detailcFull"> Investment banks focus on providing corporate clients with complex services and financial transactions such as underwriting and assisting with merger and acquisition (M&A) activity. As such, they are known primarily as financial intermediaries in most of these transactions. Clients commonly range from large corporations, other financial institutions, pension funds, governments, and hedge funds. Morgan Stanley and Goldman Sachs are examples of U.S. investment banks.</p>
            </details>
            <details className="cfull cborder">
                <summary> central banks</summary>
                <p className="detailcFull"> Unlike the banks listed above, central banks are not market-based and don't deal directly with the general public. Instead, they are primarily responsible for currency stability, controlling inflation and monetary policy, and overseeing a country's money supply. They also regulate the capital and reserve requirements of member banks. Some of the world's major central banks include the U.S. Federal Reserve Bank, the European Central Bank, the Bank of England, the Bank of Japan, the Swiss National Bank, and the People’s Bank of China.</p>
            </details>

           


          
            <div className="fixbg">
            <div class="section4">
            <h1>Webinars</h1>
            <p>Dr Financer's role in education and capacity building is done using different methodologies.
                 The <br /> webinar method allows the lecture content to be stored and used at any time by our <br /> membership.
                  It also reaches members in remote and poorly connected places.</p>
            <a href="https://youtube.com/" target="_blank"><img src="images/play-yellow.png" alt="" /></a>
        </div>
            </div>
            

            <div className="cfull" >
                <h1>Is Sales Trading Right for you?</h1><br />
                <h2 >Advantages of Sales Trading</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum incidunt libero, ea assumenda harum odit laudantium adipisci eum, maiores saepe laboriosam? Ipsam nemo cumque illum facere distinctio consequatur, velit aliquid.</p><br />
                <h2 >Disadvantages of Sales Trading</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quia quae blanditiis atque autem! Officiis quis vitae minus illo tenetur expedita, minima reiciendis nisi velit molestias assumenda aut voluptatibus ducimus?</p><br />
            </div>
            <div className="enquiry">
            <h1>Common Enquiry</h1>
            <div class="line"></div>
                {questions.map((question)=>{
                    return <SingleQuestion key = {question.id} title={question.qn} info = {question.ans}/>
                })}
            </div>
           

        </>


    );
}