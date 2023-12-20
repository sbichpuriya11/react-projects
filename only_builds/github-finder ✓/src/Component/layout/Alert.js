import React, { useContext } from 'react'
import AlertContext from '../../Context/alert/alertContext'
const Alert = () => {
    const alertContext = useContext(AlertContext)
    const {alert} = alertContext
    return (
        alert !== null && (
            <div className={`alert alert-${alert.type}`}>
                <i class='fas fa-info-circle'></i> {alert.message}
            </div>
        )
    )
}

export default Alert
