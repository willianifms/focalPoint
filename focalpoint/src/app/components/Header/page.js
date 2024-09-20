
import styles from "./header.module.scss"
import Image from 'next/image'
import * as moment from 'moment';
import 'moment/locale/pt-br';

moment.locale('pt-br')

let now = moment().format('LLLL').slice(0,36);

export default function Header(){

return(
<header className={styles.header}>

    
<section className = {styles.logo}>
<Image
src="/images/shape.png"
alt="Picture of the author"
width={33.1}
height={32.91}
/>
<Image
src="/images/logotype.png"
alt="Picture of the author"
width={106}
height={15}
className={styles.logoType}
/>
</section>

<section className={styles.welcome}>
    <p className={styles.welcome}>Bem-Vindo de volta, Marcus</p> 
</section>

<section> 
    <p className={styles.date}>{now}</p>
</section>
</header>

)




}