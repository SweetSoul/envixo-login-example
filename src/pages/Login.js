import React, { useState } from "react";
import '../pages/Login.css';
import FormikLogin from '../components/FormikLogin';
import FormikCadastro from '../components/FormikCadastro';
import Slider from '../components/Slider';
import { CSSTransition, SwitchTransition } from "react-transition-group";

import '../styles/bootstrap.min.css';
import '../styles/bootstrap-grid.min.css';
import '../styles/bootstrap-reboot.min.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';


function Login () {
    let today = new Date();
    const [submitText, setSubmitText] = useState("Cadastre-se");

    const toggleTransition = function() {
        setSubmitText(submitText === "Cadastre-se" ? "Login" : "Cadastre-se");
    };

    function animateMenuForm () {
        toggleTransition()
        if(document.getElementById("activeLogin") == null) {
            //------ Menu items
            document.getElementById("activeCadastro").classList.add("inactiveCadastro");
            document.getElementById("activeCadastro").classList.remove("activeCadastro");
            document.getElementById("activeCadastro").id = "inactiveCadastro";
            document.getElementById("inactiveLogin").classList.add("activeLogin");
            document.getElementById("inactiveLogin").classList.remove("inactiveLogin");
            document.getElementById("inactiveLogin").id = "activeLogin";

            //------ Linha
            document.getElementById("line").classList.add("lineLogin");
            
            //------ Botão
            toggleTransition();
            document.getElementById("submitBg").classList.add("submitBgLogin");

            //------ Form
            document.getElementById("formikCadastro").classList.add("hiddenCadastro");
            document.getElementById("formikCadastro").classList.remove("shownCadastro");
            document.getElementById("formikLogin").classList.add("shownLogin");
            document.getElementById("formikLogin").classList.remove("hiddenLogin");
        } else {
            //------ Menu items
            document.getElementById("inactiveCadastro").classList.add("activeCadastro");
            document.getElementById("inactiveCadastro").classList.remove("inactiveCadastro");
            document.getElementById("inactiveCadastro").id = "activeCadastro";
            document.getElementById("activeLogin").classList.add("inactiveLogin");
            document.getElementById("activeLogin").classList.remove("activeLogin");
            document.getElementById("activeLogin").id = "inactiveLogin";

            //------ Linha
            document.getElementById("line").classList.remove("lineLogin");

            //------ Botão
            toggleTransition();
            document.getElementById("submitBg").classList.remove("submitBgLogin");

            //------ Form
            document.getElementById("formikCadastro").classList.add("shownCadastro");
            document.getElementById("formikCadastro").classList.remove("hiddenCadastro");
            document.getElementById("formikLogin").classList.add("hiddenLogin");
            document.getElementById("formikLogin").classList.remove("shownLogin");
        }
    
    };

    function checkClick (who) {

        if (who == "cadastro") {
            if(document.getElementById("activeCadastro") == null) {
                return animateMenuForm();
            } else{
                return null;
            }
        } else {
            if(document.getElementById("activeLogin") == null) {
                return animateMenuForm();
            } else {
                return null;
            }
        }
    };
    
    function handleClick () {
        if(submitText == "Cadastre-se") {
            alert("Cadastro")
        } else {
            alert("Login")
        }
    };

    return(
        <Container className="d-flex fullHeight align-items-center mw-100 bg-light">
            <Col xs={12} md={5} className="d-flex flex-column formCol bg-white p-5">
                <Image 
                src="https://sweetsoul.sirv.com/Images/Envixo/logo.svg"
                className="align-self-start mb-4"
                />
                <h1 className="fontSizer">Bem vindo ao<br/>
                    <span className="colorPri font-weight-bold">Coursify.Me Enterprise</span>
                </h1>
                <p className="fontSizer">
                    Although the bobcat is rarely seen, it is the most common wildcat in north America.
                </p>
                <div className="d-flex justify-items-stretch mw-100">
                    <Button onClick={() => {checkClick("cadastro")}} id="activeCadastro" className="transition activeCadastro">Cadastro</Button>
                    <Button onClick={() => {checkClick("login")}} id="inactiveLogin" className="transition inactiveLogin">Login</Button>
                </div>
                <hr id="line" className="lineCadastro" />
                <FormikCadastro id="formikCadastro" className="transitionForms shownCadastro" />
                <FormikLogin id="formikLogin" className="transitionForms hiddenLogin" />

                <div controlId="submit" id="submitBg" className="d-flex submitBg ml-auto mr-auto">
                    <SwitchTransition mode="out-in">
                        <CSSTransition
                        classNames="fade"
                        addEndListener={(node, done) => {
                            node.addEventListener("transitionend", done, false);
                        }}
                        key={submitText}
                        >
                            <Button type="submit" id="submitBtn" onClick={handleClick} className="btnLogin ml-auto mr-auto">{submitText}</Button>
                        </CSSTransition>
                    </SwitchTransition>
                </div>


                <h6 className="align-self-center copyPos">{today.getFullYear()} &copy; Coursify.Me. Todos os direitos reservados</h6>
            </Col>
            <Col xs={12} md={7}>
                <Slider />
            </Col>
        </Container>
    );
}

export default Login;