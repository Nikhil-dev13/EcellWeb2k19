import React, { Component } from "react";
import faxios from '../../axios'
import "./mentors.css";
import Navbar from "../Navbar/navbar";
import Footer from '../Footer/footer';
import Loader from '../api_loader/api_loader'

class mentors extends Component {
  axios = faxios();
  state = {
    mentors: {},
    loading: true
  };

  componentDidMount(){
    for(let i=2016; i<=2020;i++){
      this.axios.get(`/mentors/list/${i}/`).then(res=>{
        console.log(res)
        let  data = res.data.data
        if(data.length>0){
          this.setState({
            loading: false,
            mentors: {
              ...this.state.mentors,
              [i]: data
            }
          })
        }
      })
    }
  }


  render() {
    console.log(this.state.mentors)
    let mentors_html = []

    for(const year in this.state.mentors){
        let mentors = this.state.mentors[year]
        mentors = mentors.map(mentor => 
            <div className="individual_mentors" key={mentor.id}>
                <div><img className="mentors_pic shadow-lg p-3 mb-5 bg-white rounded" src={mentor.profile_pic_url} alt={mentor.name}/></div>
                <h3 className="mentors_name">{mentor.name}</h3>
                <p dangerouslySetInnerHTML={{__html:mentor.detail}} className="center2"></p>
            </div>
            )
        
        const yearwise_html = <div className="flex-containerr" key={year}>
          {mentors}
        </div>
        mentors_html.push(yearwise_html)
    }

    return (
      <div className="mentors">
        <Navbar />
        <div className="header4">MENTORS</div>          
            <div className="container-fluid ctn13">
              {this.state.loading? (<div style={{marginTop:"20%"}}><Loader/></div>):mentors_html}
            </div>
                  
        <Footer/>

      </div>
      
    );
  }
}

export default mentors;
