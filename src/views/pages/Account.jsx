const React = require('react')
const Layout = require('../Layout')

module.exports = function Account({ user }) {
    return (
        <Layout>
            <script defer src="/js/reg.js" />
            <link rel="stylesheet" href="../css/style.css" />
            <div className='acc-div'>
                <h1>Account</h1>
                <div>
                    hey
                    {user?.name}
                </div>

                <button type="button" class="btn btn-outline-primary">Редактировать</button>
                <button type="button" class="btn btn-outline-danger">Удалить аккаунт</button>
            </div>
        </Layout>

    )
}