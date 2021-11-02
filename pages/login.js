import React from 'react'
import Link from 'next/dist/client/link'

export default function login() {
    return (
        <div>
            <body class="hold-transition login-page">
             <div className="login-box">
  <div className="login-logo">
    <a href="../../index2.html"><b>Admin</b>LTE</a>
  </div>
  {/* /.login-logo */}
  <div className="card">
    <div className="card-body login-card-body">
      <p className="login-box-msg">Sign in to start your session</p>
      <form action="../../index3.html" method="post">
        <div className="input-group mb-3">
          <input type="email" className="form-control" placeholder="Username" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" className="form-control" placeholder="Password" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
        <div className="row">
          {/* /.col */}
          <div className="col-4">
            <button type="submit" className="btn btn-primary btn-block">Sign In</button>
          </div>
          {/* /.col */}
        </div>
      </form>
      {/* /.social-auth-links */}
      <Link href="register">
      <p className="mb-0">
        <a href="register.html" className="text-center">Register a new member</a>
      </p>
      </Link>
    </div>
    {/* /.login-card-body */}
  </div>
</div>
{/* /.login-box */}
{/* jQuery */}
{/* Bootstrap 4 */}
{/* AdminLTE App */}
</body>
        </div>
    )
}

