import styles from './styles/main.module.scss';

function Main() {

    function loginWithGoogle() {
        console.log("Login with Google");
    }

    return (
        <main className={styles.main}>
            <h1>Welcome,</h1>
            <p>To download many of your Google Drive documents, you will need to log in with your Google acount.</p>
            <button
                className={styles.button}
                type='button'
                onClick={loginWithGoogle}
            >
                Login with Google
            </button>
        </main>
    );
}

export default Main;