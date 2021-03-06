
import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import axios from "axios";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

function RegisterCard() {

  const history = useHistory()

  const [inputs, setInputs] = useState({  
    password: '',
    pwcheck: '',
    baekjoonId: '',
    language: ''
  })
  const [id, setUserId] = useState({
    userId : ''
  })
  const [nick, setNickName] = useState({
    nickName : ''
  })
  let [checks, setChecks] = useState({
    idCheck : false,
    nickNameCheck : false,
    flag : false
  })
  const {password,pwcheck,baekjoonId,language} = inputs
  const {userId} = id
  const {nickName} = nick
  let {idCheck, nickNameCheck, flag} = checks
  const onChangeUserId = (e) => {
    const { name, value } = e.target   

    const nextId = {            
      ...id,  
      [name]: value,
    }
    setUserId(nextId)
    const nextChecks = {
      idCheck : false,
      nickNameCheck : nickNameCheck,
      flag : password === pwcheck ? true : false
    }
    setChecks(nextChecks);
  }
  const onChangeNickName = (e) => {
    const { name, value } = e.target   

    const nextNick = {            
      ...nick,  
      [name]: value,
    }
    setNickName(nextNick)
    const nextChecks = {
      idCheck : idCheck,
      nickNameCheck : false,
      flag : password === pwcheck ? true : false
    }
    setChecks(nextChecks);
  }
  const onChange = (e) => {
    const { name, value } = e.target   

    const nextInputs = {            
      ...inputs,  
      [name]: value,
    }
    setInputs(nextInputs)
    const nextChecks = {
      idCheck : idCheck,
      nickNameCheck : nickNameCheck,
      flag : password === pwcheck ? true : false
    }
    setChecks(nextChecks);
  }


  const duplicateUserId = useCallback(async(e)=>{
    if(userId.length < 8 || 20 <userId.length){
      idCheck = false
      alert("????????? ????????? 8?????? ?????? 20??? ????????? ???????????????.")
      return
    }
    try{
      await axios({
        method:"get",
        url:"http://j6c204.p.ssafy.io:8081/v1/user/duplicate/check/"+userId,
        headers: {
          "Accept":"application/json;charset=UTF-8",
          "Content-Type":"application/json;charset=UTF-8"
        }
      })
      idCheck = true;
      alert("??????????????? ??????????????????.")
      
    }catch(e){
      idCheck = false;
      alert("?????????????????? ??????????????????.")
    }
  })

  const duplicateNickName = useCallback(async(e)=>{
    if(nickName.length < 8 || 20 < nickName.length){
      nickNameCheck = false
      alert("????????? ????????? 8?????? ?????? 20??? ????????? ???????????????.")
      return
    }
    try{
      await axios({
        method:"get",
        url:"http://j6c204.p.ssafy.io:8081/v1/user/duplicateNickName/check/"+nickName,
        headers: {
          "Accept":"application/json;charset=UTF-8",
          "Content-Type":"application/json;charset=UTF-8"
        }
      })
      nickNameCheck = true;
      alert("??????????????? ??????????????????.")
      
    }catch(e){
      nickNameCheck = false;
      alert("?????????????????? ??????????????????.")
    }
  })

  const siginup = useCallback(async (e) =>{

    if(userId.length < 8 || 20 <userId.length){
      alert("????????? ????????? 8?????? ?????? 20??? ????????? ???????????????.")
      return
    }
    if(!idCheck){
      alert("????????? ??????????????? ????????????.")
      return
    }
    if(nickName.length < 8 || 20 < nickName.length){
      alert("????????? ????????? 8?????? ?????? 20??? ????????? ???????????????.")
      return
    }
    if(!nickNameCheck){
      alert("????????? ??????????????? ????????????.")
      return
    }
    if(password !== pwcheck){
      alert("??????????????? ??????????????????.")
      return;
    }
    if(password.length < 8){
      alert("???????????? ????????? 8?????? ?????? ???????????????.")
      return;
    }
    
      await axios({
        method:"post",
        url:"http://j6c204.p.ssafy.io:8081/v1/user/signup",
        // url:"http://127.0.0.1:8081/v1/user/signup",
        headers: {
          "Accept":"application/json;charset=UTF-8",
          "Content-Type":"application/json;charset=UTF-8"
        },
        data:{
          "userId" : userId,
          "language" : language,
          "nickName" : nickName,
          "baekjoonId" : baekjoonId,
          "password" : password
        }
      }).then(response =>{
        localStorage.setItem("userId",userId)
        alert("??????????????? ??????????????????. ????????? ????????????.")
        history.replace("/login-page")
      }).catch(error =>{
        if(error.response.status == 418){
          alert("solved.ac??? ?????????????????? ?????? ??????????????????.")
          return
        }
        if(error.response.status == 400){
          alert("???????????? ??????????????????.")
          return
        }
        if(error.response.status == 403){
          alert("???????????? ??????????????????.")
          return
        }
      })
      
      // console.log(userInfo)
      
    
  })

    return (
      <>
        <Container className="pt-lg-7">
          <Row className="justify-content-center">
            <Col lg="5">
              <Card className="bg-secondary shadow border-0">
                <CardBody className="px-lg-5 py-lg-5">
                  <div className="text-center text-muted mb-4">
                    <h3>????????????</h3>
                  </div>
                  <Form role="form">
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-circle-08" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="?????????" type="text" name="userId" onChange={onChangeUserId} value={userId}/>
                        <div>
                          <Input block className="btn-round" color="default" size="lg" type="button" onClick={duplicateUserId} value="????????????"/>
                        </div>
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="?????????" type="text" name="nickName" onChange={onChangeNickName} value={nickName}/>
                        <div>
                          <Input block className="btn-round" color="default" size="lg" type="button" onClick={duplicateNickName} value="????????????"/>
                        </div>
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-lock-circle-open" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="????????????"
                          type="password"
                          autoComplete="off"
                          name="password" onChange={onChange} value={password}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-lock-circle-open" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="??????????????????"
                          type="password"
                          autoComplete="off"
                          name="pwcheck" onChange={onChange} value={pwcheck}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-circle-08" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="?????? ?????????" type="text" name="baekjoonId" onChange={onChange} value={baekjoonId}/>
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            {/* <i className="fa-duotone fa-brackets-curly"></i> */}
                            <i class="fas fa-heart"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="?????? ??????" type="text" name="language" onChange={onChange} value={language}/>
                      </InputGroup>
                    </FormGroup>
                    {/* <div className="text-muted font-italic">
                      <small>
                        password strength:{" "}
                        <span className="text-success font-weight-700">
                          strong
                        </span>
                      </small>
                    </div>
                    <Row className="my-4">
                      <Col xs="12">
                        <div className="custom-control custom-control-alternative custom-checkbox">
                          <input
                            className="custom-control-input"
                            id="customCheckRegister"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheckRegister"
                          >
                            <span>
                              I agree with the{" "}
                              <a
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                Privacy Policy
                              </a>
                            </span>
                          </label>
                        </div>
                      </Col>
                    </Row> */}
                    <br />
                    <div>
                      <Button
                        block
                        className="btn-round"
                        color="default"
                        size="lg"
                        type="button"
                        onClick={siginup}
                      >
                      ????????????
                      </Button>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
        
      </>
    );
  }

export default RegisterCard;