import React from 'react';

class TableRow extends React.Component {


  render() {
    const { index, name, carrotsCount } = this.props;

    return (
      <tr>
        <th scope="row">{index}</th>
        <td>{name}</td>
        <td>{carrotsCount}</td>
      </tr>
    )
  }
}


export default TableRow;