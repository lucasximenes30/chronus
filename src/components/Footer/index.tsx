import styles from'./styles.module.css';

export function Footer() {
    
    return <footer className={styles.footer}>
        <a href="">Entenda como funciona a técnica promodoro</a>
        <a href="">Chromos Promodoro &copy; {new Date().getFullYear()} - feito com ❤️</a>
    </footer>
        
}