import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles';
import './App.css';
import Main from './components/Main';
import Attribution from './components/Attribution';

const theme = {
  // Primary
  lightRed: 'hsl(0, 100%, 67%)',
  lightRedFaded: 'hsla(0, 100%, 67%, 0.05)',
  orangeYellow: 'hsl(39, 100%, 56%)',
  orangeYellowFaded: 'hsla(39, 100%, 56%, 0.05)',
  greenTeal: 'hsl(166, 100%, 37%)',
  greenTealFaded: 'hsla(166, 100%, 37%, 0.05)',
  blue: 'hsl(234, 85%, 45%)',
  blueFaded: 'hsla(234, 85%, 45%, 0.05)',
  // Gradients
  slateBlue: 'hsl(252, 100%, 67%)', // Background
  royalBlue: 'hsl(241, 81%, 54%)', // Background

  violetBlue: 'hsla(256, 72%, 46%, 1)', // Circle
  persianBlue: 'hsla(241, 72%, 46%, 0)', // Circle
  // Neutral
  paleBlue: 'hsl(221, 100%, 96%)',
  white: 'hsl(0, 0%, 100%)',
  lavender: 'hsl(241, 100%, 89%)',
  greyBlue: 'hsl(224, 30%, 27%)',
};

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Main />
        <Attribution />
      </ThemeProvider>
    </div>
  );
}

export default App;
