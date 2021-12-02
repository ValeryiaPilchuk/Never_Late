import {render, screen, cleanup} from '@testing-library/react';
import Home from '../components/Home';


import ReactDOM from 'react-dom';
afterEach(()=>{
cleanup();
});


// This method will specifically check at different points 
test('should render Profile component', () => {
    render(<Home/>);
    const todoElement = screen.getByTestId('h-1', 'h-2', 'h-3');
    expect(todoElement).toBeInTheDocument();

}
)

// This method will check overall crash or working of Home Page 
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home />, div);
});

