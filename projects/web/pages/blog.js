import gql from 'graphql-tag'
import { array } from 'prop-types'
import React from 'react'
import { Query } from 'react-apollo'

import Article from '../components/Article'

const blogQuery = gql`
    {
        blogs {
            id
            content
            title
        }
    }
`

const Blog = ({ articles }) => (
    <Query query={blogQuery}>
        {({ loading, error, data }) => {
            if (loading) return 'Loading...'
            if (error) return `Error ${error.message}`

            return (
                <div>
                    {data.articles.map(({ id, content, title }) => (
                        <div key={id}>
                            <p>{title}</p>
                            <Article content={content} id={id} />
                        </div>
                    ))}
                </div>
            )
        }}
    </Query>
)

Blog.propTypes = {
    articles: array,
}

Blog.displayName = 'Blog'

export default Blog