import React from 'react'

function list({people}) {
  return ((
    <div>
        {people.map((person) => {
            return (
                <article key={person.id} className='person'>
                <img src={person.image} />
                    <div>
                        <h4>{person.name}</h4>
                        <p>{person.age}</p>
                    </div>
            </article>
            )
        })}

    </div>
    )
  )
}

export default list