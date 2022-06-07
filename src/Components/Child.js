import React from 'react'

export default function Child(props) {

    const  data  = "I am child data"


    props.propchild(data)
  return (
    <div>
    <p>hii</p>

    </div>
  )
}
