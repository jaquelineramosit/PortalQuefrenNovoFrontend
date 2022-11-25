import styles from "./Login.module.css"
import logoEmpresa from "../../assets/logoEmpresa.svg"

export function Login() {
    return (
        <div className={styles.cardLogin}>
            <header>
                <h1>Entrar</h1>
                <img src={logoEmpresa} alt="Logo Empresa" />
            </header>
            
            <form action="#">
                <label htmlFor="login">Usuário</label>
                <input type="text" name="login" id="login" />                    
            
                <label htmlFor="password">Senha</label>
                <input type="password" name="password" id="password" />                    
                
                <div className={styles.linksExternos}>
                    <a href="#">Esqueci minha senha</a>
                    <a href="#">Criar uma conta</a>
                </div>
                <input type="button" value="Login" />
            </form>
        </div>
    )
}