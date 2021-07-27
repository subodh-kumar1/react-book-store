import logo from './logo.svg';
import './App.css';
import theme from './themefile';
import {ThemeProvider} from '@material-ui/styles'
import HomePage from './components/pages/HomePage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomePage/>
    </ThemeProvider>
  );
}

export default App;
