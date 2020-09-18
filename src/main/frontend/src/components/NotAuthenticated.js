import React from "react";

class NotAuthenticated extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <div className="row justify-content-center">
                <h1 className="text-danger">You are not allowed to do it</h1>
            </div>
        );
    }
}

export default NotAuthenticated;