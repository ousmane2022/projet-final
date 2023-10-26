import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import paymentData from "./payments";
import payment from "./payments";
import ButtonDropdown from "./components/ButtonDropdown";

function Payment() {
  return (
    <div className="d-flex flex-wrap mx-auto" style={{ width: "50rem" }}>
      {paymentData.map((payment, index) => (
        <Card bg="dark" text="light" style={{ width: "18rem" }} className="m-4">
          <Card.Img variant="top" src={payment.url} />
          <Card.Body>
            <Card.Title className="text-primary">{payment.nom}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <div>
              <ButtonDropdown />
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Payment;
