import { Button, Card, Container } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  imgPosition: string;
};

export function StoreItem({
  id,
  name,
  price,
  imgUrl,
  imgPosition,
}: StoreItemProps) {
  const quantity = 0;
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{
          objectFit: "cover",
          objectPosition: imgPosition,
          boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.5)", // Customize the shadow color and size
          padding: "20px", // Adjust padding as needed
          borderRadius: "8px",
        }}
      />
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100">+ Add to Cart</Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: "0.5rem" }}
            >
              <div
                className="d-flex 
                align-items-center justify-content-center"
                style={{ gap: "0.5rem" }}
              >
                <Button>-</Button>
                <div>
                  <span className="fs-3">{quantity}</span> in Cart
                </div>
                <Button>+</Button>
              </div>
              <Button variant="danger">Remove</Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
