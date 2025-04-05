import {render} from'@testing-library/react';
import '@testing-library/jet-dom';
import LocationButton from './components.UI/LocationButton';

test('renders button with correct info', () => {
    render(<Button label="Click Me" />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
});