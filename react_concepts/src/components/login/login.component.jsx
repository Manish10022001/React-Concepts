import "./login.component.css";
export default function LoginComponent() {
{/*  to import bootstrap go to main.jsx and import 
    1. import '../node_modules/bootstrap/dist/css/bootstrap.css';
    2. import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
    3. import bootstrap from "bootstrap"; //imports all components of bootstrap [carousel, navbar, offcanvas, modals, ...]
*/}
  return (
    <div className="login-container">
      <form className="login-form alert alert-warning alert-dismissible">
        <h2 className="bi bi-person-fill">User Login</h2>
        <button type="button" className="btn btn-close" data-bs-dismiss="alert"></button>
        <dl>
          <dt>User Name</dt>
          <dd>
            <input type="text" className="form-control"/>
          </dd>
          <dt>Password</dt>
          <dd>
            <input type="password" className="form-control"/>
          </dd>
        </dl>
        <button className="btn btn-warning w-100">Login</button>
      </form>
    </div>
  );
}
