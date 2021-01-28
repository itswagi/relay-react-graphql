import React, { useState } from 'react'

export const CreateLink = () => {
    const [ title, setTitle]  = useState('')
    const [ description, setDescription ] = useState('')

    const _createLink = () => {
        
    }
    return(
        <div>
            <div>
                <input 
                    value={title}
                    onChange={ (event) => setTitle(event.target.value)}
                    type="text"
                    placeholder="Title"
                />
                <input 
                    value={description}
                    onChange={ event => setDescription(event.target.value)}  
                    type="text"
                    placeholder="description"
                />
                <div onClick={_createLink}>
                    Submit
                </div>
            </div>
        </div>
    )

}