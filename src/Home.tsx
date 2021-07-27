import React, { Component } from 'react';
 
import { Table } from 'reactstrap';
class Home extends Component {
  state = {
    covidstatdata: [{id:0,totalcases:0,death:1,recovered:1,datetime:'2021-01-01'}] // must have at least one dummy data otherwise throw Property does not exist on type 'never'
  }
  constructor(props: any) {
    super(props);
	this.fetchCovidStat = this.fetchCovidStat.bind(this);
  }
  componentWillMount() {
  }
  componentDidMount() {
	 this.fetchCovidStat().then((data) => {
		this.setState({covidstatdata:data})
	});
  }
  
  fetchCovidStat() {
	  const API_URL = 'https://api.imgshow-apps.com/admin/misc/admin_coronavirus.php?action=viewbyapionlychange';
 
	  return fetch(API_URL).then((response) => {
		return response.json()
	  })
  }
  
  render() {
    return (

      <div className="App">
          <div>
			<a href="https://www.worldometers.info/coronavirus/" target="_blank" rel="noreferrer">Coronavirus worldometers stat</a>
		  </div>
		  <Table>
		<thead>
			<tr>
				<th>Cases</th>
				<th>Death</th>
				<th>Recovered</th>
				<th>Date Time</th>
			</tr>
		</thead>
		<tbody>
		
		{this.state.covidstatdata.map(d => (
			<tr key={d.datetime}><td>{d.totalcases}</td><td>{d.death}</td><td>{d.recovered}</td><td>{d.datetime}</td></tr>
		))} 
		</tbody>
		</Table>
      </div>
    )
  }
  
}

export default Home;
