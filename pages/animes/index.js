import Pagina from '@/Components/Pagina'
import apiAnime from '@/services/apiAnime'
import Link from 'next/link'
import React from 'react'
import { Col, Row, Table } from 'react-bootstrap'
import { GoSearch, IconName } from "react-icons/go";

const index = ({ anime }) => {
    return (
        <>
            <Pagina titulo='Anime'>
                <Row>
                    <Col>
                        <Table striped bordered hover>
                            <thead >
                                <tr>
                                    <th>Detalhes</th>
                                    <th>Título</th>
                                    <th>Duração</th>
                                    <th>Ano</th>
                                </tr>
                            </thead>
                            <tbody>
                                {anime.map(item => (
                                    <tr>
                                        <td>
                                            <Link href={'/animes/' + item.mal_id} className='btn btn-success'><GoSearch /> Detalhes aqui <GoSearch /></Link>
                                        </td>
                                        <td>{item.title}</td>
                                        <td>{item.duration}</td>
                                        <td>{item.year}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Pagina>
        </>
    )
}

export default index

export async function getServerSideProps(context) {

    const resultado = await apiAnime.get('/anime')
    const anime = resultado.data.data

    return {

        props: { anime },
    }
}