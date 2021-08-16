import React,{Fragment} from "react";
import Hamburger from "./Hamburger";
import JoinForm from "./JoinForm";
import Covid19Counter from "./Covid19Counter";
export default function Projects(){
    return (
        <Fragment>
            <header className="App-header" id="main page">
                <nav className="nav_stripe">
                    <a className="projects-edit" href="/"><p className="edit-p"><b>Strona główna</b></p></a>
                    <h1>Eden Initiative</h1>
                    <span/>
                </nav>
            </header>
        </Fragment>
    );
}