import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import Theme from './Components/Theme';
import { ThemeProvider } from '@material-ui/styles';



ReactDOM.render(
    <ThemeProvider theme={Theme}>

  <React.StrictMode>
   <App/>
  </React.StrictMode>
    </ThemeProvider>,
  document.getElementById('root')
);

