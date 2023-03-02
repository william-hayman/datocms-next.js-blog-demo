// components/footer.js

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link'
import Script from 'next/script'

import Image from 'next/image'
import logotipo from '../public/logo.webp'

import styles from '../styles/Footer.module.scss'

function Footer()  {
    return (
      <>
        <footer className={styles.footer}>
            <Container>
                <Row>
                    <Col sm={6} className={styles.alignLeft + ' text-center text-md-start'}>
                      <Image src={logotipo} alt="Hayman-Woodward" quality='100' className={styles.logo + ' '}/>
                    </Col>
                    <Col sm={6} className={styles.alignRight + ' text-center text-md-end'}>
                      HAYMAN-WOODWARD IMMIGRATION LAW FIRM LLP is a United States-based immigration law firm. With its global headquarters positioned in the heart of Washington, D.C., HAYMAN-WOODWARD IMMIGRATION LAW FIRM LLP is dedicated to supporting individuals and business entities in its quest to BUILD VALUE ACROSS BORDERS. HAYMAN-WOODWARD is a trade name used under license from HAYMAN-WOODWARD Holdings Inc. and does not in any way makes reference to former or current named partner or specific lawyer in the practice.
                      <br />
                      <strong className='mt-2 d-block'>© HAYMAN-WOODWARD IMMIGRATION LAW FIRM LLP - is a Washington, D.C. based law firm - Practice is limited to immigration and International Business law.</strong>
                    </Col>
                    <Col sm={12} className={styles.alignCenter + ' text-center py-5'}>
                    © 2023 Hayman-Woodward designed by <span>Hay Branding</span>.
                    </Col>
                </Row>
            </Container>
        </footer>
      </>
    );
  }

export default Footer;