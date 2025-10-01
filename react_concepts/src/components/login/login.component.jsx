import "./login.component.css";
export default function LoginComponent() {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>User Login</h2>
        <dl>
          <dt>User Name</dt>
          <dd>
            <input type="text" />
          </dd>
          <dt>Password</dt>
          <dd>
            <input type="password" />
          </dd>
        </dl>
        <button>Login</button>
      </form>
    </div>
  );
}
