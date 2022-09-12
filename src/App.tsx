import './App.scss';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from './components/Navibar/Navibar';
import UncontrolledExample from './components/Carousel/Carousel';
import Footer from './components/Footer/Footer';
import Price from './components/Price/Price';

function App() {
  return (
    <div className="App">
      <div className="head"><Header /></div>
      <Navibar />
      <Content />
      <div className='corausel'><UncontrolledExample /></div>
      <Price />
      <Footer />
    </div>
  );
}

export default App;
