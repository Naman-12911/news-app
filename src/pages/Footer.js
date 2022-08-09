import React from 'react'
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div>
        <footer className="bg-light text-center text-lg-start">
        <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0)"}}>

            <Link className="text-white" to="/" style={{textDecoration:"none"}}> © 2022 Copyright newhouse.in</Link>
        </div>
        </footer>
    </div>
  )
}

export default Footer