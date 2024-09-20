import styles from './style.module.scss'
import { FiTrash } from "react-icons/fi";


export default function ItemTarefa({tarefa}){

    return(
        <section className={styles.itemTarefa}>
            <input type="checkbox" className={styles.checkbox} />
            <p className={styles.tarefa}>{tarefa} teste</p>
            <button className={styles.btnTrash} ><FiTrash/> </button>
        </section>
    )

}