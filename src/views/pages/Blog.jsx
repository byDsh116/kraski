const React = require('react')
const Layout = require('../Layout')

module.exports = function Blog() {
    return (

        <Layout>
            <script defer src="/js/blog.js" />
            <h1>Blog</h1>
            <button className='api-button'>api</button>
        </Layout>

    )
}