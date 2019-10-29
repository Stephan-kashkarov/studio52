import React from 'react'
import {Link} from 'react-router-dom'
import {Container, Button, Carousel} from 'react-bootstrap'
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
        "image": ["logo.png"]
    }
    return def
}

const ItemPage = (prop: any) => {
    let item: Item = find(items, +prop.match.params.id)

    let imgs = <div></div>

    if (item.image.length == 1) {
        imgs = (<img src={require(`./images/pages/${item.image}`)} />)
    } else {
        imgs = (
            <Carousel>
                {item.image.map( (src_img) => (
                    <Carousel.Item>
                        <img src={src_img} />
                    </Carousel.Item>
                ))}
            </Carousel>
        )
    }

    let desc
    if (item.description != "") {
        desc = (<p className="text-light">
            {item.description}
        </p>)
    } else {
        desc = (<div></div>)
    }

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
                {imgs}
                <h1 className="text-light">
                    {item.name}
                </h1>
                <hr/>
                {desc}
                <Link to="/portfolio">
                    <Button variant="secondary">Back</Button>
                </Link>
            </Container>
        );
    }
}

export default ItemPage