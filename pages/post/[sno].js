import { useRouter } from 'next/router'

const Post = () => {
    const router = useRouter();
    const {sno} = router.query
  return (
    <div>
        <h1>Post : : {sno}</h1>
      
    </div>
  )
}

export default Post
