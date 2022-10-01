import React from 'react';
import './Article.css';

const Article = (props) => {
    return ( 
        <div>
            {/* <h1>{props.article.title}</h1>
            <span>{props.article.author}</span>
            <p>{props.article.text}</p> */}

            <h3>{props.title}</h3>
            <span>{props.author}</span>
            <p>{props.text}</p>

        </div>
     );
}
 
export default Article;
