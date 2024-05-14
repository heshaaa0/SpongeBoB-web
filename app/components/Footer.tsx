import React from 'react'
import Link from 'next/link'

const Footer = () => {

  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
  <nav>
    <h6 className="footer-title">Services</h6> 
    <Link className="link link-hover" href="">Branding</Link>
    <Link className="link link-hover" href="">Design</Link>
    <Link className="link link-hover" href="">Marketing</Link>
    <Link className="link link-hover" href="">Advertisement</Link>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <Link className="link link-hover" href="">About us</Link>
    <Link className="link link-hover" href="">Contact</Link>
    <Link className="link link-hover" href="">Jobs</Link>
    <Link className="link link-hover" href="">Press kit</Link>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <Link className="link link-hover" href="">Terms of use</Link>
    <Link className="link link-hover" href="">Privacy policy</Link>
    <Link className="link link-hover" href="">Cookie policy</Link>
  </nav>
</footer>
  )
}

export default Footer