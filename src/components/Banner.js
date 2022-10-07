import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import "../assets/img/Resume-Carol Dsilva.pdf";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(2);
  const [index, setIndex] = useState(0);
  const toRotate = [ "Media Artist", "AR Creator", "Programmer" ];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Hello World</span>
                <h1>{`I'm Carol D'silva`}</h1> <h1> <span className="txt-rotate" dataPeriod="2300" data-rotate='[ "Media Artist", "AR Creator", "Programmer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>As a passionate individual, I believe in putting my skills and innovation at the forefront of my work for one to experience. The end result? Coming up with ideas that really impress. To see what I’ve been up to, browse my site, learn about my passions, and explore what excites and interests you as well.</p>
                  <button onClick={() => console.log('connect')}><a href = "../assets/img/Resume-Carol Dsilva.pdf" download>Download Resume</a> <a href = "../assets/img/Resume-Carol Dsilva.pdf" download><ArrowRightCircle size={25} /></a> </button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
