import meter1 from "../assets/img/photoshop.png";
import meter2 from "../assets/img/premiere-pro.png";
import meter3 from "../assets/img/after-effects.png";
import meter4 from "../assets/img/python.png";
import meter5 from "../assets/img/illustrator.png";
import meter6 from "../assets/img/html.png";
import meter7 from "../assets/img/css.png";
import meter8 from "../assets/img/mysql.png";
import meter9 from "../assets/img/react.png";
import meter10 from "../assets/img/mic.png";
import meter11 from "../assets/img/lightroom.png";
import meter12 from "../assets/img/lensstudio.png";
import meter13 from "../assets/img/spark ar.png";
import meter14 from "../assets/img/blender.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Being a lifelong learner is a trait that is really important to me, and I know that a good education is not just for the schoolyard. Some lessons were learned in the traditional way, while others I have received from professional mentors, while working and in some cases, friends and family. Read about my professional journey and get in touch if you have any questions.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Adobe Photoshop</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Adobe Premiere Pro</h5>
                            </div>
                            <div className="item">
                                <img src={meter14} alt="Image" />
                                <h5>Blender</h5>
                            </div>
                            <div className="item">
                                <img src={meter6} alt="Image" />
                                <h5>Html 5</h5>
                            </div>
                            <div className="item">
                                <img src={meter7} alt="Image" />
                                <h5>CSS 3</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Adobe After Effects</h5>
                            </div>
                            <div className="item">
                                <img src={meter5} alt="Image" />
                                <h5>Adobe Illustrator</h5>
                            </div>
                            <div className="item">
                                <img src={meter12} alt="Image" />
                                <h5>Lens studio</h5>
                            </div>
                            <div className="item">
                                <img src={meter8} alt="Image" />
                                <h5>Mysql</h5>
                            </div>
                            <div className="item">
                                <img src={meter9} alt="Image" />
                                <h5>React JS</h5>
                            </div>
                            <div className="item">
                                <img src={meter10} alt="Image" />
                                <h5>Public Speaking</h5>
                            </div>
                            <div className="item">
                                <img src={meter11} alt="Image" />
                                <h5>Adobe Lightroom Classic</h5>
                            </div>
                            <div className="item">
                                <img src={meter13} alt="Image" />
                                <h5>Spark AR</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
