import React from "react";

export default function CardHeader({title, subtitle, className}) {
    return <div className={className + " card-header"}>
        <h2>{title}</h2>
        <p className="subtitle">{subtitle}</p>
    </div>
}