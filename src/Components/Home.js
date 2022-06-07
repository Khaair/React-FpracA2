import React from 'react'
import {Form } from "react-bootstrap";
import Select from "react-select";
import Table from 'react-bootstrap/Table'

export default function Home({data}) {

  console.log(data,'Home')
  return (
    <div className='container mt-5'>
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
          {data.length && data.map((el, ind) => {
            return (
              <tr key={ind}>
                <th scope="row">{ind + 1}</th>
                <td>{el.firstname}</td>
                <td>{el.lastname}</td>
                <td>{el.username}</td>
              </tr>
            )

          })}


        </tbody>
      </table>

    </div>
  )
}
