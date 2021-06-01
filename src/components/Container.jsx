/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import Navbar from './Navbar';

const Container = (props) => {
  return (
    <div
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
        background: 'linear-gradient(to right top, #65dfc9,#6cdbeb)',
      }}
    >
      <Navbar />
      <div
        sx={{
          minHeight: '80vh',
          maxWidth: '60%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          background:
            'linear-gradient(to right bottom, rgba(255,255,255,0.7),rgba(255,255,255,0.3))',
          borderRadius: '2rem',
          padding: '40px 40px',
        }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Container;
