import React, { Component } from "react";
import "./Home.scss";
import Header from "../components/header";
import { ReactComponent as Logo } from '../assets/images/name.svg';
import facebook from '../assets/images/facebook.png';
import linkedin from '../assets/images/linkedin.png';
import github from '../assets/images/github.png';
import gmail from '../assets/images/gmail.png';
import telegram from '../assets/images/telegram.png';

class Home extends Component {
  render() {
    return (
      <div className="Home container">
        <Header></Header>
        <hr className="line"></hr>
        <div className="greeting">
          <span>Здравствуйте, я внештатный фронтенд-разработчик в Бордо.</span>
          <br />
          <span>Добро пожаловать в мое портфолио!</span>
        </div>
        <div className="name">
          <Logo />
        </div>
        <div className="social">
          <a className="social-icon" href="https://www.facebook.com/yergali.zhakhan.5" target="_blank"><img src={facebook} alt="Facebook" /></a>
          <a className="social-icon" href="http://linkedin.com/in/yergali-zhakhan-217600167" target="_blank"><img src={linkedin} alt="LinkedIn" /></a>
          <a className="social-icon" href="https://github.com/yergali28" target="_blank"><img src={github} alt="Github" /></a>
          <a className="social-icon" href="mailto:yergali.zhakhan@gmail.com"><img src={gmail} alt="Gmail" /></a>
          <a className="social-icon" href="https://t.me/yergali_zhakhan" target="_blank"><img src={telegram} alt="Telegram" /></a>
        </div>
      </div>
    );
  }
}

export default Home;
