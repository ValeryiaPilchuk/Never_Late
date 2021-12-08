import {render, screen, cleanup} from '@testing-library/react';
import Home from '../components/Input';


import ReactDOM from 'react-dom';
afterEach(()=>{
cleanup();
});


// This method will check overall crash or working of Input Page
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Input />, div);
});