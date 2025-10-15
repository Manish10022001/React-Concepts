import {useState} from "react";
export default function EventStateClassBindingThemeChange() {
    const [theme, setTheme] = useState('');
    const [btnTheme, setBtnTheme] = useState('');

    function handleThemeChange(e){
        if(e.target.checked){
            setTheme('bg-dark text-white');
            setBtnTheme('btn btn-light w-100')
        } else{
            setTheme('bg-light text-dark')
            setBtnTheme('btn btn-dark w-100')
        }
    }
  return (
    <div className="container-fluid d-flex justify-content-center">
      <form className= { `mt-4 p-4 border border-1 rounded ${theme}`}>
        <div className="form-switch">
            <input type="checkbox" onChange={handleThemeChange} className="form-check-input"/>
            <label className="form-check-label ms-2">Dark Theme</label>
        </div>
        <h3 className="bi bi-person-fill">Signup</h3>
        <dl>
          <dt>User Name</dt>
          <dd>
            <input type="text" className="form-control" />
          </dd>

          <dt>Password</dt>
          <dd>
            <input type="password" className="form-control" />
          </dd>
        </dl>
        <button className={btnTheme}>Login</button>
      </form>
    </div>
  );
}
