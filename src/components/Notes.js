import React from "react"

export const Notes = ({notes, onRemove}) => {
    return (
        <ul className="list-group">
            {notes.map(n => <li
                key={n.id}
                className="list-group-item note"
            >
                <div>
                    <strong className="title">{n.title}</strong>
                    <small className="date">{n.date}</small>
                </div>
                <button onClick={() => onRemove(n.id)} type="button" className="btn btn-outline-danger btn-sm">&times;</button>
            </li>)}
        </ul>
    )
}