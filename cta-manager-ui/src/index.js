import ReactDOM from 'react-dom'
import React from 'react'
import Routes from './Routes'



import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <Routes></Routes>
    </BrowserRouter>

    ,
    document.getElementById('root')
)