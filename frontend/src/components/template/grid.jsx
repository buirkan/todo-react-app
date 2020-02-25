import React, { Component } from 'react'

export default class Grid extends Component {
  toCssClasses(numbers) {
    const cols = numbers ? numbers.split(' ') : []
    let classesValues = ''

    if (cols[0])
      classesValues += `col-xs-${cols[0]}`
    if (cols[1])
      classesValues += ` col-sm-${cols[1]}`
    if (cols[2])
      classesValues += ` col-md-${cols[2]}`
    if (cols[3])
      classesValues += ` col-lg-${cols[3]}`

    return classesValues
  }

  render() {
    const gridClasses = this.toCssClasses(this.props.cols || 12)

    return (
      <div className={gridClasses}>
        {this.props.children}
      </div>
    )
  }
}