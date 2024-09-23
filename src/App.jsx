import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import '../public/js/jquery.sticky';
import '../public/js/click-scroll';
import '../public/js/custom';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Ticket from './pages/Ticket';
import { Provider } from 'react-redux';
import store from './redux/store';
import Academydetail from './pages/Academydetail';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
 
 
  return (
    <>
      <ToastContainer />
 
    <Provider store={store}>
  
       <Header />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/academy/:id" element={<Academydetail />} />
      </Routes>
     <Footer sectionId="section_5" />
    </Provider>
    </>
  );
  
}

export default App;
