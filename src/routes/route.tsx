import React from "react"
import { Route, Routes } from "react-router-dom"
import { info } from "src/dashboard/info"


export const routes = () => {
    return (
        <Routes>
            <Route path="/" element={info()} />
        </Routes>
    );
}