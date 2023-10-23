import React, { Fragment, useState, useEffect } from 'react';
import { Container, Form, Row, Col, Carousel, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { login, clearErrors } from '../../actions/userActions';
import { Helmet } from 'react-helmet';
import Loader from '../layout/loader';
import { saveState } from '../../saveState';
import store from '../../store';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated, user, error, loading } = useSelector(state => state.auth);
  

  useEffect(() => {
    saveState('user', store.getState().auth);
    if(isAuthenticated) {
      if (user.role === 'admin') {
        navigate('/account/admin');
      } else {
        navigate('/user');
      }
    }

    if(error){
      dispatch(clearErrors());
    }

  }, [dispatch, isAuthenticated, error, user, navigate])

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  }

  return (
    <Fragment>
        {<Helmet>
          <link rel='stylesheet' href='/login.css' />
        </Helmet>}
        <Container className='center' id='loginArea'>
          {
            loading ? <Loader/> : (
              <Row className='gx-0 justify-content-md-center'>
                <Col xs lg='6' className='hidden'>
                  <div className='image-container center-vertical bg-lightgreen login-logo-div form-shadow'>
                    <Carousel>
                      <Carousel.Item interval={2000}>
                        <Image src='./images/Accounting.jpg' ></Image>
                      </Carousel.Item><Carousel.Item interval={2000}>
                        <Image src='./images/Accounting-1.jpg' ></Image>
                      </Carousel.Item><Carousel.Item interval={2000}>
                        <Image src='./images/Accounting-2.jpg' ></Image>
                      </Carousel.Item>
                    </Carousel>
                  </div>
                </Col>
                <Col xs lg='4'>
                  <div className='bg-gray login-form form-shadow'>
                    <div className='title pt-large'>Linn Accountancy Training Center</div>
                    <Form  onSubmit={submitHandler}>
                      <Form.Group className='mb-3'>
                        <Row className='justify-content-center mt-4'>
                          <Form.Label className='col-md-3 col-auto'>Email</Form.Label>
                        </Row>
                        <Row className='justify-content-center'>
                          <Form.Control className='w-75' placeholder='Enter email' value={email} 
                          onChange={(e)=> setEmail(e.target.value)}/>
                        </Row>
                      </Form.Group>
                      <Form.Group className='mb-4'>
                        <Row className='justify-content-center'>
                          <Form.Label className='col-md-3 col-auto'>Password</Form.Label>
                        </Row>
                        <Row className='justify-content-center'>
                          <Form.Control className='w-75' type='password' placeholder='Enter password' value={password}
                          onChange={(e) => setPassword(e.target.value)}/>
                        </Row>
                      </Form.Group>
                      <Row className='justify-content-center pb-large'>
                        <button type='submit' className='login-btn'>Sign In</button>
                      </Row>
                    </Form>
                  </div>
                </Col>
              </Row>
            )
          }
        </Container>
      </Fragment>
  )
}

export default Login