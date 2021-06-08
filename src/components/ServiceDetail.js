export function ServiceDetail() {
  return (
    <div className="row" style={{ margintop: "30px" }}>
      <div className="col-3 col-md-3 d-none d-md-block"></div>
      <div className="col-12 col-md-6">
        <h3 className="alert alert-warning">Service Details</h3>
      </div>
      <div className="mb-1">
        <input
          type="text"
          className="form-control"
          placeholder="Enter vehicle registration id"
        />
      </div>
      <div className="mb-1">
        <input
          type="button"
          className="btn btn-success w-100"
          value="Check Status"
        />
      </div>
      <div className="col-3 col-md-3  d-none d-md-block"></div>
    </div>
  );
}
