import React from 'react' 

export default function Meetup({id, title, date, time, location, description, interested_count}){
    return(
        <div>
            <h1>{title}</h1>
            <h3>{date} | {time} | {location}</h3>
            <p>{description}</p>
            <h4>Interested: {interested_count}</h4>
            <br />
        </div>
    )
}