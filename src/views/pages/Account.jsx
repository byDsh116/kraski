const React = require('react')
const Layout = require('../Layout')

module.exports = function Account({ user }) {
    return (
        <Layout>
            <link rel="stylesheet" href="../css/style.css" />
            <div>
                <h1>Account</h1>


                <button type="button" class="btn btn-outline-primary">Редактировать</button>
                <button type="button" class="btn btn-outline-danger">Удалить аккаунт</button>
            </div>
        </Layout>

    )
}