import React from 'react';

const Navbar = () => {
  return (
    <div style={{ backgroundColor: 'black', color: 'white', padding: '10px', position:"sticky", top:"0", zIndex:"99"}}>
        <div style={{width:"15%"}}>
      <span>☰</span>&nbsp;&nbsp; Notes
      </div>
    </div>
  );
};

export default Navbar;
