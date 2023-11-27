import React from 'react'
import { Routes, Route } from 'react-router-dom'
import PostDataComponent from '../Pages/PostDataPage'

const Allroutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<PostDataComponent />} />
            </Routes>
        </div>
    )
}

export default Allroutes