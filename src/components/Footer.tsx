import React from "react";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer: React.FC = () => {
    return (
        <footer className='bg-[#23283b] py-14'>
            <div className='container grid grid-cols-2 md:grid-cols-6 gap-6'>
                {/* Logo Section */}
                <div className='md:col-span-1 flex justify-center md:justify-start md:block hidden'>
                    <Link to='/'>
                        <img src='src/images/Group.png' alt='footer-logo' className='h-6 ' />
                    </Link>
                </div>
                {/* Company Section */}
                <div>
                    <h4 className='text-sm font-semibold mb-4 text-white'>Company</h4>
                    <ul className='space-y-2'>
                        <li>
                            <Link className='text-gray-400 text-xs' to='/'>
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link className='text-gray-400 text-xs' to='/'>
                                We're Hiring
                            </Link>
                        </li>
                        <li>
                            <Link className='text-gray-400 text-xs' to='/'>
                                Investors
                            </Link>
                        </li>
                        <li>
                            <Link className='text-gray-400 text-xs' to='/'>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* Solutions Section */}
                <div>
                    <h4 className='text-sm font-semibold mb-4 text-white'>Solutions</h4>
                    <ul className='space-y-2'>
                        <li>
                            <Link className='text-gray-400 text-xs' to='/'>
                                Customer Lead Generation
                            </Link>
                        </li>
                        <li>
                            <Link className='text-gray-400 text-xs' to='/'>
                                Customer Relation Boost
                            </Link>
                        </li>
                        <li>
                            <Link className='text-gray-400 text-xs' to='/'>
                                Repulation Manageent
                            </Link>
                        </li>
                        <li>
                            <Link className='text-gray-400 text-xs' to='/'>
                                Marketing Automation
                            </Link>
                        </li>
                        <li>
                            <Link className='text-gray-400 text-xs' to='/'>
                                PartnerUp Network
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* Resources Section */}
                <div>
                    <h4 className='text-sm font-semibold mb-4 text-white'>Resources</h4>
                    <ul className='space-y-2'>
                        <li>
                            <Link className='text-gray-400 text-xs' to='/'>
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link className='text-gray-400 text-xs' to='/'>
                                Videos
                            </Link>
                        </li>
                        <li>
                            <Link className='text-gray-400 text-xs' to='/'>
                                Case Studies
                            </Link>
                        </li>
                        <li>
                            <Link className='text-gray-400 text-xs' to='/'>
                                Marketplace
                            </Link>
                        </li>
                        <li>
                            <Link className='text-gray-400 text-xs' to='/'>
                                Industries
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* Help Section */}
                <div>
                    <h4 className='text-sm font-semibold mb-4 text-white'>Help</h4>
                    <ul className='space-y-2'>
                        <li>
                            <Link className='text-gray-400 text-xs' to='/'>
                                Support
                            </Link>
                        </li>
                        <li>
                            <Link className='text-gray-400 text-xs' to='/'>
                                Knowledge Base
                            </Link>
                        </li>
                        <li>
                            <Link className='text-gray-400 text-xs' to='/'>
                                Live Chat
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* Partner Section */}
                <div>
                    <h4 className='text-sm font-semibold mb-4 text-white'>Partners</h4>
                    <ul className='space-y-2'>
                        <li>
                            <Link className='text-gray-400 text-xs' to='/'>
                                Development Partners
                            </Link>
                        </li>
                        <li>
                            <Link className='text-gray-400 text-xs' to='/'>
                                Affiliate Program
                            </Link>
                        </li>
                        <li>
                            <Link className='text-gray-400 text-xs' to='/'>
                                Partner Offers
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <div>
                    <Link className='text-white text-[0.08rem]' to='/'>
                        <LinkedInIcon fontSize='small' />
                    </Link>
                    <Link className='text-white text-[0.08rem]' to='/'>
                        <TwitterIcon fontSize='small' />
                    </Link>
                    <Link className='text-white text-[0.08rem]' to='/'>
                        <InstagramIcon fontSize='small' />
                    </Link>
                    <Link className='text-white text-[0.08rem]' to='/'>
                        <FacebookIcon fontSize='small' />
                    </Link>
                    <Link className='text-white text-[0.08rem]' to='/'>
                        <YouTubeIcon fontSize='small' />
                    </Link>
                </div>
                <div>
                    <p>© 2013-2021 Referrizer Inc.</p>
                    <p>Login</p>
                    <p>Sign up for free</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
