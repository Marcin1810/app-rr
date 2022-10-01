import React, {Component} from 'react';
import '../styles/ContactsPage.css';
import {Prompt} from 'react-router-dom';


class ContactsPage extends React.Component {

    state ={
        text: '',
    }

    handleTextAreaChange = (e) =>{
        this.setState({
            text: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
this.setState({
    text: '',
})
    }
 
 render() {
 
    return ( 
        <>
        <form onSubmit={this.handleSubmit}>
            <h3>Napisz do nas!</h3>
             <textarea placeholder='wpisz wiadomość...'  value={this.state.text} onChange={this.handleTextAreaChange} /><br/>
            <button>Wyślij</button>
        </form>
        {/* <Prompt
        whem={true}
        message="Masz nie wypełniony formularz. Czy na pewno opuścić tę stronę"
        /> */}
        </>
     )
    }
}
 
export default ContactsPage;