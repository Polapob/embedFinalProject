import React from 'react';
import { Typography } from 'antd';
import GithubLogo from '../../../picture/GitHub.svg';
import './ProjectLogo.css';

const Projectname:React.FC<{}> = () => (
  <div
    style={{
      border: '0px solid black',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '0.5rem',
      marginTop: '1.25rem',
      paddingRight: '0rem',
    }}
  >
    <Typography
      className="logoText"
      style={{ fontSize: '18px', fontWeight: 'bold' }}
    >
      2110366 Embedded Sys Lab Project
    </Typography>
    <img src={GithubLogo} alt="Github Logo" />
  </div>
);
export default React.memo(Projectname);
