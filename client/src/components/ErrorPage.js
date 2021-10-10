import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <div className="main">
            <section className="signup">
                <div className="container">
                    <div className="signup-content">
                        <div className="not-found">
                            <h1>WE ARE SORRY PAGE NOT FOUND</h1>
                            <Link to="/" type="button" class="btn btn-outline-primary">Go to Homepage</Link>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default ErrorPage
