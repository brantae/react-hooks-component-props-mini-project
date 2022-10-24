import React from "react";
import Article from "./Article";


function ArticleList( {articles} ) {
    console.log(articles)
    const ArticleItem = articles.map((article) => {
        return ( 
            <Article key = {article.id} title = {article.title} date = {article.date} preview ={article.preview} />
        )
    })
    return (
        <main>
            {ArticleItem}
        </main>
    )
}

export default ArticleList