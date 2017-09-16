import React from 'react';
import {connect} from 'react-redux';
import {addTagToPicture} from '../../actions/PictureActions'

class Tag extends React.Component{


    render(){
        if(this.props.hasOnClick){
            return(
                <div onClick={() => {this.props.addTags(this.props.tagName, 0)}} className="tag">{this.props.tagName}</div>
            )
        }else{
            return(
                <div className="tag">{this.props.tagName}</div>
            )
        }
    }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    addTags : (tag, pictureId) => dispatch(addTagToPicture(tag, pictureId))
  }
}

export default connect(null,mapDispatchToProps)(Tag);
