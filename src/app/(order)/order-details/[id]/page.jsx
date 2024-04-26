import React from 'react'

const OrderDetails = ({ params, searchParams }) => {

  const {id} = params;
  const {hello} = searchParams
  return (
    <div>
      OrderDetails
      <br />
      {id}
      <br />
      {hello}
    </div>
  )
}

export default OrderDetails
