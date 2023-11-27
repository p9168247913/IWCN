import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Notes from '../Pages/Notes'

const Allroutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Notes/>}/>
            </Routes>
        </div>
    )
}

export default Allroutes