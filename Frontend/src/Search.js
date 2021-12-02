import React,{useState} from 'react';
import dataspices from './dataspices';
import datafruits from './Fruitsdata';
import datavegetables from './Vegetablesdata';
import datamilkprods from './MilkProdsdata';
import datagrains from './grainsdata';
import dataleafyvegetables from './Leafydata';
import dataflour from './floursdata';
import datadryfruits from './dryfruitsdata';
import PropTypes from 'prop-types'
import './cards.css';

const Search = (props)=> {

    const [filter, setFilter] = useState('');

    const searchText = (event) =>{
        setFilter(event.target.value)
    }
    let dataSearch;
    
    if(props.value==="1"){
        dataSearch = datafruits.cardData.filter(item =>{
            return Object.keys(item).some(key =>
                item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
                )
        });
    }
    if(props.value==="2"){
        dataSearch = datavegetables.cardData.filter(item =>{
            return Object.keys(item).some(key =>
                item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
                )
        });
    }
    if(props.value==="3"){
        dataSearch = datamilkprods.cardData.filter(item =>{
            return Object.keys(item).some(key =>
                item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
                )
        });
    }
    if(props.value==="4"){
        dataSearch = dataspices.cardData.filter(item =>{
            return Object.keys(item).some(key =>
                item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
                )
        });
    }
    if(props.value==="5"){
        dataSearch = datagrains.cardData.filter(item =>{
            return Object.keys(item).some(key =>
                item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
                )
        });
    }
    if(props.value==="6"){
        dataSearch = dataleafyvegetables.cardData.filter(item =>{
            return Object.keys(item).some(key =>
                item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
                )
        });
    }
    if(props.value==="7"){
        dataSearch = dataflour.cardData.filter(item =>{
            return Object.keys(item).some(key =>
                item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
                )
        });
    }
    if(props.value==="8"){
        dataSearch = datadryfruits.cardData.filter(item =>{
            return Object.keys(item).some(key =>
                item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
                )
        });
    }
    return (
        <section className="py-2 container">
            <div className="row justify-content-center">

                <div className="col-12">
                    <div className=" col-4 mx-auto text-center">
                        <div className="row">
                        <div className ="col-lg-6 col-md-12">
                        <label className="form-label h2"><h2>{props.heading}</h2></label>
                        </div>
                        <div className="col-lg-6 col-md-12 searchbar">
                        <input 
                        type="text"
                        className="from-control"
                        value={filter}
                        onChange={searchText.bind(this)}
                        width="200"
                        height="5"
                        placeholder="search for the item"
                        />
                        </div>
                        </div>
                    </div>
                </div>
                {dataSearch.map((item,index)=>{
                    return(
            //     <div className="col-lg-2 col-md-4">
            //     {" "}
            //     <div className="container boxes3">
            //       <h7 className="container">{item.title}</h7>
            //       {/* <BsInfoCircle className="btn_info_circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top"/> */}
            //       <img
            //         src={item.img}
            //         className="img-1"
            //         alt="..."
            //       ></img>
            //       <br />
            //       <a className="btn btn1" href="/Addproduct" role="button" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Add button"onClick={()=>{
            //           localStorage.setItem("Name",item.title);
            //           localStorage.setItem("Image",item.img);
            //           localStorage.setItem("Head",props.value);
            //       }}>ADD</a>
                  
            //     </div>
            //     <br />
            //   </div>
            <div className="col-lg-2 col-md-4 col-sm-12">
                {" "}
                <div className="container">
                <div className="card">
                    <div className="imgBx">
                    <img
                    src={item.img}
                    className="img-1"
                    alt="..."
                  ></img>
                    </div>
                    <div className="content">
                    <h7>{item.title}</h7>
                    <br/>
                    <a className="btn btn1" href="/Addproduct" role="button" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Add button"onClick={()=>{
                      localStorage.setItem("Name",item.title);
                      localStorage.setItem("Image",item.img);
                      localStorage.setItem("Head",props.value);
                    }}>ADD</a>
                    </div>
                </div>
                </div>
                <br/>
            </div>
            // <br/>
                    )
                })}
                

            </div>
        </section>
    )
}

export default Search
