import Link from "next/link"

const Not_found = () => {
  return (
    <div className="container">
        <h1>Opps! Look like you are lost!</h1>
        <p>back to  <Link href="/"> Home</Link></p>
    </div>
  )
}

export default Not_found