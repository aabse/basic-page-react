import React from "https://esm.sh/react@18.2.0"
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client"

const appDomElement = document.getElementById('app');

const root = ReactDOM.createRoot(appDomElement);

const button = React.createElement('button', null, 'Button 1')
const button2 = React.createElement('button', null, 'Button 2')
const button3 = React.createElement('button', null, 'Button 3')

const app = React.createElement(React.Fragment, null, [button, button2, button3])
  
root.render(app)
