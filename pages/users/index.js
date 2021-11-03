import React from "react";
import Head from "next/head";
import Link from "next/link";
import AdminHOC from "../components/layouts/admin.hoc";
import axios from "axios";
import { data } from "browserslist";

const Users = ({ users, error }) => {
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  return (
    <div>
      <AdminHOC>
        {/* Content Wrapper. Contains page content */}
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>DataTables</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active">DataTables</li>
                  </ol>
                </div>
              </div>
            </div>
            {/* /.container-fluid */}
          </section>
          {/* Main content */}
          <section className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">
                        DataTable with minimal features &amp; hover style
                      </h3>
                    </div>
                    {/* /.card-header */}
                    <div className="card-body">
                      <table
                        id="example2"
                        className="table table-bordered table-hover"
                      >
                        <thead>
                          <tr>
                            <th>id</th>
                            <th>username</th>
                            <th>email</th>
                            <th>password</th>
                            <th>edit</th>
                            <th>delete</th>
                          </tr>
                        </thead>
                        <tbody>
                        {users.map(data => (
                          <tr>
                          <td>{data.id}</td>
                          <td>{data.fullname}</td>
                          <td>{data.email}</td>
                          <td>{data.password}</td>
                          <td className="text-center"><Link href={`/users/edit/${data.id}`}><a className="btn btn-warning btn-sm">แก้ไข</a></Link></td>
                          <td className="text-center"><Link href="#"><a className="btn btn-danger btn-sm">ลบ</a></Link></td>
                          </tr> 
                          ))}
                        </tbody>
                      </table>
                    </div>
                    {/* /.card-body */}
                  </div>
                  {/* /.card */}
                </div>
                {/* /.col */}
              </div>
              {/* /.row */}
            </div>
            {/* /.container-fluid */}
          </section>
          {/* /.content */}
        </div>
        {/* /.content-wrapper */}

        {/* /.content-wrapper */}
        {/* jQuery */}
        <script src="/plugins/jquery/jquery.min.js"></script>
        {/* Bootstrap 4 */}
        <script src="plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
        {/* DataTables  & Plugins */}
        <script src="plugins/datatables/jquery.dataTables.min.js"></script>
        <script src="plugins/datatables-bs4/js/dataTables.bootstrap4.min.js"></script>
        <script src="plugins/datatables-responsive/js/dataTables.responsive.min.js"></script>
        <script src="plugins/datatables-responsive/js/responsive.bootstrap4.min.js"></script>
        <script src="plugins/datatables-buttons/js/dataTables.buttons.min.js"></script>
        <script src="plugins/datatables-buttons/js/buttons.bootstrap4.min.js"></script>
        <script src="plugins/jszip/jszip.min.js"></script>
        <script src="plugins/pdfmake/pdfmake.min.js"></script>
        <script src="plugins/pdfmake/vfs_fonts.js"></script>
        <script src="plugins/datatables-buttons/js/buttons.html5.min.js"></script>
        <script src="plugins/datatables-buttons/js/buttons.print.min.js"></script>
        <script src="plugins/datatables-buttons/js/buttons.colVis.min.js"></script>
        {/* AdminLTE App */}

        <script src="dist/js/adminlte.min.js"></script>
        {/* AdminLTE for demo purposes */}

        <script src="dist/js/demo.js"></script>
        {/* Page specific script */}
        <script src="/plugins/jquery/jquery.min.js"></script>
        {/* Bootstrap 4 */}
        <script src="plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
        {/* DataTables  & Plugins */}
        <script src="plugins/datatables/jquery.dataTables.min.js"></script>
        <script src="plugins/datatables-bs4/js/dataTables.bootstrap4.min.js"></script>
        <script src="plugins/datatables-responsive/js/dataTables.responsive.min.js"></script>
        <script src="plugins/datatables-responsive/js/responsive.bootstrap4.min.js"></script>
        <script src="plugins/datatables-buttons/js/dataTables.buttons.min.js"></script>
        <script src="plugins/datatables-buttons/js/buttons.bootstrap4.min.js"></script>
        <script src="plugins/jszip/jszip.min.js"></script>
        <script src="plugins/pdfmake/pdfmake.min.js"></script>
        <script src="plugins/pdfmake/vfs_fonts.js"></script>
        <script src="plugins/datatables-buttons/js/buttons.html5.min.js"></script>
        <script src="plugins/datatables-buttons/js/buttons.print.min.js"></script>
        <script src="plugins/datatables-buttons/js/buttons.colVis.min.js"></script>
        {/* AdminLTE App */}

        <script src="dist/js/adminlte.min.js"></script>
        {/* AdminLTE for demo purposes */}

        <script src="dist/js/demo.js"></script>
        {/* Page specific script */}
        <script></script>
        <script>
<div>
  $(function () {'{'}
  $("#example1").DataTable({'{'}
  "responsive": true, "lengthChange": false, "autoWidth": false,
  "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]
  {'}'}).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');
  $('#example2').DataTable({'{'}
  "paging": true,
  "lengthChange": false,
  "searching": false,
  "ordering": true,
  "info": true,
  "autoWidth": false,
  "responsive": true,
  {'}'});
  {'}'});
</div>

</script>
      </AdminHOC>
    </div>

    
  );
};
Users.getInitialProps = async ctx => {
  try {
    const res = await axios.get('https://api-itcmtc.herokuapp.com/members');
    const users= res.data;
    return { users };
  } catch (error) {
    return { error };
  }
};
export default Users;