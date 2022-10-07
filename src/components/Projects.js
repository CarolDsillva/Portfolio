import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img3.jpg";
import projImg4 from "../assets/img/project-img4.jpg";
import projImg5 from "../assets/img/project-img5.jpg";
import projImg6 from "../assets/img/project-img6.jpg";
import Modala from "./Modal/Modala";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { ReactDOM } from "react";
import Card from "./Card"

export const Projects = () => {

  const projects = [
    {
      title: "3D Modelling and Animation",
      description: "Blender and Unreal Engine",
      linktext: "Click to learn more",
      imgUrl: projImg1,
      link: "https://caroldsillva.wixsite.com/sections/3d",
    },
    {
      title: "Augmented Reality",
      description: "Spark AR Studio and Lens Studio",
      linktext: "Click to learn more",
      imgUrl: projImg2,
      link: "https://caroldsillva.wixsite.com/sections/ar",
    },
    {
      title: "Programming",
      description: "Python, HTML, CSS, React js & Mysql",
      linktext: "Click to learn more",
      imgUrl: projImg3,
      link: "https://github.com/Carol-Dsillva",
    },
    {
      title: "Video editing",
      description: "Adobe Premiere Pro and Adobe After effects",
      linktext: "Click to learn more",
      imgUrl: projImg4,
      link: "https://caroldsillva.wixsite.com/sections/videoediting",
    },
    {
      title: "Digital Art and NFT's",
      description: "Adobe illustratore, Adobe Photoshop & Blender",
      linktext: "Click to learn more",
      imgUrl: projImg6,
      link: "https://caroldsillva.wixsite.com/sections/digitalart",
    },
    {
      title: "Photo Editing and Restoration",
      description: "Adobe Photoshop & Adobe Illustrator",
      linktext: "Click to learn more",
      imgUrl: projImg5,
      link: "https://caroldsillva.wixsite.com/sections/photoediting",
    },
  ];

  
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Portfolio</h2>
                <p className="main">The following is a collection of my latest and most meaningful projects. Each piece is unique in style and content and represents a distinct moment in my career.</p>
                
                <br></br>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Sections</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Education</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Experience</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <section className='Resume' id='resume'>
        <div className='container top'>

          <div className='content-section mtop d_flex'>
            <div className='left'>
              <div className='heading'>
                <h4>2010-Present</h4>
                <h1>Education</h1>
              </div>
              
            </div>
            <div>            
              <h2>Bachelor of Technology</h2>
              <h5>(2022 - present)</h5>
              <hr></hr>
              <p></p>
            </div>
            <br></br>
            <br></br>
            <div>            
              <h2>High School Diploma (AISSCE)</h2>
              <h5>CMR National Public School (2020 - 2022)</h5>
              <hr></hr>
              <p className="text">Grade: Distinction | Activities and societies: Music club <br></br>
              <ul>
                <li>Represented the school at an intercollegiate fest and competition organized by a prestigious institution in the district.</li>
                <li>Designed a useful and elegant digital experience for a website helping in the field of medicine and healthcare from start to finish.</li>
              </ul></p>
            </div>
            <br></br>
            <br></br>
            <div>            
              <h2>Secondary School Diploma (AISSE)</h2>
              <h5>Lake Montfort School (2010 - 2020)</h5>
              <hr  align="center"></hr>
              <p className="text">Grade: Distinction | Activities and societies: Athletics and Basketball team, School Choir, Public speaking (Emcee) <br></br> 
              <ul>
                <li>French subject topper</li>
                <li>Filmotsav - Intra school film festival finalist</li>
                <li>Represented school in intercollegiate fest - Genesis</li>
                <li> Emcee at the annual Christmas program and other public functions.</li>
                <li>Numerous athletics and sports events including a Reliance-sponsored event and AINACS at the district level.</li></ul></p>
            </div>
          </div>
        </div>
      </section>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <div className='container top'>
                    <h4>2020-Present</h4>
                <h1>Work Experience</h1>
                <div>         
                  <br></br>   
              <h2>UI/UX Design</h2>
              <h5>November 2020 – January 2022</h5>
              <hr  align="center"></hr>
              <p className="text">Created and designed a website called 'Medical Journal'. Worked both on the front end and backend of the website using programming languages(python, java, HTML, and CSS).
              <ul>
                <li>Designed a useful and elegant digital experience for a website helping in the field of medicine and healthcare from start to finish(research, design, test, implement) as the lead. </li>
                <li>In less than 2 months designed eloquent flow and structure of the website along with a fully functioning module for communication</li>
                <li>Fostered collaboration and consistency alongside team members.</li>
                <li>Presented website to a board of members, answering questions and receiving feedback for the same.</li>
                <li>Website report: <a href="https://bit.ly/3uhOowG" target="_blank">Click here</a></li>
              </ul>
              </p>
              <br></br>
              <h2> Augmented Reality Effects Developer </h2>
              <h5>July 2021 – Present</h5>
              <hr  align="center"></hr>
              <p className="text">
              <ul>
                <li>Created augmented reality filters and effects for use on Facebook, Instagram, Snapchat and messenger. </li>
                <li>Integrated 3D elements into world scenes to create an immersive digital experience.</li>
                <li>Worked alongside content creators to cater to their AR needs and ideas.</li>
                <li>Increased impressions to over 185 million and opens to over 35 million in less the one year for instagram and facebook filters.</li>
                <li>Increased views to over 95 million and opens to over 80 million in 5 months while creating more than 500 snapchat lenses.</li>
                <li>Instagram & Facebook AR effects: <a href="https://www.facebook.com/sparkarhub/portfolios/ig/caroldsillva/" target="_blank" >Click to see effects</a></li>
                <li>Snapchat Lenses: <a href="https://lensstudio.snapchat.com/creator/QxlKO9TROx4ofviOXKZdaQ" target="_blank" >Click to see effects</a></li>
              </ul>
              </p>
              <br></br>
              <h2>Video Editor </h2>
              <h5>May 2021 – Present</h5>
              <hr  align="center"></hr>
              <p className="text">              <ul>
                <li>Provided digitization and editing of podcast videos for influencers while meeting tight deadlines.</li>
                <li>Also edited a podcast to be online on popular streaming platforms such as Spotify, anchor, and RSS.</li>
                <li>Worked on Apple and Windows 10/11 computers.</li>
                <li>Worked closely with influencers to create content and worked on merchandise designing from stickers to T-shirts.</li>
                <li>Created video trailers for use on YouTube.</li>
                <li>Edited music videos and lyric videos for musical artists. Cinematic travel video and vlogs for influencers as well as social media content like posts/reels.</li>
                <li>Video editing showreel: <a href="https://youtu.be/llNsbJ3LLVs" target= "blank" >Click here to watch</a></li>
              </ul>
              </p>
              <br></br>
              <h2>Photo Editor </h2>
              <h5>May 2021 – Present</h5>
              <hr  align="center"></hr>
               <p><ul>
                <li>Time managed the photo editing process between curating, editing, labeling, approving, uploading, reediting, and archiving. Maintained image quality while cropping, color correcting, sizing, and retouching.</li>
                <li>Assigning/Editing/processing incoming content for internal &amp; external clients</li>
                <li>Restoring/recovering images for clients and colorizing images in order to re-imagine the past.</li>
                <li>Created movie/short film posters. </li>
                <li>Created Thumbnail for youtube and social media post.</li>
              </ul>
              </p>
            </div>
          <div className='heading text-center'>
          </div>
        </div> 
                      
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
