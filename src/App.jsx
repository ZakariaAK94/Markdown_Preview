import { useState } from 'react'
import Editor from './Components/Editor';
import Preview from './Components/Preview';
import { defaultMarkdown } from './Components/defaultMarkDown';


function App() {
  const [markdown, setMarkDown] = useState(defaultMarkdown);

  return (
    <div className="app">
        <Editor markdown={markdown} setMarkdown={setMarkDown} />
        <Preview markdown={markdown} />
    </div>
  )
}

export default App
