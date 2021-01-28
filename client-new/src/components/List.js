import React from 'react'
import { createFragmentContainer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'


const List = (props) => {
    return(
        <>
            {props.item.id}{props.item.title}{props.item.description}
        </>
    )
}

export default createFragmentContainer(
    List,
    {
        item: graphql`
            fragment List_item on Link {
                id
                title
                description
            }
        `
    }
)
