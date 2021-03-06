export const getStaticPaths = async ()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();


    const paths = data.map((item)=>{
        return{
            params : { id : item.id.toString() }
        }
    })

    return{
        paths,
        fallback: false
    }
}




export const getStaticProps = async (context)=>{
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    
    return{
        props : { item : data}
    }

}

const Details = ({item}) => {
  return (
    <div className="container py-5">
        <h2>Name : {item.name}</h2>
        <p>Username : {item.username}</p>
        <p>Email : {item.email}</p>
        <p>City: {item.address.city}</p>
    </div>
  )
}

export default Details;



  

