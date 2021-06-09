export function Login() {
  return (
    <div className="col" style={{ marginTop: "30px" }}>
      <div className="col-3 col-md-5 d-none d-md-block"></div>
      <div className="col-12 col-md-6">
        <h3 class=" p-3 mb-2 bg-primary text-white">Log In</h3>
        <div>
          <form>
            <div className="mb-1">
              <input
                type="username"
                name="username"
                className="form-control"
                placeholder="username..."
                required
              />
            </div>
            <div className="mb-1">
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="password..."
                required
              />
            </div>
            <div className="mb-1">
              <button className="form-control btn btn-outline-primary m-4 w-50">
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="col-3 col-md-3  d-none d-md-block"></div>
    </div>
  );
}
