import { Col } from "react-bootstrap";
import {useState} from 'react';
import Modala from "./Modal/Modala";

export const ProjectCard = ({ title, description, linktext, imgUrl, link }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} href={link} target="_blank" />
        <div className="proj-txtx">
            <a href={link} target="_blank"><h4>{title}</h4>
            <span>{description}</span><br></br><span>{linktext}</span></a>

            {/* {openModal && <Modala closeModal={setOpenModal}/>}
            
            <button className="openModalBtn" onClick={() => {setOpenModal(true)}}>Open</button>
            <a class="link" href={link} target="_blank">Click me to learn more</a> */}
        </div>
      </div>
    </Col>
  )
}
