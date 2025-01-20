/* eslint-disable react/prop-types */
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

function Preview({markdown}) 
{  
    console.log(typeof markdown);
    console.log(markdown);
  return (
    <div id="preview">
        <div className="toolbar">
        <h2>Preview</h2>
        </div>       
        <div className="preview-content">
        <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]} 
        >{markdown}</ReactMarkdown>
        </div>  
    </div>
  )
}

export default Preview