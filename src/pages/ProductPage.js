import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/shopContext'
import { Text, Div, Button, Row, Col, Container } from 'atomize'

const ProductPage = () => {

    let { id } = useParams();
    const { fetchProductWithId, addItemToCheckout, product } = useContext(ShopContext)

    useEffect(() => {
        fetchProductWithId(id)
        return () => {

        }
    }, [ fetchProductWithId, id ])

    if(!product.title) return <div>Loading Product</div>

    return (
        <Container>
            <Row>
                <Col>
                    <Div bgImg={product.images[0].src} bgSize="cover" bgPos="center center" h="40rem"/>
                </Col>
                <Col>
                
                </Col>
            </Row>
        </Container>
    )
}

export default ProductPage
