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
            {/* Main Footer Content */}
            <div className='container mx-auto px-4 max-w-7xl'>
                <div className='grid grid-cols-2 md:grid-cols-6 gap-8 mb-12'>
                    {/* Logo Section */}
                    <div className='md:col-span-1 hidden md:block'>
                        <Link to='/'>
                            <img src='./images/logo-light.png' alt='footer-logo' className='h-6' />
                        </Link>
                    </div>

                    {/* Navigation Sections */}
                    <div className='space-y-4'>
                        <h4 className='text-white text-sm font-semibold'>Company</h4>
                        <ul className='space-y-3'>
                            {["About Us", "We're Hiring", "Investors", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link className='text-gray-400 text-xs hover:text-white transition-colors' to='/'>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='space-y-4'>
                        <h4 className='text-white text-sm font-semibold'>Solutions</h4>
                        <ul className='space-y-3'>
                            {[
                                "Customer Lead Generation",
                                "Customer Retention Boost",
                                "Reputation Management",
                                "Marketing Automation",
                                "PartnerUp Network",
                            ].map((item) => (
                                <li key={item}>
                                    <Link className='text-gray-400 text-xs hover:text-white transition-colors' to='/'>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='space-y-4'>
                        <h4 className='text-white text-sm font-semibold'>Resources</h4>
                        <ul className='space-y-3'>
                            {["Blog", "Videos", "Case Studies", "Marketplace", "Industries"].map((item) => (
                                <li key={item}>
                                    <Link className='text-gray-400 text-xs hover:text-white transition-colors' to='/'>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='space-y-4'>
                        <h4 className='text-white text-sm font-semibold'>Help</h4>
                        <ul className='space-y-3'>
                            {["Support", "Knowledge Base", "Live Chat"].map((item) => (
                                <li key={item}>
                                    <Link className='text-gray-400 text-xs hover:text-white transition-colors' to='/'>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='space-y-4'>
                        <h4 className='text-white text-sm font-semibold'>Partners</h4>
                        <ul className='space-y-3'>
                            {["Development Partners", "Affiliate Program", "Partner Offers"].map((item) => (
                                <li key={item}>
                                    <Link className='text-gray-400 text-xs hover:text-white transition-colors' to='/'>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className='pt-8'>
                    <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
                        {/* Social Links */}
                        <div className='block sm:hidden text-center'>
                            <Link to='/'>
                                <img src='./images/logo-light.png' alt='footer-logo' className='h-6' />
                            </Link>
                        </div>
                        <div className='flex items-center gap-6'>
                            {[
                                { Icon: LinkedInIcon, label: "LinkedIn" },
                                { Icon: TwitterIcon, label: "Twitter" },
                                { Icon: InstagramIcon, label: "Instagram" },
                                { Icon: FacebookIcon, label: "Facebook" },
                                { Icon: YouTubeIcon, label: "YouTube" },
                            ].map(({ Icon, label }) => (
                                <Link key={label} to='/' className='text-gray-400 hover:text-white transition-colors' aria-label={label}>
                                    <Icon fontSize='small' />
                                </Link>
                            ))}
                        </div>

                        {/* Copyright and Links */}
                        <div className='flex items-center gap-6 text-gray-400 text-sm'>
                            <span className='hidden md:block'>© 2013-2021 Referrizer Inc.</span>
                            <Link to='/' className='hover:text-white transition-colors'>
                                Login
                            </Link>
                            <Link to='/' className='hover:text-white transition-colors'>
                                Sign up for free
                            </Link>
                        </div>
                        <div className='block sm:hidden hover:text-white transition-colors text-gray-400 text-sm'>© 2013-2021 Referrizer Inc.</div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
