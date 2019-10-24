import React from 'react'
import {Link} from 'react-router-dom'
import {Container, Row, Col} from 'react-bootstrap'
import { Item } from './portfolio'
import items from '../items.json'

function find(object: Array<Item>, key: number): Item {
    
    for (let i = 0; i < object.length; ++i) {
        let item: Item = object[i]
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
    let item: Item = find(items, prop.match.params)
    


    return (
        <Container>
            <Row>
                <Col className="image-col">
                    <img src={require(`./images/${item.image}`)}/>
                </Col>
                <Col className="text-col">
                    <h1>{item.name}</h1>
                    <hr/>
                    <p>{item.description}</p>
                </Col>
            </Row>
        </Container>
    );
}

export default ItemPage