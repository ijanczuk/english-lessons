/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Spinner,
  Alert,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function LandingPage() {
  const [formStatus, setFormStatus] = React.useState('open'); // open, submitting, error
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    message: ''
  });
  const [formMessage, setFormMessage] = React.useState(undefined);
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

  const handleSendMessage = () => {
    let url = `https://scripts.google.com/macros/s/AKfycbzHQ_wMRnz4SBM6n-Wz0KLjkXlLIuW5rt2Jl12zJdlPThdAzjjg/exec?name=${
      encodeURIComponent(form.name)
    }&email=${
      encodeURIComponent(form.email)
    }&message=${
      encodeURIComponent(form.message)
    }&time=${
      encodeURIComponent(new Date())
    }`;
    setFormStatus('submitting');
    window.fetch(url, { method: 'POST' }).then(response => {
      console.log('SUCCESS', response.status, response.ok);
      setFormStatus('open');
      if (response.ok) {
        setForm({
          name: '',
          email: '',
          message: ''
        });
        setFormMessage({ error: false, message: 'Thank you for your interest. I will get back to you within 24h.'});
      }
      else {
        setFormMessage({ error: true, message: 'Oops! There was a problem saving your infromation. Please try again or send me an e-mail at iza@janczuk.org.'});
      }
    }, error => {
      console.log('ERROR', error);
      setFormStatus('open');
      setFormMessage({ error: true, message: 'Oops! There was a problem saving your infromation. Please try again or send me an e-mail at iza@janczuk.org.'});
    });
  };

  const formValid = form.name && form.email && form.message;

  return (
    <>
      <ExamplesNavbar />
      <LandingPageHeader />
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">English conversations and tutoring</h2>
                <h5 className="description">
                  Need help with revising an essay, practicing asking and answering questions, writing letters, 
                  correct grammar use, reading and analyzing an article, or just having a back and forth conversation? 
                  I am here to help. 
                </h5>
                {/* <br />
                <Button
                  className="btn-round"
                  color="info"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  See Details
                </Button> */}
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-bulb-63" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Experience</h4>
                    <p className="description">
                      I was born and live in Seattle, Washington in the USA. I am a native speaker in both English and Polish. 
                      I am currently attending high school and am interested in humanities, 
                      having always taken advanced English classes. 
                    </p>
                    {/* <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button> */}
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-single-copy-04" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Content</h4>
                    <p>
                    You are in control of what we cover during our meetings, but I can also suggest conversation 
                    starters or prepare study guides. I can help you with homework, essay revisions, studying 
                    for an exam, or just practicing your conversational skills.
                    </p>
                    {/* <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button> */}
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-watch-time" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Schedule</h4>
                    <p>
                      We can schedule an online meeting from Monday through Friday between 16:00 
                      and 19:00 (Polish time). Each meeting lasts one hour or longer.
                    </p>
                    {/* <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button> */}
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-credit-card" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Pricing</h4>
                    <p>
                      I charge $14/hour. You can pay after the meeting using Paypal. 
                      The first meeting is free so that we can get to know each other and assess fit! 
                      . 
                    </p>
                    {/* <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button> */}
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section section-dark text-center">
          <Container>
            <h2 className="title">About me</h2>
            <Row>
              {/* <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/clem-onojeghuo-3.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Henry Ford</CardTitle>
                        <h6 className="card-category">Product Manager</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      Teamwork is so important that it is virtually impossible
                      for you to reach the heights of your capabilities or make
                      the money that you want without becoming very good at it.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col> */}
              <Col md={{ size: 6, offset: 3 }}>
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/joe-gardner-2.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Iza Jańczuk</CardTitle>
                        {/* <h6 className="card-category">Designer</h6> */}
                      </div>
                    </a>
                    <p className="card-description text-center">
                      Hello, My name is Iza Jańczuk and I am 16 years old. 
                      I was born and live in the United States, however, my parents are Polish. 
                      I go back to Poland every summer to visit family and friends. 
                      I am a native speaker in English and Polish. I am advanced in English, having taken higher placement 
                      classes in both high school and middle school. Regarding my interests, 
                      I like to work with cameras, hang out with friends, learn other languages, spend time in the outdoors, and travel.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    {/* <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button> */}
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="https://vsco.co/iza-janczuk "
                      // onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-camera" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="https://www.linkedin.com/in/izabela-janczuk/"
                      // onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              {/* <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/erik-lucatero-2.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Robert Orben</CardTitle>
                        <h6 className="card-category">Developer</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      The strength of the team is each individual member. The
                      strength of each member is the team. If you can laugh
                      together, you can work together, silence isn’t golden,
                      it’s deadly.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col> */}
            </Row>
          </Container>
        </div>
        <a id="contact">&nbsp;</a>
        <div className="section landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Get in touch?</h2>
                <h5 class="text-center">
                  Email me at <a href="mailto:iza@janczuk.org">iza@janczuk.org</a> or fill out the form
                </h5>
                <Form className="contact-form">
                  <Row>
                    {formMessage && (
                      <Col className="ml-auto mr-auto" md="12">
                        <Alert color={formMessage.error ? 'danger' : 'success'}>{formMessage.message}</Alert>
                      </Col>
                    )}
                    <Col md="6">
                      <label>Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input disabled={formStatus === 'submitting'} placeholder="Name" type="text" value={form.name} onChange={(v) => setForm({ ...form, name: v.target.value})} />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input disabled={formStatus === 'submitting'} placeholder="Email" type="text" value={form.email} onChange={(v) => setForm({ ...form, email: v.target.value})} />
                      </InputGroup>
                    </Col>
                  </Row>
                  <label>Message</label>
                  <Input
                    placeholder="Tell me what you are interested in..."
                    disabled={formStatus === 'submitting'} 
                    type="textarea"
                    rows="4"
                    value={form.message}
                    onChange={(v) => setForm({ ...form, message: v.target.value})}
                  />
                  <Row>
                    <Col className="ml-auto mr-auto text-center" md="5">
                      {formStatus === 'submitting' && (
                        <Button disabled={true} className="btn-round" color="danger" type="button" size="lg">
                          <Spinner color="primary" size="sm"></Spinner> Send Message
                        </Button>
                      )}
                      {formStatus !== 'submitting' && (
                        <Button disabled={!formValid} className="btn-round" color="danger" type="button" size="lg" onClick={handleSendMessage}>
                          Send Message
                        </Button>
                      )}
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <DemoFooter />
    </>
  );
}

export default LandingPage;
