import React from "react";
import './Header.css';



function Header(){
    return (
        <header className="web-header">
            <div className="header-left">
            <button className="btn-left"><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14" />
            </svg></button>
            <h1 className="logo">FIFA</h1>
            <nav>
                <ul>
                    <li><a href="/tournaments">TOURNAMENTS</a></li>
                    <li><a href="/matchCentre">MATCH CENTER</a></li>
                    <li><a href="/news">NEWS</a></li>
                    <li><a href="/rankings">RANKINGS</a></li>
                    <li><a href="/watchOnFifa">WATCH ON FIFA+</a></li>
                    <li><a href="/play">PLAY</a></li>
                    <li><a href="/shop">SHOP</a></li>
                    <li><a href="/insideFifa">INSIDE FIFA</a></li>
                </ul>
            </nav>
            </div>

            <div className="header-right">
                <button className="btn-right">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                    </svg>
                </button>


                <button className="btn-right">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m13 19 3.5-9 3.5 9m-6.125-2h5.25M3 7h7m0 0h2m-2 0c0 1.63-.793 3.926-2.239 5.655M7.5 6.818V5m.261 7.655C6.79 13.82 5.521 14.725 4 15m3.761-2.345L5 10m2.761 2.655L10.2 15" />
                    </svg>
                </button>


                <button className="btn-right"><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                </button>

            </div>

        </header>

    )

}
export default Header;