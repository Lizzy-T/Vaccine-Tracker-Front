import React from 'react'

import '../../stylesheets/components/Errors.scss'

export default function Errors({errors}) {
    const displayErrors = () => {
        return errors.map(error => <p>{error}</p>)
    }

    return (
        <div className="error-container">
            {displayErrors()}
        </div>
    )
}
