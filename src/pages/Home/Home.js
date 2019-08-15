import React, {Component} from "react";
import "./Home.css"
import SearchBox from "../../components/SearchBox"
import SearchResult from "../../components/SearchResult/SearchResult";



class Home extends Component {
    state ={
        userInput:"",
        results:"",
        wordArr:[]
    }
    //method to handle/track the form input
    handleInputChange = event => {
        this.setState ({userInput: event.target.value})
    };
    translate = (str)=> {
        str=str.toLowerCase();
    
        // for words that start with a vowel:
        if (["a", "e", "i", "o", "u"].indexOf(str[0]) > -1) {
            return str=str+"ay";
        }
    
        // for words that start with one or more consonants
       else {
       //check for multiple consonants
           for (var i = 0; i<str.length; i++){
               if (["a", "e", "i", "o", "u"].indexOf(str[i]) > -1){
                   var firstconstant = str.slice(0, i);
                   var afterVowelPart = str.slice(i, str.length);
                   str = afterVowelPart+firstconstant+"ay";
                 break;
               }
            }
        return str;
       }
    }
    
    //method for submit button
    handleFormSubmit = event => {
        event.preventDefault();
        
        this.setState({results:this.translate(this.state.userInput)})
        this.state.wordArr.push(this.state.results);
        console.log("word array:", this.state.wordArr)
    }
    
    render(){
        return (
                <div style={{textAlign:"center", marginTop:"150px"}}>
                    <h1 className="typewriter">Welcome to the translator App!</h1>
                    <br/>
                    <h2>let's learn some pig latin</h2>
                    <br/>
                    <SearchBox
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                    />
                    <SearchResult
                    results={this.state.results}
                    />
                    <div style={{backgroundColor:"white", width:"200px",marginLeft:"auto",marginRight:"auto",borderRadius:"40px"}}>
                    {this.state.wordArr.map(i => 
                        <li key={i.id} style={{color:"black",fontSize:"30px",listStyle:"none"}}>{i}</li>
                    )}
                                           
                    </div>

                </div>
        )
    }
}
    


export default Home;