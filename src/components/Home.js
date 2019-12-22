import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'

 class Home extends Component{

    handleClick = (id)=>{
        this.props.addToCart(id);
    }

    render(){
        let itemList = this.props.items.map(item=>{
            return(
                <div className="card" key={item.id}>
                        <div className="card-image hide">
                            <img src={item.img} alt={item.title}/>
                            <span className="card-title">{item.title}</span>
                            <span to="/" className="btn-floating halfway-fab waves-effect waves-light red"
                            onClick={()=>{this.handleClick(item.id)}}><i className="material-icons">add</i></span>
                        </div>

                        <div className="card-content2">
                            <span className="card-line">{item.pack_name}</span>
                            <span className="card-line">{item.pack_price}</span>
                            <span className="card-line">{item.pack_title}</span>
                            <span className="card-line">{item.pack_per_cost}</span>
                            <span className="card-line">{item.pack_unit_cost}</span>
                            <span className="card-line">{item.pack_gst_cost}</span>
                            <span className="card-line">
                            <button className="card-button" name='cartBtn' id='cartBtn' onClick={()=>{this.handleClick(item.id)}}>{item.pack_cart_button}</button></span>
                        </div>
                 </div>

            )
        })

        return(
            <div className="container">
                <h3 className="center">Bulk Sms</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{

    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
