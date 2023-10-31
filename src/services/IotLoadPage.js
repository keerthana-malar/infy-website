import React from 'react'
import { useEffect } from 'react'
import { Spinner } from 'react-bootstrap'

const IotLoadPage = ({setLoad}) => {
    useEffect(() => {
        setTimeout(() =>{
            setLoad(false)
        },500)
    },[])
  return (
    <div className="centeralised">
    <Spinner animation="border" role="status" className='load'>
      {/* <span className="sr-only"></span> */}
    </Spinner>
  </div>
  )
}

export default IotLoadPage