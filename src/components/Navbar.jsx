/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import Image from 'next/image';
// import '../../styles/Navbar.module.css';
const Navbar = () => {
  return (
    <div
      className="Navbar"
      sx={{
        width: '100%',
        maxWidth: '60%',
        marginBottom: '20px',
        background:
          'linear-gradient(to right bottom, rgba(255,255,255,1),rgba(255,255,255,0.3))',
        borderRadius: '2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px 40px',
      }}
    >
      <div
        className="Logo"
        sx={{ variant: 'navBar.Logo', display: 'flex', alignItems: 'center' }}
      >
        <Image
          src="/images/profile.jpg"
          width={50}
          height={50}
          alt="Picture of the author"
          sx={{ borderRadius: '50%' }}
        />
        {/* <div sx={{ ml: '12px' }}>Reyner Loza</div> */}
      </div>
      <nav>
        <ul
          className="nav_links"
          sx={{
            pl: '0px',
            listStyleType: 'none',

            '& li a': {
              textDecoration: 'none',
              color: 'text',
              fontWeight: '700',
              fontSize: '18px',
              transition: 'all 0.3s ease 0s',
            },

            '& li a:hover': {
              color: 'white',
            },

            '& li': {
              display: 'inline-block',
              padding: '0px 20px',
            },
          }}
        >
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Profile</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
        </ul>
      </nav>
      <div>Log Out</div>
    </div>
  );
};

export default Navbar;
