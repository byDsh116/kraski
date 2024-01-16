const React = require('react')
const Layout = require('../Layout')

module.exports = function Account({ user }) {
    return (
        <Layout email={user.email}>
            {/* <script defer src="/js/reg.js" /> */}
            <script defer src="/js/account.js" />

            <link rel="stylesheet" href="../css/style.css" />
            <div className='acc-div'>
                <h3>Привет, {user?.name} &#127807;</h3>
                <div className='acc-input_div'>
                    <input className='acc-input disabled' disabled={true} />
                    <input className='acc-input disabled' disabled={true} />
                </div>
                <div className='acc_btn-div'>
                    <button type="button" className="btn btn-outline-primary acc_btn">Редактировать</button><br />
                    <button type="button" className="btn btn-outline-danger btn-delete" userId={user?.id}>Удалить аккаунт</button>
                </div>

                {/* TODO: сделать что б плейсхолдере имя и емаил юзера отоброжались  */}
            </div>
        </Layout >

    )
}

// инпут дизеблед
// в плейсхолдере имя и емаил юзера
//при нажатии на кнопку редактировать инпуты раздезейбливаются

// TODO: 