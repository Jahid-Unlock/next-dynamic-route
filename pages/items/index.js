
import Link from "next/dist/client/link";

export const getStaticProps = async ()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();


  return{
    props : { items : data }
  }
}


const items = ({items}) => {
  return (
    <div className="container py-5">
    <h1>Here is our all items</h1>
    {items.map((item)=>(
      <Link href={'/items/' + item.id} key={item.id}>
        <div><h4 className="item">{item.name}</h4></div>
      </Link>
    ))}
    </div>
  )
}

export default items