import React, { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";

import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

export default function Home({ data, DeleteFn, message }) {
  const [deleteid, setDeleteid] = useState("");

  console.log(data, "Home");

  let history = useNavigate();

  const submit = (id) => {
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to delete this?",
      buttons: [
        {
          label: "Yes",
          onClick: () => DeleteFn(id),
        },
        {
          label: "No",

          onClick: () => history("/"),
        },
      ],
    });
  };
  

  return (
    <div className="container mt-5">
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Edit\Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* {JSON.stringify(data)} */}
          {data.length &&
            data.map((el, ind) => {
              return (
                <tr key={ind}>
                  <td>{ind + 1}</td>
                  <td>{el.firstname}</td>
                  <td>{el.lastname}</td>
                  <td>{el.username}</td>
                  <td>
                    <button
                      onClick={() => submit(ind)}
                      type="button"
                      class="btn btn-danger"
                    >
                      Delete
                    </button>
                    <Link to={`/edit/${ind}`}>
                      {" "}
                      <button
                        style={{ marginLeft: "13px" }}
                        type="button"
                        class="btn btn-success"
                      >
                        Edit
                      </button>
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
