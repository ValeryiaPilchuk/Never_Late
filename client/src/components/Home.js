import React from 'react'
import './HomePage.css';
import Feature from './Feature';



export default function Home(props) {
    return (
            <>
            <div  className="homePage">
                <br/><br/><br/>
                
                <div className= "title">
                <h1>       
                    Welcome to NeverLate 
                </h1>
                    <h3>The best choice for your homework schedule mangement. </h3>
                </div>  
                </div>
                <Feature/>
            </>
    )
}
