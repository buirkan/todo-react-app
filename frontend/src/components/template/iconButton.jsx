import React from 'react'
import If from '../template/ifCondition'

export default props => (
  /* first solution */
  // if (props.hide) {
  //   return null
  // } else {
  //   return (
  //     <button className={'btn btn-' + props.style} onClick={props.onClick}>
  //       <i className={'fa fa-' + props.icon}></i>
  //     </button>
  //   )
  // }
  /* Second solution with tag */
  <If condition={!props.hide}>
    <button className={'btn btn-' + props.style} onClick={props.onClick}>
      <i className={'fa fa-' + props.icon}></i>
    </button>
  </If>
)