/* eslint-disable react/prop-types */

export default function Editor({markdown, setMarkdown})
 {

  return (
    <div className='editor-content'>
      <div className="toolbar">
      <h2>Editor</h2>
      </div>        
      <textarea 
          id="editor"
          value={markdown}
          onChange={ (e) => setMarkdown(e.target.value)}
          placeholder="Type your markdown here..."
      >
      </textarea>       
    </div>
  )
}

