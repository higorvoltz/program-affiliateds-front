import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import Solutions from './Pages/Solutions';
import Accelerator from './Pages/Accelerator';
import Academy from './Pages/Academy';
import Affiliateds from './Pages/Affiliateds';
import BuyCourse from './Pages/BuyCourse';
import Productors from './Pages/Productors';
import Helper from './Pages/Helper';
import Clients from './Pages/Clients';
import AdminArea from './Pages/AdminArea';
import Checkout from './Pages/Checkout';
export default function App(){
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/home" element={ <Home/> } />
          <Route path="/menu" element={ <Menu/> } />
          <Route path="/solucoes" element={ <Solutions/> } />
          <Route path="/acelerador" element={ <Accelerator/> } />
          <Route path="/afiliados" element={ <Affiliateds/> } />
          <Route path="/academia" element={ <Academy/> } />
          <Route path="/comprar" element={ <BuyCourse/> } />
          <Route path="/criadores" element={ <Productors/> } />
          <Route path="/ajuda" element={ <Helper/> } />
          <Route path="/clientes" element={ <Clients/> } />
          <Route path="/adm" element={ <AdminArea/> } />
          <Route path="/checkout" element={ <Checkout/> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}
