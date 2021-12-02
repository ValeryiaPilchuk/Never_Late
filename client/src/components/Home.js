import React from 'react'
import './HomePage.css';
import Feature from './Feature';


export default function Home() {
    return (
        <>
        <div   data-testid='h-1' className="homePage">
            <br/><br/><br/>
            
            <div data-testid='h-2' className= "title">
            <h1>
                Welcome to NeverLate 
            </h1>
                <h3>The best choice for your homework schedule mangement. </h3>
            </div>  
            
            </div>
            <Feature data-testid='h-3' />
        </>
    )
}
