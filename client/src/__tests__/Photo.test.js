import {render, screen, cleanup} from '@testing-library/react';
import Photo from '../components/Photo';
import ReactDOM from 'react-dom';

afterEach(()=>{
cleanup();
});

test('should render Photo component', () => {
    render(<Photo/>);
    const todoElement = screen.getByTestId('photo-${user}');
    expect(todoElement).toBeInTheDocument();
}
)
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Photo />, div);
});