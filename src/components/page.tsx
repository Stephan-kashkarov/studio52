import React from 'react'
import {Link} from 'react-router-dom'
import {Container, Row, Col, Button} from 'react-bootstrap'
import { Item } from './portfolio'
import items from '../items.json'

import './styles/page.css'

function find(object: Array<Item>, key: number): Item {
    
    for (let i = 0; i < object.length; ++i) {
        let item: Item = object[i]
        console.log(item.id, key)
        if (item.id === key) {
            return item
        }
    }
    let def: Item = {
        "id": -1,
        "name": "No Item",
        "description": `There is no item under this id,
        Please mesege the webdeveloper if this is a problem`,
        "image": "logo.png"
    }
    return def
}

const ItemPage = (prop: any) => {
    let item: Item = find(items, +prop.match.params.id)

    if (item.description === "") {
        return (
            <Container className="no-text">
                <h1>
                    {item.name}
                </h1>
                <img src={require(`./images/pages/${item.image}`)} />
            </Container>
        )
    } else {
        return (
            <Container className='content'>
                <img src={require(`./images/pages/${item.image}`)}/>
                <h1 className="text-light">
                    {item.name}
                </h1>
                <hr />
                <p className="text-light">
                    {item.description}
                </p>
                <Link to="/portfolio">
                    <Button variant="secondary">Back</Button>
                </Link>
            </Container>
        );
    }
}

export default ItemPage