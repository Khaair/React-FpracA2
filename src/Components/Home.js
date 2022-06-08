import React from 'react';
import { Link } from 'react-router-dom';

export default function Home({data,DeleteFn}) {

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
                <td>{ind+1}</td>
                <td>{el.firstname}</td>
                <td>{el.lastname}</td>
                <td>{el.username}</td>
                <td>
                <button onClick={()=>DeleteFn(ind)} type="button" class="btn btn-danger">Delete</button>
               <Link to={`/edit/${ind}`}> <button style={{marginLeft:'13px'}} type="button" class="btn btn-success">Edit</button></Link>
                </td>

              </tr>
            )

          })}


        </tbody>
      </table>

    </div>
  )
}
