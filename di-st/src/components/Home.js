import React from "react";
import axios from "axios";
import "./Home.css";

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
       data:"",
       suspense:true,
    }
  }

  componentDidMount() {
    axios.get('https://api.instantwebtools.net/v1/airlines')
    .then(function (res) {
        console.log(res.data);
        this.setState({data:res.data,
        suspense:false});
    }
      .bind(this))
      .catch(function (error) {
      console.log(error);
    });
  }

  render() {


    return (
      this.state.suspense ? 
      <div class="spinner-grow" role="status">
  <span class="sr-only">Loading...</span>
</div>:
      <>
        <nav class="navbar navbar-dark bg-primary navbar-expand-lg">
          <a class="navbar-brand p-3" href="#">USER</a>
          <div class="navbar-nav">
          </div>
        </nav>
        <body>
          <div className="container-fluid" style={{ height: "90vh" }}>

            <h1 className="display-4"><strong>Company</strong></h1>
            <h1 className="display-4" style={{fontSize:'20px'}}>List of the companies on the platform</h1>

            <div className="row d-flex justify-content-center align-items-center" style={{ height: "inherit" }}>

            {this.state.data.map((data) => 
              <div className="col-3" >
                <div className="card" >
                  <div className="card-body">
                  <div className="row d-flex justify-content-center align-items-center mb-2">
                        <div className="col-4" id="img" style={{background:'url('+data.logo+')'}}>
                        </div>
                        <div className="col-8">
                            <strong className="display-4" style={{fontSize:'20px',fontWeight:'400'}}>{data.name}</strong> 
                        </div>

                  </div>

                  <p className="mb-1"><i className="fa fa-location" aria-hidden="true"></i><span style={{marginLeft:'10px'}}>{data.head_quaters}</span></p>
                  <p className="mb-2"><i className="fa fa-history" aria-hidden="true"></i><span style={{marginLeft:'10px'}}>{data.established}</span></p>

                          <a href={data.website} class="btn btn-primary" target="_blank" >Visit Website</a>


                  </div>
</div>

                </div>
                 )} 

            </div>
          </div>
        </body>
      </>
    );

  }
}