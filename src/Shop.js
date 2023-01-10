import { Component } from "react";
import emptybox from './emptybox.png';
import check from './check.png';

export class Shop extends Component{

    state ={
        userIn: " ",
        FoodItem: [ ],
        image:emptybox
    }

    onChangeEvent(e){
        this.setState({userIn:e})
        console.log(e)
    }
    addItem(input){
        if(input === " "){
            alert("Please enter an item!")
        }
        else{
        let listArray = this.state.FoodItem;
        listArray.push(input);
        this.setState({itemList: listArray,
                        userIn: " ",
                        image: emptybox
        })
        
        }
    }
    lineCross(e){
        const li = e.target;
        li.classList.toggle('crossed')

    }
    checkBox = ()=>{
        this.setState({
            image:check
        })
    }
    deteleItem(){
        let listArray = this.state.FoodItem;
        listArray =[];
        this.setState({FoodItem:listArray})

    }
    render(){



        return<div>
            <div className="container">
            <input type='text' 
                    placeholder="Enter the item name..."
                    onChange={(e)=>{this.onChangeEvent(e.target.value)}}
            value={this.state.userIn} />
            </div>
            <div className="container">
                <button className="btn green" onClick={()=>this.addItem(this.state.userIn)}>ADD</button>
            </div>
            <div>
                <ul>
                    {this.state.FoodItem.map((item, index)=>(
                        <li onClick={this.lineCross}  
                        key={index}>
                            <img onClick={this.checkBox} src={this.state.image} alt="box" width="40px"/>
                            {item}</li>
                    ))}
                </ul>
            </div>
            <div className="container">
                <button className="btn red" onClick={()=>this.deteleItem()}>DELETE</button>
            </div>

        </div>
    }
}
