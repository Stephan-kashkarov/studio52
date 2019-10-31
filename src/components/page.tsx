import React, {FC} from 'react'
import { Link } from 'react-router-dom'
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

const ItemPage: FC = (prop: any) => {
    let item: Item = find(items, +prop.match.params.id)

    let imgs = <div></div>

    if (item.image.length === 1) {
        console.log(1)
        imgs = (<img className="normal-img" src={require(`./images/pages/${item.image[0]}`)} />)
    } else {
        console.log(2)
        imgs = (
            <Carousel>
                {item.image.map((src_img) => (
                    <Carousel.Item>
                        <img className="carousel-img" src={require(`./images/pages/${src_img}`)} />
                    </Carousel.Item>
                ))}
            </Carousel>
        )
    }

    return (
        <Container className='content'>
            {imgs}
            <h1 className="text-light title">
                {item.name}
            </h1>
            <hr/>
            <p className="text-light text-content">
                {item.description}
            </p>
            <Link to="/portfolio">
                <Button variant="secondary" className="Button">Back</Button>
            </Link>
        </Container>
    );
}

export default ItemPage