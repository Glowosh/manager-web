import { ThemeProvider } from '@mui/material';
import { theme } from '../theme';
import { ModalWrapping } from '../components/ModalWrapping';
import { Route, Routes } from 'react-router-dom';
import { configRoutes } from '../routes/config';
import { Global, css } from '@emotion/react';
import { PrivateRoute } from '../components/PrivateRoute';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
          * {
            box-sizing: border-box;
            padding: 0;
            margin: 0;
            font-family: 'Poppins', 'sans-serif';
          }
          input:disabled {
            cursor: not-allowed;
          }
        `}
      />
      <Routes>
        {configRoutes?.map((infoRoute) => (
          <>
            {infoRoute?.isPrivate ? (
              <Route
                {...infoRoute}
                element={<PrivateRoute>{infoRoute?.element}</PrivateRoute>}
                key={infoRoute?.path}
              />
            ) : (
              <Route {...infoRoute} key={infoRoute?.path} />
            )}
          </>
        ))}
      </Routes>
      <ModalWrapping />
    </ThemeProvider>
  );
}

export default App;
