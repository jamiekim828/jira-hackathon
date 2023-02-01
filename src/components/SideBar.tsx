import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// MUI
import MenuIcon from '@mui/icons-material/Menu';

export default function SideBar() {
  const [show, setShow] = useState<boolean>(false);

  return (
    <main className={show ? 'space-toggle' : ''}>
      <header className={`header ${show ? 'space-toggle' : ''}`}>
        <div className='header-toggle' onClick={() => setShow(!show)}>
          {!show ? (
            <MenuIcon fontSize='large' />
          ) : (
            <MenuIcon fontSize='large' sx={{ marginLeft: '130px' }} />
          )}
        </div>
      </header>
      <aside className={`sidebar ${show ? 'show' : ''}`}>
        <nav className='nav'>
          <div>
            <Link
              to='/'
              className='nav-logo'
              style={{
                textDecoration: 'none',
                color: 'white',
                position: 'relative',
              }}
            >
              Home
            </Link>
            <div className='nav-list'>
              <Link
                to='/projects'
                className='nav-logo'
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  position: 'relative',
                }}
              >
                Projects
              </Link>
              <Link
                to='/create'
                className='nav-logo'
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  position: 'relative',
                }}
              >
                Add Project
              </Link>
              <Link
                to='/users'
                className='nav-logo'
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  position: 'relative',
                }}
              >
                Colleagues
              </Link>
              <Link
                to='/'
                className='nav-logo'
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  position: 'relative',
                }}
              >
                Realease
              </Link>
            </div>
          </div>
        </nav>
      </aside>
    </main>
  );
}
