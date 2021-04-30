import cl from './Header.module.css';

const Header = (props) => {
    return (
        <header className={cl.header}>
            <img src='https://upload.wikimedia.org/wikipedia/ru/c/cf/Лобос_УПНФМ_%28лого%29.png'/>
            <div className={cl.authBar}>
                {props.isAuth ? props.login : <a>Login</a>}
            </div>
        </header>
    )
};

export default Header;