export function Enquiry() {
  return (
    <div className="row" style={{ marginTop: "30px" }}>
      <div className="col-3 col-md-3 d-none d-md-block"></div>
      <div className="col-12 col-md-6">
        <h3 className="border border-primary p-3 mb-2 bg-dark text-primary">
          Enquiry
        </h3>
        <div className="mb-1">
          <input
            type="text"
            //value={firstName}
            // onChange={(e) => updateFirstName(e)}
            className="form-control"
            placeholder="Enter User Id"
          />
        </div>
        <div className="mb-1" style={{ marginTop: "10px" }}>
          <textarea
            //value={lastName}
            // onChange={(e) => updateLastName(e)}
            className="form-control"
            placeholder="Enter Enquiry"
          />
        </div>
        <div className="mb-1">
          <button className="form-control btn btn-outline-primary">
            Submit
          </button>
        </div>
      </div>
      <div className="col-3 col-md-3  d-none d-md-block"></div>
    </div>
  );
}
