import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import { Box } from "@mui/material";
import Cart from './Components/Cart/Cart';
import DataProvider from "./context/DataProvider";
//components
import Header from "./Components/Header/Header";
import DetailsView from "./Components/Details/DetailsView";
import BuyItems from './Components/Cart/BuyItems';
import UserProfile from './Components/User/UserProfile';
function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 54 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<DetailsView />} />
            <Route path="/cart" element={<Cart />} />
            <Route path='/purchase' element={<BuyItems />} />
            <Route path='/user-profile' element={<UserProfile/>}/>
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
