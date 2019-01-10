import React, {Component} from 'react';
import './App.css';

class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
        }
      };

      edit = () => {
        this.setState ({editMode: true});
      };

      save = () => {
        let updTitle = this.refs.newTitle.value;
        
        this.props.editItem (updTitle, this.props.key);

        this.setState ({
          editMode: false})
      };

      renderNormal = () => {
        return (
          <div className="container">
          <div className="row">
            <div className="Display">
            <p className="Display-Text">{this.props.title}</p>
            <button className="Display-Edit" onClick={this.edit}>Edit</button>
            <button className="Display-Delete" onClick={this.props.deleteItem}>Delete</button>
        </div>
        </div>
        </div>
        );
      };

      renderEdit = () => {
        return (
          <div className="container">
          <div className="row">
          <div className="col-6">
          <div className="Display">
            <input type="text" ref="newTitle" className="edit-text" defaultValue={this.props.title}></input>
            <button onClick={this.save} className="Display-Save">Save</button>
          </div>
          </div>
          </div>
          </div>
        );
      };

      render() {
        if (this.state.editMode) {
          return this.renderEdit ();
        } else {
          return this.renderNormal ();
        }
      }
}

export default Display;