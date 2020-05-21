import React from "react"
import {Button} from "react-bootstrap";


class Buttons extends React.Component
{
    render() {
        return <Button className="button" variant={this.props.variant}>{this.props.value}</Button>
    }
}

export default Buttons
