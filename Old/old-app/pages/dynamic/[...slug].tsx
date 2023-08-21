'use client'
import {useRouter} from 'next/router'

const DynamicPage = () => {
    const router = useRouter();
    const {slug } = router.query;

    console.log(slug);

    return(
    <div><p>Post : {router.query.slug}</p></div>
    )
}
export default DynamicPage;