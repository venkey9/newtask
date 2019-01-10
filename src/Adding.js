import React, {Component} from 'react';
import Display from './Display';
import './App.css'

class Adding extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            title: '',
            Add: ''
        };
    };

    createNewDisplay = () => {
      this.setState(({ list, title }) => ({
        list: [
            ...list,
          {
            title
          }
        ],
        title: ''
      }));
    };

    handleKeyPress = e => {
        if (e.target.value !== '') {
          if (e.key === 'Enter') {
            this.createNewDisplay();
          }

        }
    };

    handleTitleInput = e => {
      this.setState({
        title: e.target.value,
      });
    };

    
    deleteItem = indexToDelete => {
        this.setState(({ list }) => ({
          list: list.filter((ADD, index) => index !== indexToDelete)
      }));
    };

    editItem = (i, updTitle) => {
    let arr = this.state.list;
    arr[i].title = updTitle;
    this.setState ({list: arr});
};

    eachAdd = (item, i) => {
        return <Display
                    key={i}
                    title={item.title}
                    Add={item.Add}
                    deleteItem={this.deleteItem.bind(this, i)}
                    editItem={this.editItem.bind(this, i)}
                />
      };

    render() {
        return (
            <div className="Add">
      
                <h1 className="Add-Header">Adding notes</h1>
                <div className="Add-Container">
                    <div>
                       <input type="text" 
                       placeholder="Enter Notes" 
                       value={this.state.title} 
                       onChange={this.handleTitleInput} 
                       onKeyPress={this.handleKeyPress}/>

                       <button className="Add-Add" onClick={this.createNewDisplay}>Add</button>
                    </div>
                    <div className="Add-Content">
                        {this.state.list.map(this.eachAdd)}
                    </div>

                </div>
            </div>
        );
    }
}

export default Adding;