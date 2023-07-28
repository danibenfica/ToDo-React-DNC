import React, { useEffect } from 'react';
import { useTheme } from '../../../ThemeContext';
import './index.scss';
import './indexLight.scss';

const Principal = () => {
  const { isLightMode } = useTheme();

  const headingClassName = isLightMode ? 'h12' : 'h1';

  const setBodyBackground = () => {
    document.body.classList.remove('dark-theme', 'light-theme');
    document.body.classList.add(isLightMode ? 'light-theme' : 'dark-theme');
  };

  useEffect(() => {
    setBodyBackground();
  }, [isLightMode]);

  return (
    <h1 className={headingClassName}>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>
  );
}

export default Principal;
