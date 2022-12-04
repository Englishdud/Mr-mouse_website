import { Button, Card } from "react-bootstrap"
import '../App.css'

type StoreItemProps = {
    id: number
    name: string
    usdprice: number
    cadprice: number
    imgurl: string
}
export function StoreItem({ id, name, usdprice, cadprice, imgurl }: StoreItemProps){
    return <Card>
        <Card.Img variant="top" src={imgurl} height="200px" style={{objectFit: "cover"}} />
        <Card.Body className="d-flex flex-column"><Card.Title className="d-flex justify-content-between align-items-baseline mb-4"><span className="fs-2">{name}</span><span className="ms-2 text-muted">${usdprice}.00USD or ${cadprice}.00CAD</span></Card.Title><div className="mt-auto"><Button variant="outline-primary"><a href="https://buy.stripe.com/test_4gw6rY7SI9ZTgBW145" style={{ color: "black", }}>Purchase</a></Button></div></Card.Body>
    </Card>
}