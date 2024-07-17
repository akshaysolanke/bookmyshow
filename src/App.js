
import { Header } from "./Header";
import Activities from "./Pages/Activities/Activities";
import Events from "./Pages/Events/Events";
import Movies from "./Pages/Movies/Movies";
import Plays from "./Pages/Plays/Plays";
import Sports from "./Pages/Sports/Sports";
import Stream from "./Pages/Stream/Stream";
import { Route, Routes } from "react-router-dom";
import Corporates from "./Pages/Corporates/Corporates";
import ListYourShow from "./Pages/ListYourShow/ListYourShow";
import Offers from "./Pages/Offers/Offers";
import Footer from "./Footer/Footer";
import GiftCards from "./Pages/GiftCards/GiftCards";
import Details from "./Pages/Details/Details";





function App(){
     return <div>
        <Header />
        <Routes>
         <Route path="/" element={<Movies/>}></Route>
         <Route path="/stream" element={<Stream/>}></Route>
         <Route path="/events" element={<Events/>}></Route>
         <Route path="/plays" element={<Plays/>}></Route>
         <Route path="/sports" element={<Sports/>}></Route>
         <Route path="/activities" element={<Activities/>}></Route>
         <Route path="/listyourshow" element={<ListYourShow/>}></Route>
         <Route path="/corporates" element={<Corporates/>}></Route>
         <Route path="/offers" element={<Offers/>}></Route>
         <Route path="/giftcards" element={<GiftCards/>}></Route>
         <Route path="/details" element={<Details/>}></Route>
         <Route path="*" element={<h4>Page Not Found</h4>}></Route>
        </Routes>
        <Footer/>
     </div>
}
export default App