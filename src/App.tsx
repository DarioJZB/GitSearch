import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import { UserProvider } from './context/userContextArr';

function App() {
  return (
    <UserProvider>
      <Nav />
      <main>
        <Outlet />
      </main>
    </UserProvider>
  );
}

export default App;
