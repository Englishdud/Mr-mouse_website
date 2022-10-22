import "../styles.css"

export function Home() {
  return (<>
    <div onClick={() =>{console.log("Clicked")}} id="titleDiv"><h1 className="text-center">Welcome. <br /> Mrmouse</h1></div>
    <div id="center"><button className="btn btn-primary" id="center"><a href="/store">Store</a></button></div>
    </>
  )
}