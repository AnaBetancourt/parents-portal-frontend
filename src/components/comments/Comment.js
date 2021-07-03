import React from 'react' 
import Row from 'react-bootstrap/Row'

export default function Comment({body}){
    return(
        <div>
            <Row>
                <p>∘ {body}</p>
            </Row>
        </div>
    )
}