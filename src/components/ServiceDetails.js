import { ServiceDetailsList } from "./ServiceDetailsList";
export function ServiceDetails() {
  return (
    <div className="row" style={{ marginTop: "30px" }}>
      <div className="col-3 col-md-3 d-none d-md-block"></div>
      <div className="col-12 col-md-6">
        <h3 className="alert alert-success">Service Details</h3>
        <div className="mb-1">
          <input
            type="text"
            //value={firstName}
            // onChange={(e) => updateFirstName(e)}
            className="form-control"
            placeholder="Enter Vehicle Reg. No."
          />
        </div>
        <div>
          <div className="mb-1">
            <input
              type="button"
              className="btn btn-success w-100"
              onClick={ServiceDetailsList}
              value="Check Status"
            />
          </div>
        </div>
      </div>
      <div className="col-3 col-md-3  d-none d-md-block"></div>
    </div>
  );
}
