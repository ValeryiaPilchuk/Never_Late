import {render, screen, cleanup} from '@testing-library/react';
import Footer from '../components/Footer';
import ReactDOM from "react-dom";




afterEach(()=>{
    cleanup();
    });
    
    test('should render Footer component', () => {
        render(<Footer/>);
        const EmailElement = screen.getByRole("link", 'mailto:email@domain.com');
        expect(EmailElement).toBeInTheDocument();  
        expect(EmailElement).toBeEnabled();  

        const imageElement = screen.getByRole('img',{class: /contact/i})
        expect(imageElement).toBeInTheDocument();  
        
    }
    )

    it("Footer renders without crashing", ()=>{
        const div = document.createElement("div");
        ReactDOM.render(<Footer></Footer>, div)
      })