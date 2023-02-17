import TotalComponent from "@/component/Total/TotalComponent.js"
import { useRouter } from "next/router"

const TotalPage = () =>{

    const router = useRouter()

    const {
        query : { count }
    } = router

    return (
        <>
            <TotalComponent count = {count} />
        </>
    )
}

export default TotalPage