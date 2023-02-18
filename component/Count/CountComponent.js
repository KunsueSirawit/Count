import styles from './Count.module.css'
import { useRecoilState } from 'recoil';
import { countState } from '../../atom/atoms';
import Link from 'next/link';
import { useEffect } from 'react';


const Count = () =>{

    const [ count , setCount ] = useRecoilState(countState)

    useEffect(()=>{
        const data = window.localStorage.getItem('Count')
        if (data !== null) setCount(JSON.parse(data))
        console.log(data)
    },[])


    useEffect(()=>{
        window.localStorage.setItem('Count' , JSON.stringify(count))
    },[count])


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