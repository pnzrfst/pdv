import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Income from "./(private-route)/income/page";
import Home from "./(private-route)/home/page";
import Stock from "./(private-route)/stock/page";
import Reports from "./(private-route)/reports/page";


export default function App(){
    return(
        <Router>
            <Routes>
                <Route path="/income" element={<Income/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/stock" element={<Stock/>}/>
                <Route path="/reports" element={<Reports/>}/>
            </Routes>
        </Router>
    )
}