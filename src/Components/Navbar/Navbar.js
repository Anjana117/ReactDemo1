import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css'
import Menu from '../../Menu_json_API/Menu.json'

function MainMenu({data})
{
  return(
    <>
    <Link to={data.link} className='nav-link' >{data.lable}</Link>
    </>
  )

}
function SubMenu({para})
{
  return(
    <>
    <NavDropdown title={para.lable} >
    {
      para.dropdownMenu.map((data,index)=>
      {
        return<MainMenu data={data} key={index} />
      })
    }
             
     </NavDropdown>
    </>
  )
}
function NavScrollExample({props}) {
  return (
    <Navbar expand="md" >
      <Container fluid="md">
        <Link to="/" className='navbar-brand'><img src={props.logo} width="45px" height="45px" alt='image'></img>&nbsp; <span>{props.name}</span></Link>
        <Navbar.Toggle aria-controls="navbarScroll" className='bg-light'/>
        <Navbar.Collapse id="navbarScroll">
          <Nav  className="mx-auto my-2 my-lg-0">
         {/* <Link to="/" className='nav-link'>Home</Link>
         <Link to="/about" className='nav-link'>About</Link>
         <Link to="/contact" className='nav-link'>Contact us</Link>
         <Link to="/service" className='nav-link'>Service</Link>
         <Link to="/blog" className='nav-link'>Blog</Link> */}

         {
        Menu.map((item,index)=>
        {
          if(item.isDropdown===true)
          {
            return <SubMenu para={item} key={index}/>
          }
          return <MainMenu data={item} key={index}/>
        })
         }
        </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;