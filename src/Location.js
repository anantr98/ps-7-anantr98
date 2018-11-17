import React, { Component } from 'react';
import * as d3 from 'd3';
import { Card, Button, CardBody, CardTitle, CardText, Col } from 'reactstrap';

export class Locations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        d3.csv('data/BigUSCities.csv').then(data => {
            this.setState({
                data: data
            })
            console.log(this.state.data)
        })
    }
    render() {
        console.log(this.state.data)
        return <div className="container">Locations
            {this.state.data.map((dataOne, b) => {
                return (
                    <Card key = {"Locations" + b}>
                        <CardBody>
                            <CardTitle>{dataOne.City}</CardTitle>
                            {<CardText>{dataOne.Country}</CardText>}
                        </CardBody>
                    </Card>
                )
            })}

                       </div>
    }
}