import React from 'react' 
import Figure from 'react-bootstrap/Figure'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Home(){
    return(
        <div>
            <Container>
                <Figure>
                    <Figure.Image
                        width={400}
                        height={400}
                        alt="Parents Portal - The place for families to get connected"
                        src="https://i.imgur.com/uIL00JK.png"
                    />
                </Figure>
                <Row>
                    <Col>
                        <h1>Welcome!</h1>
                        <p>Hello and welcome to Parents Portal. Our site allows parents to create events for other parents and children to join as well as share reviews, ask questions, and post comments in our forum section. Please use the navigation bar above to move about the site.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}