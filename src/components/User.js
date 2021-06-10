import { UserNavBar } from "../common/AppNavBar";
import { useHistory } from "react-router-dom";
export function User() {
  const history = useHistory();
  return (
    <div>
      <UserNavBar />
      <div className="row m-3"></div>
      <div className="row m-3"></div>
      <div className="row m-3"></div>
      <div className="row">
        <div className="col-4 col-md-4 d-none d-md-block"></div>
        <div className="col-12 col-md-4 ">
          <div className="">
            <input
              type="button"
              value="Enquiry"
              className="form-control btn btn-outline-primary m-4 w-75"
              onClick={() => history.push("/enquiry")}
            />
            <input
              type="button"
              value="Service Request"
              className="form-control btn btn-outline-primary m-4 w-75"
              onClick={() => history.push("/servicerequest")}
            />
            <input
              type="button"
              value="Vehicle List"
              className="form-control btn btn-outline-primary m-4 w-75"
              onClick={() => history.push("/servicedetails")}
            />
          </div>
        </div>
        <div className="col-4 col-md-4 d-none d-md-block"></div>
      </div>
    </div>
  );
}
