import { useState } from "react"
import styles from './Count.module.css'
import Router from "next/router"


const Count = () =>{

    const [ count , setCount ] = useState(0)

    function sendProps(){
        Router.push({
            pathname: "/total",
                query:{
                    count
                }
        })
    }


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
            <button className={styles.total} onClick={()=>sendProps()}> Total </button>
        </>
    )
}

export default Count