
import { FaSpinner } from 'react-icons/fa';
import styles from './Loading.module.css';

export function Loading() {
    return (
        <div className={styles.spinner}>
            <FaSpinner className={styles.spinning} size={60}/>//esto es para que me traiga el icono de cargando importado arriba
        </div>
    );
}
