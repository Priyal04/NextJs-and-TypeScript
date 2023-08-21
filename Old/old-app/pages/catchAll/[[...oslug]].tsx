import {useRouter } from 'next/router'

const CatchAllPage = () => {
  const router = useRouter();
  const {oslug} = router.query;
  console.log(oslug);
  return (
    <div><p>Post : {router.query.oslug}</p></div>
  )
}

export default CatchAllPage;