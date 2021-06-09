import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { UserRegister } from "./components/UserRegister";
import { AppNavBar } from "./common/AppNavBar";
import { UserList } from "./components/UserList";
import { Mechanics } from "./components/Mechanics";
import { MechanicList } from "./components/MechanicList";
import { Vehicle } from "./components/Vehicle";
import { Enquiry } from "./components/Enquiry";
import { ServiceType } from "./components/ServiceType";
import { VehicleType } from "./components/VehicleType";
import { ServiceRequest } from "./components/ServiceRequest";
import { EnquiryList } from "./components/EnquiryList";
import { ServiceRequestList } from "./components/ServiceRequestList";
import { VehicleList } from "./components/VehicleList";
import { ServiceDetails } from "./components/ServiceDetails";
import { Home } from "./component/Home";
function App() {
  return (
    <div>
      <Router>
        <AppNavBar />
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/user-register">
          <UserRegister />
        </Route>
        <Route path="/user-list">
          <UserList />
        </Route>
        <Route path="/mechanic">
          <Mechanics />
        </Route>
        <Route path="/mechanic-list">
          <MechanicList />
        </Route>
        <Route path="/vehicle">
          <Vehicle />
        </Route>
        <Route path="/enquiry">
          <Enquiry />
        </Route>
        <Route path="/servicetype">
          <ServiceType />
        </Route>
        <Route path="/vehicletype">
          <VehicleType />
        </Route>
        <Route path="/servicerequest">
          <ServiceRequest />
        </Route>
        <Route path="/enquirylist">
          <EnquiryList />
        </Route>
        <Route path="/servicerequestlist">
          <ServiceRequestList />
        </Route>
        <Route path="/vehiclelist">
          <VehicleList />
        </Route>
        <Route path="/servicedetails">
          <ServiceDetails />
        </Route>
      </Router>
    </div>
  );
}

export default App;
