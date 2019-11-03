import React from 'react';
import { Link } from 'react-router-dom';
import {Col, Container} from 'react-bootstrap';

import "./styles/portfolio.css"

export type Item = {
    id: number
    name: string
    description: string
    image: Array<string>
}

type ItemCardProps = {
    item: Item
}

type PortfolioProps = {
    items: Item[][]
}


const Portfolio = (items: PortfolioProps) => (
    <table className="cards">
        { items.items.map((items: Item[]) => {
                return (
                    <tr className="card-row container-top">
                        {items.map((item: Item) => {
                            return (
                                <td className='centered column'>
                                    <Link to={`/pages/${item.id}`} className="Col-link">
                                        <ItemCard item={item}/>
                                    </Link>
                                </td>
                            )
                        })}
                    </tr>
                )
            }
        )}
    </table>
)

const ItemCard = (item: ItemCardProps) => (
    <div className="-card">
        <img className="card-image" src={require(`./images/pages/${item.item.image[0]}`)}/>
        <div className="card-overlay">
            <div className="card-text">
                <h3>
                    {item.item.name}
                </h3>
                <hr/>
                <p>
                    Click for more
                </p>
            </div>
        </div>
    </div>
)
   
export default Portfolio;