import React from "react";
import './Footer.css'

// simpleicons.org website for logos
function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top-grid">
                <div className="social-logo">
                    <div className="fifa-logo"><img src="src\assets\svg-logos\fifa.svg" alt="Fifa logo" /></div>
                    <div className="social-icons">
                        {/* X logo */}
                        <span><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
                        </svg></span>

                        {/* Facebook logo */}

                        <span><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd" />
                        </svg>
                        </span>

                        {/* Instagram logo */}
                        <span><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd" />
                        </svg>
                        </span>

                        {/* Youtube */}
                        <span><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z" clip-rule="evenodd" />
                        </svg>
                        </span>

                        {/* Tiktok */}
                        <span><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9.5 13C7.567 13 6 14.567 6 16.5S7.567 20 9.5 20s3.5-1.567 3.5-3.5S11.433 13 9.5 13Z" />
                            <path fill-rule="evenodd" d="M11 5c0-.55228.4477-1 1-1 1.5438 0 3.3242.75435 4.5149 2.16836 1.2348 1.46632 1.7886 3.5834.9338 6.14784-.1747.524-.741.8071-1.2649.6325-.524-.1747-.8071-.741-.6325-1.2649.6452-1.93556.199-3.31848-.5662-4.22716C14.4407 6.8102 13.7107 6.37433 13 6.15825V16.5c0 .5523-.4477 1-1 1s-1-.4477-1-1V5Z" clip-rule="evenodd" />
                        </svg>
                        </span>
                    </div>
                </div>
                <div className="footer-apps">
                    <img src="src\assets\Google_Play_Store_badge_EN.svg.png" alt="google play store logo" />
                    <img src="src\assets\download-on-the-app-store-logo-png-23.png" alt="app store logo" />
                </div>
            </div>
            {/* fifa partners */}
            <div className="fifa-partners">
                <span>FIFA PARTNERS</span>
                <div className="footer-partner-grid">
                    {/* adidas logo */}
                    <span><img src="src\assets\svg-logos\adidas.svg" alt="adidas" /></span>
                    {/* cocacola logo */}
                    <span><img src="src\assets\svg-logos\cocacola.svg" alt="" /></span>
                    {/* hyundai */}
                    <span><img src="src\assets\svg-logos\hyundai.svg" alt="hyundai" /></span>
                    {/* kia */}
                    <span><img src="src\assets\svg-logos\kia.svg" alt="kia" /></span>
                    {/* lenovo */}
                    <span><img src="src\assets\svg-logos\lenovo.svg" alt="lenovo" /></span>
                    {/* qatar airways */}
                    <span><img src="src\assets\svg-logos\qatar-airways-1.svg" alt="qatar airways" /></span>
                    {/* visa */}
                    <span><img src="src\assets\svg-logos\visa.svg" alt="visa" /></span>
                </div>
            </div>
            <div className="footer-links">
                <a href="">PRIVACY POLICY</a>
                <a href="">TERMS OF SERVICES</a>
                <a href="">MANAGE COOKIE PREFERENCES</a>
            </div>
            {/* Footer Bottom */}
            <div className="footer-bottom-row">
                <p>Copyright © 1994 - 2025 FIFA. All rights reserved.</p>
            </div>
            
        </footer>
    );
};

export default Footer;