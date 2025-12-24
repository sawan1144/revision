import Post from './Post'

function App() {
  const data = {
    namee: 'Harkirat Singh',
    img: "https://media.licdn.com/dms/image/v2/C5603AQFbOqG9og1S5g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1517251237812?e=1768435200&v=beta&t=uw3bJkVKX1C1GVPH0VMNOMWzbE2XLw7Rp6QN9wibnHw",
    title: '1000 followers',
    des: "Want to know how to win big than join the the bootcamp 1.0"
  }

  return (
  <div>
    {/* <button className='bg-gray-500'>Add Posts</button> */}
    <Post {...data}/>
  </div>
  )
} 

export default App
