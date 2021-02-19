import React, { Component } from "react";

export class FetchData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  getItems() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=> res.json())
    .then(
        (result) => {
            this.setState({
                isLoaded:true,
                items:result
            });
        },
        (error)=>{
            this.setState({
                isLoaded:true,
                error
            })
        }
    )
  }

  renderRows(items){

    return items.map((item, key) =>{
        return(

            <tr key={key}>
                <td> {item.id} </td>
                <td className="name"> {item.name} </td>
                <td> {item.username}</td>
            </tr>
        )

    });

  }

  render() {
    return (
    <div>
        <button id="fetch-btn" onClick={()=>this.getItems()}>
            Get data
        </button>


        {this.state.isLoaded && (
            <div> 
            <table border="1" width="100%">
                <th> Id </th>
                <th> Title </th>
                <th> User Id </th>
                {this.renderRows(this.state.items) }
            </table>
            
            </div>
        )}

    </div>
    );
  }
}

export default FetchData;
