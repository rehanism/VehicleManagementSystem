export function ServiceRequest() {
  return (
    <div className="row" style={{ marginTop: "30px" }}>
      <div className="col-3 col-md-3 d-none d-md-block"></div>
      <div className="col-12 col-md-6">
        <h3 className="alert alert-warning">Service Request</h3>
        <div className="alert alert-success">Request Registered</div>
        <div className="mb-1">
          <input
            type="text"
            //value={firstName}
            // onChange={(e) => updateFirstName(e)}
            className="form-control"
            placeholder="Enter vehicle registration id"
          />
        </div>
        <div className="mb-1">
          <input
            type="text"
            //value={lastName}
            // onChange={(e) => updateLastName(e)}
            className="form-control"
            placeholder="Enter price"
          />
        </div>
        <div className="mb-1">
          <input
            type="text"
            //value={userName}
            //onChange={(e) => updateUserName(e)}
            className="form-control"
            placeholder="Enter mechanics id"
          />
        </div>
        <div className="mb-1">
          <input
            type="number"
            //value={password}
            //onChange={(e) => updatePassword(e)}
            className="form-control"
            placeholder="Enter service catalog id"
          />
        </div>
        <div className="mb-1">
          <input
            type="text"
            //value={email}
            //onChange={(e) => updateEmail(e)}
            className="form-control"
            placeholder="Enter status"
          />
        </div>
        <div className="mb-1">
          <input
            type="button"
            className="btn btn-success w-100"
            value="Submit Request"
            //onClick={(e) => addEmployee(e)}
          />
        </div>
      </div>
      <div className="col-3 col-md-3  d-none d-md-block"></div>
    </div>
  );
}
