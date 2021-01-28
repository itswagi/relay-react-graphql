import React from 'react'
import { createFragmentContainer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

import List from './List'

const ListRender = (props) => {
    const renderedList = props.list.link.edges.map( ({node}) => (<List key={node.__id} item={node} />))

    return (
        <>
        {renderedList}
        </>
    )
}

export default createFragmentContainer(ListRender, 
    {
        list: graphql`
            fragment ListRender_list on Viewer {
                link {
                    edges {
                        node {
                            ...List_item
                        }
                    }
                }
            }
        `
    }
)