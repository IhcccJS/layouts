import React from 'react';
import './form.css';

function LoginForm() {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input type="text" className="form-control" id="username" placeholder="Username" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" className="form-control" id="password" placeholder="Password" />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary">
          注册
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
