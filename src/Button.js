import React from "react";
import { Button } from 'reactstrap';

export default (props) => {
    return <Button color={props.color} onClick={props.onClick}>{props.title}</Button>
};