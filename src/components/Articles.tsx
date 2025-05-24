import { ArticleData } from "../types";
// Redacting the articles in Markdown and rendering them 
import ReactMarkdown  from "react-markdown";
// https://www.npmjs.com/package/react-markdown#when-should-i-use-this



interface ArticleProps{
    data: ArticleData
}

// Big article 1/1 all page width
export function Long_Article({data} : ArticleProps){
    return( 
    <article className="long-article">
        <img className="article-image" src={data.image} alt={data.title} />
        <div className="article-content" >
            <h2>{data.title}</h2>
            <p>{data.date}</p>
            <ReactMarkdown>{data.content}</ReactMarkdown>
        </div>

    </article>
    )
}

// Medium 1/2 of the page
export function Medium_Article({data} : ArticleProps){
    return( 
    <article className="long-article">
        <img className="article-image" src={data.image} alt={data.title} />
        <div className="article-content" >
            <h2>{data.title}</h2>
            <p>{data.date}</p>
            <ReactMarkdown>{data.content}</ReactMarkdown>
        </div>

    </article>
    )
}


// Small / 1/3 of the page
export function Short_Article({data} : ArticleProps){
    return( 
    <article className="long-article">
        <img className="article-image" src={data.image} alt={data.title} />
        <div className="article-content" >
            <h2>{data.title}</h2>
            <p>{data.date}</p>
            <ReactMarkdown>{data.content}</ReactMarkdown>
        </div>

    </article>
    )
}



// Small Articles that will occupy one half of the space that fits ino one page.


