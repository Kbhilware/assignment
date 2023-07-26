import './App.css';
import './css/bootstrap.css';
import './css/style.css';
import Header from './component/Header';
import Banner from './component/Banner';
import Product from './component/Product';

function App() {
  return (
    <>
    <Header/>
    <main>
      <Banner/>
      <Product/>
    </main>
    </>
  );
}

export default App;
