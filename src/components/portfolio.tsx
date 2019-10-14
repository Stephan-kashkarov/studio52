import React, { FC, Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import {Row, Col, Container} from 'react-bootstrap';

type Item = {
    name: string
    description: string
    image: string
}

type ItemCardProps = {
    item: Item
}

type PortfolioProps = {
    items: Array<Item>
}

type PortfolioState = {
    page: number
    pageSize: number
}

class Portfolio extends Component<PortfolioProps, PortfolioState>{

    constructor(props: PortfolioProps){
        super(props)

    }

    render() {
        const show: Array<ItemCard> = []
        
        for (let i = this.state.page; i < this.state.page + this.state.pageSize; ++i) {
            show.push(<ItemCard item={this.props.items[i]} />)
        }
        return (
            <Container>
                { show }
            </Container>
        )
    }   
}

class ItemCard extends Component<ItemCardProps> {

    constructor(props: ItemCardProps) {
        super(props)
    }

    render () {
        return <h1>hello</h1>
    }
}

export default Portfolio;