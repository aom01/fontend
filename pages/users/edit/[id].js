import React from "react";
import Head from "next/head";
import Link from "next/link";
import AdminHOC from "../../components/layouts/admin.hoc";
import axios from "axios";
import { data } from "browserslist";
import { useState } from 'react'; //เก็บข้อมูลไว้ในตัวแปร state
import Swal from 'sweetalert2';

const edituser = ({ users, error }) => {
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  const EditUser = () => {
    Axios.get('https://api-itcmtc.herokuapp.com/members', {
        Fullname: username,
        Email: email,
        password: password
  }); 
  }
return (
    <div>
      <AdminHOC>
      <body class="hold-transition register-page">
<div className="register-box">
  <div className="card">
    <div className="card-body register-card-body">
      <p className="login-box-msg">แก้ไขข้อมูล</p>
      <form action="/" method="post">
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="fuallname" onChange={(event) => { setfirstName(event.target.value) }} />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-user" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Email" onChange={(event) => { setlastName(event.target.value) }}/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Username" onChange={(event) => { setuserName(event.target.value) }} />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" className="form-control" placeholder="Password" onChange={(event) => { setPassword(event.target.value) }} />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
      </form>
      <div className="social-auth-links text-center">
      <button type="button" class="btn btn-success">บันทึก</button>
      <br />
      </div>
    </div>
    {/* /.form-box */}
  </div>{/* /.card */}
</div>
{/* /.register-box */}

</body>
      </AdminHOC>
    </div>

    
  );
};
edituser.getInitialProps = async ctx => {
  try {
    const res = await axios.get('https://api-itcmtc.herokuapp.com/members');
    const users= res.data;
    return { users };
  } catch (error) {
    return { error };
  }
};
export default edituser;