import { Outlet } from 'react-router-dom';
import { Header, Footer } from './components';
export const App = () => {
  
  
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh_-_8.2rem)] mt-[4.2rem] md:mt-[5rem] md:min-h-[calc(100vh_-_9.2rem)]">
        <Outlet/>
      </main>
      <Footer />
    </>
  );
};
