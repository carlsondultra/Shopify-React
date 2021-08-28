import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/shopContext'
import { Container, Text, Div, Row, Col } from 'atomize'

const HomePage = () => {

    const { fetchAllProducts, products } = useContext(ShopContext)

    useEffect(() => {
        fetchAllProducts()
        return () => {

        };
    }, [fetchAllProducts])

    if(!products) return <div>Loading</div>
    return (
        <Container>
            <Row>
                {products.map(product => (
                    <Col key={product.id}>
                        <Text>{product.title}</Text>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default HomePage
