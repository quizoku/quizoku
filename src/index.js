import React from 'react'
import ReactDOM from 'react-dom'
import {Router, browserHistory} from 'react-router'
import Routes from './routes' //'./routes/index.js'
//import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
    <Router
        history={browserHistory}
        routes={Routes}
    />,
    document.getElementById('root')
)

//registerServiceWorker()
