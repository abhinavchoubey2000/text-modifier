import React from 'react'
import PropTypes from 'prop-types'
export default function Alert(props) {
  return (
    <>
{props.alert===null?"":<div className="alert alert-success alert-dismissible fade show" role="alert">
    <strong>{props.alert}</strong>
</div>}
    </>
  )
}
