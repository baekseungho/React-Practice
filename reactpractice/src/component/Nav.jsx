import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function PillsExample() {
  return (
    <Nav variant="pills" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="/menu1">
          <Link to="/menu1">menu1</Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">
          <Link to="/menu2">menu2</Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3">
          <Link to="/menu3">menu3</Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default PillsExample;
