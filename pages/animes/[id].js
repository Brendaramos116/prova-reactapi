import Pagina from '@/Components/Pagina'
import apiAnime from '@/services/apiAnime'
import Link from 'next/link'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { IoIosArrowRoundBack } from "react-icons/io";
import { IconName, HiArrowsExpand } from "react-icons/hi";

const Detalhes = ({ animes }) => {
    return (
        <>
        <Pagina titulo={animes.title}>
            <Row>
            <Col style={{width:'80%'}}>
            <Card>
                <Card.Header className='bg-danger text-light'>Foto</Card.Header>
                <Card.Body>
                    <Card.Img variant='top'  src={animes.images.jpg.image_url} />
                    <Link href={animes.images.webp.image_url} className='btn btn-primary'><HiArrowsExpand/>Ampliar</Link>
                </Card.Body>
            </Card>
            <Link href={'/animes/'} className='btn btn-success'><IoIosArrowRoundBack/>Voltar</Link>
            </Col>
            <Col>
            <Card>
            <Card.Header className='bg-danger text-light'>{animes.title}</Card.Header>
            <Card.Body>
            <p><strong>Episódios:</strong> {animes.episodes}</p>
            <p><strong>Status:</strong> {animes.status}</p>
            <p><strong>Ano:</strong> {animes.year}</p>
            <p><strong>Duração:</strong> {animes.duration}</p>
            <p><strong>Score:</strong> {animes.score}</p>
            <p>{animes.synopsis}</p>
            </Card.Body>
            </Card>
            </Col>
            </Row>
            </Pagina>
        </>
    )
}

export default Detalhes

export async function getServerSideProps(context) {

    const id = context.params.id

    const resultado = await apiAnime.get('/anime/' + id)
    const animes = resultado.data.data

    return {
        props: { animes }
    }

}
