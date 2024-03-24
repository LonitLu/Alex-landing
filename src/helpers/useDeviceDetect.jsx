import { useState, useEffect } from 'react';

// Хук useDeviceDetect для определению типа устройства
const useDeviceDetect = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 680);

  useEffect(() => {
    // Отслеживаем изменение размера экрана здесь, моментально реагируя на любые его изменения
    const handleResize = () => setIsMobile(window.innerWidth < 680);
    window.addEventListener('resize', handleResize);
    // удаляем обработчик, чтобы предотвратить утечку памяти
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { isMobile };
};

export default useDeviceDetect;