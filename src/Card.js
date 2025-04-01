import React from "react";
import { Card } from 'reactstrap';

export default (props) => {
    return <Card color={props.color} onClick={props.onClick}>{props.title}</Card>
};