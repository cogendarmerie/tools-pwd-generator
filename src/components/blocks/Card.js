import React from "react";

export default function Card({ children, className }) {
    return <div className={className + " card"}>
        {children}
    </div>;
}