import React from 'react'
import Navigate from 'react'

function ProtectedRoute() {
        const isloggenIn = localStorage.setItem("isloggenIn", true)

        return isloggenIn ? {children} : <Navigate to='/login' replace/>
}

export default ProtectedRoute
