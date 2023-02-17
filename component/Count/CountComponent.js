import styles from './Count.module.css'
import { useRecoilState } from 'recoil';
import { countState } from '../../atom/atoms';
import Link from 'next/link';

const Count = () =>{

    const [ count , setCount ] = useRecoilState(countState)

    function add(){
        setCount(count + 1)
    }

    function minus(){
        setCount(count - 1)
    }

    return(
        <>
            <div className={styles.countContainer}>
            <button className={styles.button} onClick={()=>minus()}>  - </button>
            <h1> {count} </h1>
            <button className={styles.button} onClick={()=>add()}>  + </button>
            </div>
            <Link href="total" className={styles.total}>
            <label> Total </label>
            </Link>
        </>
    )
}

export default Count