import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <span className="footer-title">Services</span>
                    <Link className="link link-hover">Branding</Link>
                    <Link className="link link-hover">Design</Link>
                    <Link className="link link-hover">Marketing</Link>
                    <Link className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link className="link link-hover">About us</Link>
                    <Link className="link link-hover">Contact</Link>
                    <Link className="link link-hover">Jobs</Link>
                    <Link className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link className="link link-hover">Terms of use</Link>
                    <Link className="link link-hover">Privacy policy</Link>
                    <Link className="link link-hover">Cookie policy</Link>
                </div>
            </footer>
            <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
                <div className="items-center grid-flow-col">
                    <img className='w-16' src="https://i.ibb.co/xY2fX62/images-q-tbn-ANd9-Gc-T1-MOh-Bl-Cpg-EQnpm-Ng-Ijx-WHr8-Wt-HIso4-Rr3jv-Pj-Pp-Nd-Ybqr4-I5f-Gz-2-Bl-HCw-I.jpg" alt="logo" />
                    <p>Meghna Tourist Service <br />Providing reliable service since 1992</p>
                </div>
                <div className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4 text-4xl">
                        <Link to='https://www.facebook.com'><FaFacebookF></FaFacebookF></Link>
                        <Link to='https://twitter.com/'><FaTwitter></FaTwitter></Link>
                        <Link to='https://www.youtube.com'><FaYoutube></FaYoutube></Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;