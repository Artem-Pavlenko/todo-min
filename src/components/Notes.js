import React from "react"
import {TransitionGroup, CSSTransition} from "react-transition-group"

export const Notes = ({notes, onRemove}) => {
    return (
        <TransitionGroup component="ul" className="list-group">
            {notes.map(n => <CSSTransition key={n.id} classNames="note" timeout={1000}>
                <li className="list-group-item note">
                    <div>
                        <strong className="title">{n.title}</strong>
                        <small className="date">{n.date}</small>
                    </div>
                    <button onClick={() => onRemove(n.id)} type="button"
                            className="btn btn-outline-danger btn-sm">&times;</button>
                </li>
            </CSSTransition>)}
        </TransitionGroup>
    )
}