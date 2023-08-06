
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import InputForm from './Components/InputForm/InputForm';



function App() {
  return ( 
    <div className='AppContainer'>
      <Header /> 
      <InputForm />
      <div className='FooterWrapper'>
       <Footer />
      </div>
    </div>

  );  
}  

export default App;
