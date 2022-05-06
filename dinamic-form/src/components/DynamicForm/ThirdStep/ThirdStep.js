import { Col, Container, Row, FloatingLabel, Form } from "react-bootstrap";
import "./ThirdStep.css";

const ThirdStep = () => {
  return (
    <div>
      <h2>Third step</h2>
      <h4>Do you want to add any comment?</h4>
      <Container className="p-5 text-center">
        <Row className="justify-content-md-center">
          <Col lg="10">
            <FloatingLabel
              controlId="floatingTextArea"
              label="Comments"
              className="mb-3"
            >
              <Form.Control
                as="textarea"
                placeholder="Comments"
                onChange={(e) => console.log(e)}
              />
            </FloatingLabel>
          </Col>
        </Row>
        <div className="send-form">
          <p className="result p-3" onClick={() => console.log("view result")}>
            View Result 🙌
          </p>
        </div>
      </Container>
    </div>
  );
};

export default ThirdStep;
