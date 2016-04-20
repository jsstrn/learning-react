/*globals React, ReactDOM*/

const TableBody = React.createClass({
  propTypes: {
    products: React.PropTypes.array.isRequired
  },
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
  propTypes: {
    category: React.PropTypes.string.isRequired
  },
  render: function () {
    return (
      <tr>
        <th>{this.props.category}</th>
      </tr>
    )
  }
})

const TableDataRow = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    price: React.PropTypes.number.isRequired
  },
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
  propTypes: {
    products: React.PropTypes.array.isRequired
  },
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

const Search = React.createClass({
  propTypes: {
    products: React.PropTypes.array.isRequired
  },
  getInitialState: function () {
    return {
      products: this.props.products
    }
  },
  userIsTyping: function (event) {
    const regex = new RegExp('ball', 'gi')
    const filteredProducts = this.props.products.filter((product) => {
      return product.name.match(regex)
    })
    this.setState({products: filteredProducts})
  },
  render: function () {
    return (
    <div>
      <input type='text' onChange={this.userIsTyping} />
      <Table products={this.state.products} />
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

ReactDOM.render(
  <Search products={products} />,
  document.querySelector('#app')
)
