import React from 'react'
import Block from '../components/Block';
import Stakead from '../components/stakead';

import 'font-awesome/css/font-awesome.min.css';

function Footer() {
  return (
    <div>
        <footer className="d-flex justify-content-between align-items-right bg-dark text-light p-3">
        <a href="https://t.me/etherrushtoken" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-telegram fa-2x" aria-hidden="true"></i>
        </a>
              <a href="https://stake.com/?c=I0tqYfI0">
        <Stakead/>
      </a>
        <div className="d-flex justify-content-end">
          <Block />
        </div>
      </footer>
    </div>
  )
}

export default Footer