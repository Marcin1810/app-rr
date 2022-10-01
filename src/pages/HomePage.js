import React from 'react';
import Article from '../components/Article';

const articles = [
    {
        id: 1,
        title: 'Czym jest teoria strun',
        author: "Jan Nowak",
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae fugiat, earum quis corporis vel voluptates dolorum at dolor magnam ipsa, et omnis reiciendis magni deserunt doloremque minus sed sunt officia. '  
    },
    {
        id: 2,
        title: 'Informatyka w świecie współczesnym',
        author: "Jan Nowak",
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae fugiat, earum quis corporis vel voluptates dolorum at dolor magnam ipsa, et omnis reiciendis magni deserunt doloremque minus sed sunt officia. '  
    },
    {
        id: 3,
        title: 'Gotowanie jest super',
        author: "Jan Nowak",
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae fugiat, earum quis corporis vel voluptates dolorum at dolor magnam ipsa, et omnis reiciendis magni deserunt doloremque minus sed sunt officia. '  
    } 

]

const HomePage = () => {
    const artList = articles.map(article => (
        <Article key={article.id} {...article}/>

    ))


    return (  
        <div className='home'>
           {artList}
        </div>
     );
}
 
export default HomePage;