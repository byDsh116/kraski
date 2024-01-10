const React = require('react')
const Layout = require('../Layout')

module.exports = function Account() {
    return (
        <Layout>
            <link rel="stylesheet" href="../css/style.css" />

            <h1>Account</h1>
            <button type="button" class="btn btn-outline-primary">Primary</button>
            <button type="button" class="btn btn-outline-success">Success</button>
        </Layout>

    )
}