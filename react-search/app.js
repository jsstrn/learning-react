/*globals React, ReactDOM*/

const TableBody = React.createClass({
  render: function () {
    const row = []
    let previousCategory = null
    this.props.products.forEach((product) => {
      if (product.category !== previousCategory) {
        row.push(<TableCategoryRow category={product.category}/>)
      }
      row.push(<TableDataRow name={product.name} price={product.price} />)
      previousCategory = product.category
    })
    return (
      <tbody>{row}</tbody>
    )
  }
})

const TableCategoryRow = React.createClass({
  render: function () {
    return (
      <tr>
        <th>{this.props.category}</th>
      </tr>
    )
  }
})

const TableDataRow = React.createClass({
  render: function () {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.price}</td>
      </tr>
    )
  }
})

const Table = React.createClass({
  render: function () {
    return (
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
        </tr>
      </thead>
      <TableBody products={this.props.products} />
    </table>
    )
  }
})

const SearchBox = React.createClass({
  userIsTyping: function () {

  },
  render: function () {
    return (
    <div>
      <input type='text' />
      <Table products={this.props.products onChange={this.userIsTyping}} />
    </div>
    )
  }
})

const products = [
  {
    category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'
  },
  {

    category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'
  },
  {
    category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'
  },
  {
    category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'
  },
  {
    category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'
  },
  {
    category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'
  }
]

ReactDOM.render(<SearchBox products={products} />, document.querySelector('#app'))
