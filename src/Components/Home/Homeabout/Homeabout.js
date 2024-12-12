import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Homeabout.css'




function Homeabout() {
  const data = [
    {
      icon: "fa-solid fa-video fs-2",
      title: "BUSINESS MODEL",
      subtitle: "responsive navigation header, including support for branding, navigation, and more. Heesponsive navigation header, including support for branding, navigation, and more. Her"
    },
    {
      icon: "fa-solid fa-train fs-2 ",
      title: "BUSINESS EXECUTION",
      subtitle: "responsive navigation header, including support for branding, navigation, and more. Her esponsive navigation header, including support for branding, navigation, and more. He"
    },
    {
      icon: "fa-regular fa-lightbulb fs-2",
      title: "BUSINESS MONITORING",
      subtitle: "responsive navigation header, including support for branding, navigation, and more. Her esponsive navigation header, including support for branding, navigation, and more. He"
    }
  ]

  const Box = ({ data }) => {
    return (
      <Col className='d-flex'>
        <div className='box'>
          <i class={data.icon}></i>
          <h4>{data.title}</h4>
          <p>{data.subtitle}</p>
        </div>
      </Col>
    )
  }

  return (
    <section id='Homeabout'>
      <Container fluid className='py-5 p-lg-5'>
        <Row>
          <Col className='col-md-8'>
            <h1 style={{color:'#15b695'}}>Our About</h1>
            <p className='text-white'>A responsive navigation header, including support for branding, navigation, and more. Here’s an example of all the sub-components included in a responsive light-themed navbar that automatically collapses at the lg (large) breakpoint
              A responsive navigation header, including support for branding, navigation, and mor
              A responsive navigation header, including support for branding, navigation, and mor.</p>
          </Col>
        </Row>
        <Row>
          {
            data.map((item, index) => {
              return <Box data={item} key={index} />
            })
          }
        </Row>
      </Container>
    </section>
  )
}

export default Homeabout