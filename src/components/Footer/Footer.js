import React from 'react';
import Style from './Footer.module.scss'
import {icons} from "../../constants/icons";

const Footer = () => {
    return (
        <footer className={Style.footer}>
            <div className="container">
                <div className={Style.navigatin}>
                    <div>
                        <h3 className={Style.title}>About</h3>
                        <ul>
                            <li>
                                <a href="#!">Contact</a>
                            </li>
                            <li>
                                <a href="#!">Brand</a>
                            </li>
                            <li>
                                <a href="#!">Blog</a>
                            </li>
                            <li>
                                <a href="#!">Community</a>
                            </li>
                            <li>
                                <a href="#!">CAKE Token</a>
                            </li>
                            <li>
                                <a href="#!">Online Sore</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className={Style.title}>Help</h3>
                        <ul>
                            <li>
                                <a href="#!">Customer Support</a>
                            </li>
                            <li>
                                <a href="#!">Troubleshooting</a>
                            </li>
                            <li>
                                <a href="#!">Guides</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className={Style.title}>Developers</h3>
                        <ul>
                            <li>
                                <a href="#!">Github</a>
                            </li>
                            <li>
                                <a href="#!">Documentation</a>
                            </li>
                            <li>
                                <a href="#!">Bug Bounty</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <img src={icons.mainLogoIcon} alt="logo"/>
                    </div>
                </div>
                <div className={Style.social}>
                    <ul>
                        <li>
                            <a href="#!" target="_blank">
                                <img src={icons.twitterIcon} alt="twitter"/>
                            </a>
                        </li>
                        <li>
                            <a href="#!" target="_blank">
                                <img src={icons.telegramIcon} alt="telegram"/>
                            </a>
                        </li>
                        <li>
                            <a href="#!" target="_blank">
                                <img src={icons.instagramIcon} alt="instagram"/>
                            </a>
                        </li>
                        <li>
                            <a href="#!" target="_blank">
                                <img src={icons.redditIcon} alt="reddit"/>
                            </a>
                        </li>
                        <li>
                            <a href="#!" target="_blank">
                                <img src={icons.gitIcon} alt="git"/>
                            </a>
                        </li>
                        <li>
                            <a href="#!" target="_blank">
                                <img src={icons.pumpkinIcon} alt="pumpkin"/>
                            </a>
                        </li>
                        <li>
                            <a href="#!" target="_blank">
                                <img src={icons.lastIcon} alt="last"/>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={Style.copyright}>
                    <p>&copy; Copyright {new Date().getFullYear()}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
