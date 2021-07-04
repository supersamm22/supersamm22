import "./page.css"
import React from 'react'
import FeedbackForm from "../components/form"
import { isLoggedIn } from "../helpers/loginHelp"
import Report from "../components/report"

export default function UserPage() {

    console.log("I am rendering again")
    const url = "";
    return (
        <div>
            <nav className="navbar navbar-light bg-light sticky-top">
                <div class="container-fluid">
                    <a className=" navbar-brand" href={url}>{isLoggedIn().user.name}</a>
                    <a className="navbar-brand d-flex" href={url}>Logo</a>
                </div>
            </nav>
            <div>
                <div className="row " style={{ height: "100vh" }}>
                    <div className="col-sm-3  p-0 no-float sticky fixed" style={{ backgroundColor: "#13274c" }}>
                        <div className="pt-5 m-5">
                            <button type="button" class="btn btn-primary btn-small">Bio Feedback</button>
                        </div>
                    </div>

                    <div className="col-sm-9 no-float formside">
                        <div className="container" >
                            <div className="row mt-5" >
                                <div className="col align-self-center m-5">
                                    <FeedbackForm />
                                </div>
                            </div>
                            <div className="row mt-5" >
                                <div className="col align-self-center m-5">
                                    <Report />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
