import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import Greeting from './Greeting.jsx'
// import Test from './Test.jsx'
// import Kermit from './kermit_img.jsx'
// import PlayingAround from './Playing.jsx'
// import './index.css'
import App from './listThing'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     {/* <Greeting />
//     <Test/>
//     <Kermit/> */}
//     <PlayingAround/>
//   </StrictMode>,
// )


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {
      <App/>
    }
  </StrictMode>,
)


