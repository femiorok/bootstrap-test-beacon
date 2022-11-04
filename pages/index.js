import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import School from "./components/School";
import { Container, Stack, Row } from "react-bootstrap";
import Searchbar from "./components/Searchbar";

export default function Home() {
  console.log(styles);
  return (
    <Container className={styles.main}>
      <Searchbar className={styles.search} />
      <Stack gap={2} className={styles.schoolList}>
        <School />
        <School />
        <School />
        <School />
        <School />
        <School />
        <School />
        <School />
        <School />
        <School />
        <School />
        <School />
        <School />
        <School />
        <School />
        <School />
        <School />
        <School />
        <School />
        <School />
        <School />
        <School />
        <School />
      </Stack>
    </Container>
  );
}
