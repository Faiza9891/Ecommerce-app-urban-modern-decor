
import './App.css';
import { useEffect, useState } from 'react';
import Home from '../src/components/home/Home';
import CardItem from '../src/components/carditem/CardItem'
import WallpaperItem from './components/carditem/WallpaperItem';
import SignIn from './components/sign-in/SignIn';
import { Route,Routes } from 'react-router-dom';
import Loader from './loader/Loader';
import Laurels from './container/Laurels/Laurels';
import SpecialMenu from './container/Menu/SpecialMenu';
import Footer from './container/Footer/Footer';


function App() {
  const [loader,setLoader] = useState(false)
  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    },3000);
  },[]);
 

  return (
    <>
  <Routes> 
{loader ? <Route path='/' element={ <Loader/> }/>: 
   <Route path="/" element={<Home/>}/>}
    <Route path="/carpet" element={<CardItem loader={loader} setLoader={setLoader} />} />
  <Route path="/wallpaper" element={<WallpaperItem />} />
  <Route path="/contact" element={<SpecialMenu />}/>
  <Route path="/about" element={<Laurels/>}/>
  <Route path="/signin" element={<SignIn />}/>
  </Routes>
  <Footer/>
  </>
  );
}

export default App;
