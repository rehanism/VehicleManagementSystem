import { AppNavBar } from "../common/AppNavBar";
import { useHistory } from "react-router-dom";

export function Home() {
  const history = useHistory();
  return (
    <div>
      <AppNavBar />
      <div className="row m-3"></div>
      <div className="row m-3"></div>
      <div className="row m-3"></div>
      <div className="row">
        <div className="col-4 col-md-4 d-none d-md-block"></div>
        <div className="col-12 col-md-4 ">
          <div className="">
            <input
              type="button"
              value="User Login"
              className="form-control btn btn-outline-primary m-4 w-50"
              onClick={() => history.push("/userlogin")}
            />
            <input
              type="button"
              value="User Register"
              className="form-control btn btn-outline-primary m-4 w-50"
              onClick={() => history.push("/guestuser")}
            />
          </div>
        </div>
        <div className="col-4 col-md-4 d-none d-md-block"></div>
      </div>
    </div>
  );
}
