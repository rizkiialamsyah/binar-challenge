import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AccordionFAQ from "./AccordionFAQ"

const FiturFAQ = () => {
    return (
        <Container>
            <Row className="mt-5 px-sm-0 p-3 flex-sm-column gap-sm-4 gap-lg-0 gap-4 flex-lg-row">
                <Col lg={5}>
                    <h1>Frequently Asked Question</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </Col>
                <Col lg={7}>
                    <AccordionFAQ
                    text ='Apa saja syarat yang dibutuhkan?'
                    deskripsi='Kartu Identitas dan SIM'
                    />
                    <AccordionFAQ
                    text ='Berapa hari minimal sewa mobil lepas kunci?'
                    deskripsi='Minimal 1 Hari'/>
                    <AccordionFAQ
                    text ='Berapa hari sebelumnya sabaiknya booking sewa mobil?'
                    deskripsi='Minimal 7 Hari'
                    />
                    <AccordionFAQ
                    text ='Apakah Ada biaya antar-jemput?'
                    deskripsi='Tidak ada biaya antar-jemput'
                    />
                    <AccordionFAQ
                    text ='Bagaimana jika terjadi kecelakaan'
                    deskripsi='Tersedia pilihan untuk asuransi'
                    />
                    
                </Col>
            </Row>
        </Container>
    )
}

export default FiturFAQ;