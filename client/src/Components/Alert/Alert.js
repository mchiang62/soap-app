import React, { Components, Component } from "react";

class Alert extends Component {
    constructor() {
        super()
        this.alertControl = this.alertControl.bind(this)
    }

    // alertControl() {
    //     if (typeof errors != 'undefined') {
    //         errors.foreach(function (error) {
    //             return error.msg;
    //         })
    //     }
    // }

    render() {
        return (
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                {this.alertControl.error.msg}
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        )
    }
}

export default Alert;
