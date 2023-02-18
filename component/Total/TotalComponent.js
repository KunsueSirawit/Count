import Link from "next/link"
import styles from './Total.module.css'
import { countState } from '../../atom/atoms';
import { useRecoilValue , useSetRecoilState } from 'recoil';
import { useEffect } from "react";


const TotalComponent = () =>{

    const count = useRecoilValue(countState);
    const setCount = useSetRecoilState(countState);

    useEffect(()=>{
        const data = window.localStorage.getItem('Count')
        setCount(JSON.parse(data))
    },[])

    return (
        <>
            <div className={styles.countContainer}>
                <h2 className={styles.total}> Counter is {count} </h2>
            </div>
            <Link href="/" className={styles.label}> 
            <label > Back To Home </label>
            </Link>
        </>
    )
}

export default TotalComponent