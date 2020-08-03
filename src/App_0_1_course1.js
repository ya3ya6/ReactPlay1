import React from 'react';
import logo from './logo.svg';
import './App.css';
import Catalog from './Catalog';
import {Switch, Route, Link, BrowserRouter as Router} from 'react-router-dom';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {time: new Date().toString(), catalogs : []}
  }
  clicked(catalogid){
    this.setState({catalogs: this.state.catalogs.map(c => (
      {...c, selected: (c.id == catalogid) ? !c.selected : c.selected}
    ))})
  }
  componentDidMount(){
    setInterval(() => {this.setState({time: new Date().toString()})}, 1000)
    fetch('catalogs.json')
      .then(a => a.json())
      .then(res => this.setState({catalogs: res.map(c => ({...c, selected: false}))}))
      .catch(err => console.log(err))
  }
  render(){
    let a = 2;
    let b = 3;
    let catalog_components = this.state.catalogs.map((c, i) => <Catalog key={"catalog_" + i} catalog={c} onclicked={(cid) => {this.clicked(cid)}} />)
    // let catalog_components = []
    // for(let [i, catalog] of this.state.catalogs.entries())
    //  catalog_components.push(<Catalog key={"catalog_" + i} catalogTitle={catalog.title} />)
    class CatalogsPage extends React.Component {
      render(){
        return <div>{catalog_components}</div>
      }
    }
    let TimePage = () => ([
                     <div>{/*a + b*/}</div>,
                     <div>{this.state.time}</div>,
                     <div>{/*hoho*/}</div>
                   ])
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">The catalog app</h1>
            <nav>
              <Link to="/" >Catalog</Link>
              <Link to="/time" >Time</Link>
            </nav>
          </header>
          <Switch>
            <Route exact path="/" component={CatalogsPage} />
            <Route path="/time" component={TimePage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
