import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp()
{
  return(
    <div>
      <h1>Yash Bhamnaia Loves you!</h1>
    </div>
  )
}

const reactElement = React.createElement(
  'a',
  {
    href:'https://google.com',
    target:'__blank'
  },
  'Google pr jane k liye yha click kre'
)

ReactDOM.createRoot(document.getElementById('root')).render(
 
<App/> 
  
)
