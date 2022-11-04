import React from "react";
import { Button, Row, Col, Container } from "react-bootstrap";
import styles from "../../styles/Home.module.css";

const School = () => {
  return (
    <Container className={styles.schoolCard}>
      <Row className="h-100">
        <Col xs={1} className={styles.schoolBadge}>
          <div className={styles.schoolInitial}>S</div>
        </Col>
        <Col
          xs={10}
          className="h-100 d-flex flex-column justify-content-center text-start"
        >
          <h5 className="my-0 py-0 fw-bolder">Alabama A & M University</h5>
          <p className="fw-normal fs-6 my-0 py-0">Madison</p>
        </Col>
      </Row>
    </Container>
  );
};

export default School;
