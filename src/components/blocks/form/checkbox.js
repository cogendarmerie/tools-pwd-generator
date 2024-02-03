import React from "react";
import { CheckIcon } from "@heroicons/react/24/outline";

export default function Checkbox({name, checked, onChange, label, id}) {
    return (
        <label className={"checkbox-container"} htmlFor={id}>
            <input type="checkbox" id={id} name={name} defaultChecked={checked} onChange={onChange}/>
            <div className={"checkbox"}>
                <CheckIcon/>
            </div>
            {label}
        </label>
    );
}