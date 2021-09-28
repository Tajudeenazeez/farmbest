import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import './bootstrap.min.css';
import HomeScreen from "./screens/Homescreen";
import CassavaScreen from "./screens/CassavaScreen";
import MaizeScreen from "./screens/MaizeScreen";
import PotatoScreen from "./screens/PotatoScreen";
import SoyaScreen from "./screens/SoyaScreen";
import LoginScreen from "./screens/LoginScreen";
import FarmerScreen from "./screens/FarmerScreen";
import InvestorScreen from "./screens/InvestorScreen";
import OfftakerScreen from "./screens/OfftakerScreen";
import AboutScreen from "./screens/AboutScreen";
import ContactScreen from "./screens/ContactScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import AdminScreen from "./screens/AdminScreen";
import Topper from "./components/Topper";
import FaqScreen from "./screens/FaqScreen";
import CombinationScreen from "./screens/CombinationScreen"

function App() {
  return (
    <Router>
      <main style={{height:'max-content'}}> 
          <Topper/> 
          <Header/>
          <Route path='/' component={HomeScreen} exact/>
          <Route path='/cassava' component={CassavaScreen}/>
          <Route path='/potatoe' component={PotatoScreen}/>
          <Route path='/maize' component={MaizeScreen} />
          <Route path='/soya' component={SoyaScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/farmer' component={FarmerScreen} />
          <Route path='/investor' component={InvestorScreen} />
          <Route path='/offtaker' component={OfftakerScreen} />
          <Route path='/about' component={AboutScreen} />
          <Route path='/contact' component={ContactScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/admin' component={AdminScreen}/>
          <Route path='/faq' component={FaqScreen}/>
          <Route path='/combination' component={CombinationScreen}/>
         
      </main>
          <Footer/>
    </Router>
  );
}

export default App;
