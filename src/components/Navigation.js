import React from 'react'
import { Link } from 'react-router-dom';

const Navigation = () => {
    const isLoggedIn = localStorage.getItem('logged');
    return (
        <div className="container mx-auto mt-5">
            <nav className="grid grid-cols-12">
                <ul className="flex col-span-9">
                    <li className="mx-4">
                        <Link to="/" className="hover:underline hover:text-purple-600">Home</Link>
                        </li>
                    <li className="mx-4">
                        <Link to="/hotspots" className="hover:underline hover:text-purple-600">Hotspots</Link>
                    </li>
                    <li className="mx-4">
                        <Link to="/hotspot" className="hover:underline hover:text-purple-600">Hotspot</Link>
                    </li>
                </ul>
                <ul className="col-span-3 text-right">
                    <li className="mx-4">
                        {isLoggedIn ? <Link to="/logout" className="hover:underline hover:text-purple-600">Logout</Link> : <Link to="/login" className="hover:underline hover:text-purple-600">Login</Link>}
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation
