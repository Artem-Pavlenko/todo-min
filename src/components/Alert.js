import React, {useContext} from "react"
import {AlertContext} from "../context/alert/alertContext";
import {CSSTransition} from 'react-transition-group'

export const Alert = () => {

    const {alert, hide} = useContext(AlertContext)

    if (!alert.visible) return null

    return (
        <CSSTransition
            in={alert.visible}
            timeout={{
                enter: 500,
                exit: 350
            }}
            classNames={'alert'}
            // mountOnEnter
            unmountOnExit
        >
            <div className={`alert alert-${alert.type || 'warning'} alert-dismissible alertBlock`}>
                {alert.text}
                <button
                    onClick={hide}
                    type="button"
                    className="btn btn-outline-dark btn-sm"
                    aria-label="Close"
                >
                    &times;
                </button>
            </div>
        </CSSTransition>
    )
}