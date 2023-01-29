import React, { useState } from 'react';

import Plot from 'react-plotly.js';

let today = new Date().toISOString().slice(0, 10);

export default class PieChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {grocery:100,dinning:100, gas:100,retail:100,others:100, 
                  pie: {
                        values: [100,100,100,100,100],
                        labels: ["Grocery","Dinning","Gas", "Retail", "Others"], 
                        type: 'pie'
                       },
                  layout: { datarevision: 0, legend: {"orientation": "h"},margin: {l:0, r:0, b:0, t:0},hieght: 300,width: 300,},
                  revision: 0
                ,card:" "};
    
    this.handleGroceryChange = this.handleGroceryChange.bind(this);
    this.handleDinningChange = this.handleDinningChange.bind(this);
    this.handleGasChange = this.handleGasChange.bind(this);
    this.handleRetailChange = this.handleRetailChange.bind(this);
    this.handleOthersChange = this.handleOthersChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleGroceryChange(event) {
    this.setState({grocery: event.target.value});
  }
  handleDinningChange(event) {
    this.setState({dinning: event.target.value});
  }
  handleGasChange(event) {
    this.setState({gas: event.target.value});
  }
  handleRetailChange(event) {
    this.setState({retail: event.target.value});
  }
  handleOthersChange(event) {
    this.setState({others: event.target.value});
  }

  renderResult(val) {
    return (
      <div>
        <h2>Recommended Card: { val}</h2>
      </div>
    );
  }

  handleSubmit(event) {
    
    event.preventDefault();
    let u_grocery = this.state.grocery;
    let u_dinning = this.state.dinning
    let u_gas = this.state.gas;
    let u_retail = this.state.retail;
    let u_others = this.state.others;
    let vals = [u_grocery,u_dinning,u_gas, u_retail, u_others];
    
    const current = { values: vals,
                      labels: ["Grocery","Dinning","Gas", "Retail", "Others"], 
                      type: 'pie'
                    }

    this.setState({ pie: current });
    this.setState({ revision: this.state.revision + 1 });
    this.setState({ layout: { datarevision:this.state.revision + 1,
                              hieght: 300,
                              width: 300,
                              legend: {"orientation": "h"},
                              margin: {l:0, r:0, b:0, t:0},} });
  
    let benefitsArr = new Array(this.props.data[0].length);

    for (let i = 0; i < this.props.data[0].length; i++) {
      let {offer, fee, grocery, gas, online, dining, other} = this.props.data[0][i];
      let benefit = offer/12 - fee/12 + u_grocery * grocery * 0.01 + u_gas * gas * 0.01 + u_retail * online * 0.01 + u_dinning * dining * 0.01 + u_others * other * 0.01;
      benefitsArr[i] = benefit;
    }

    alert(benefitsArr);

    let max_benefit_idx = benefitsArr.indexOf(Math.max(...benefitsArr));

    this.setState({ card:this.props.data[0][max_benefit_idx].name});    
  }

   
  
  render() {
    
    return (
      <div className='row'>

        <div className='row'>
              
          <div>
            <h3>Total Spending: </h3>
              <div className='piechart'>
                  <Plot 
                    data={[
                      this.state.pie,
                    ]}
                    layout={this.state.layout}
                    revision={this.state.revision}
                    graphDiv="graph"
                  />
              </div>

          </div>
          <div className='form-col'>
            <h3>Modify Current Expenses:</h3>
            
            <form onSubmit={this.handleSubmit}>
              <label>
                Grocery: 
                <input type="number" name="grocery" defaultValue={this.state.grocery} onChange={this.handleGroceryChange}/>
              </label>

              <label>
                Dinning: 
                <input type="number" name="dinning" defaultValue={this.state.dinning} onChange={this.handleDinningChange}/>
              </label>

              <label>
                Gas: 
                <input type="number" name="gas" defaultValue={this.state.gas} onChange={this.handleGasChange}/>
              </label>

              <label>
                Online Retail: 
                <input type="number" name="retail" defaultValue={this.state.retail} onChange={this.handleRetailChange}/>
              </label>

              <label>
                Others: 
                <input type="number" name="Others" defaultValue={this.state.others} onChange={this.handleOthersChange}/>
              </label>

              <input type="submit" value="Submit"/>
            </form>

            {this.state.card === " " ? <p> </p> :
              <div>
                <h2>Recommended Card: { this.state.card}</h2>
              </div>
            }

          </div>
        </div>
      </div>
    );

  }
};