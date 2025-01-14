import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    main: '#003366',
    secondary: 'gray',
    error: {
      main: red.primary[A400]
    }
  }
});