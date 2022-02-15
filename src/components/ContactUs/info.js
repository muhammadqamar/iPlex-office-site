import React from 'react'
import './style/info.scss'

const Info = () => {
    return (
        <>
            <div className="info-hero-section">
                <div className="main-sections">
                    <div className="bx-ipex">
                        <h1 className="bx-hd">Prepare for a quick response</h1>
                        <a className="bx-tag" href="mailto:hr@iplex.co">hr@iplex.co</a>
                    </div>
                    <div className="bx-ipex">
                        <h1 className="bx-hd">Address</h1>
                        <p className="bx-para">Bahria Town Civic Center,</p>
                        <p className="bx-para">Phase 4 Plaza 75, Pakistan</p>
                    </div>
                    <div className="bx-ipex">
                        <h1 className="bx-hd">Phone</h1>
                        <a className="bx-tag" href="tel:+92 51 541 1278">+92 51 541 1278</a>
                    </div>
                </div>
                <div className="social-iplex">
                    <ul className="social-list">
                        <li className="list"><a className="list-tag" target="_blank" href="https://www.facebook.com/iplex.co/">Facebook</a></li>
                        <li className="list"><a className="list-tag" target="_blank" href="https://www.instagram.com/iplexlife/">Instagram</a></li>
                        <li className="list"><a className="list-tag" target="_blank" href="https://www.linkedin.com/company/iplexpvtltd/">Linkedin</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Info
