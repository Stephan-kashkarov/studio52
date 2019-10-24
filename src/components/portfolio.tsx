import React, { FC, Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import {Row, Col, Container} from 'react-bootstrap';

import "./styles/portfolio.css"

export type Item = {
    name: string
    description: string
    image: string
}

type ItemCardProps = {
    item: Item
}

type PortfolioProps = {
    items: Item[][]
}


const Portfolio = (items: PortfolioProps) =>(
    <Container className="cards">
        { items.items.map((items: Item[]) => {
                return (
                    <Row className="card-row container-top">
                        {items.map((item: Item) => {
                            return (
                                <Col>
                                    <ItemCard item={item}/>
                                </Col>
                            )
                        })}
                    </Row>
                )
            }
        )}
    </Container>
)

const ItemCard = (item: ItemCardProps) => (
    <div className="-card">
        <img className="card-image" src={require(`./images/${item.item.image}`)}/>
        <div className="card-overlay">
            <h3 className="card-text">
                {item.item.name}
            </h3>
            <hr/>
            <p className="card-text">
                {item.item.description}
            </p>
        </div>
    </div>
)
   
export default Portfolio;