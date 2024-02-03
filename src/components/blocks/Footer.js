import React from "react";

export default function Footer() {
    return <footer className={"p-16 flex flex-row"}>
        <div className={"business-wrapper"}>
            <a href="https://seventeeninfo.fr/?mtm_campaign=password_generator&mtm_kwd=footer_logo" target={"_blank"}>
                <img className={"h-8"}
                     src="https://res.cloudinary.com/seventeen-informatique/image/upload/v1704554040/identity/xvpr06elytiztfwir6ix.svg"
                     alt="Logo SEVENTEEN INFORMATIQUE"/>
            </a>
            <p className={"business-name"}>SEVENTEEN INFORMATIQUE</p>
            <p className={"business-location"}>La Tour du Pin / Lyon</p>
            <p className={"business-copyright"}>© 2024. Tous droits réservés.</p>
        </div>
    </footer>;
}