import React from "react";

export default function Header({title, description, children}) {

    return (
        <header>
            <div>
                <h1>{title}</h1>
                <p className="subtitle">{description}</p>
            </div>
            {children}
        </header>
    );

}