
import { UsuarioProvider } from './context/UsuarioContext';
import { AppRouter } from './routers/AppRouter';


const App = () => {
  return (

    <UsuarioProvider>
      <AppRouter />
    </UsuarioProvider>

  );
}

export default App;
