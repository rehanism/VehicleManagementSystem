import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { AppNavBar } from "../common/AppNavBar";
import { LoginAction } from "../redux/LoginReducer";
export const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const state = useSelector((state) => state);

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const [successOperation, setSuccessOperation] = useState(false);
  const [errorOperation, setErrorOperation] = useState(false);

  const updateUserEmail = (e) => setUserEmail(e.target.value);
  const updateUserPassword = (e) => setUserPassword(e.target.value);

  const LoginFunction = () => {
    dispatch(
      LoginAction({
        userEmail,
        userPassword,
      })
    );
    setErrorOperation(true);
    setTimeout(() => setErrorOperation(false), 5000);

    console.log(userEmail, userPassword);
    console.log(state.userEmail, state.userPassword);
  };

  /* if (state.ogin.loginAction === true) {
    history.push("/user");

    return <div></div>;
  }*/

  return (
    <div className="row" style={{ marginTop: "30px" }}>
      <div className="col-3 col-md-3 d-none d-md-block"></div>
      <div className="col-12 col-md-6">
        <h3 class=" border border-primary p-3 mb-2 bg-dark text-primary">
          Log In
        </h3>

        <div>
          <form>
            <div className="mb-1">
              <input
                type="text"
                className="form-control"
                placeholder="Email..."
                value={userEmail}
                onChange={(e) => updateUserEmail(e)}
              />
            </div>
            <div className="mb-1">
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="password..."
                value={userPassword}
                onChange={(e) => updateUserPassword(e)}
              />
            </div>
            <div className="mb-1">
              <button
                className="form-control btn btn-outline-primary"
                value="Login"
                onClick={() => LoginFunction()}
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="col-3 col-md-3  d-none d-md-block"></div>
    </div>
  );
};
