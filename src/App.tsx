// App.tsx
import React from 'react';
import Slideshow from './SlideShow'; // Make sure the path is correct
import { useEffect } from 'react';
const App: React.FC = () => {
    useEffect(() => {
        const appElement = document.documentElement; // Elemento raíz de la aplicación
    
        function enableFullScreen() {
          if (appElement.requestFullscreen) {
            appElement.requestFullscreen();
          } else if (appElement.requestFullscreen) {
            appElement.requestFullscreen();
          } else if (appElement.requestFullscreen) {
            appElement.requestFullscreen();
          }
        }
    
        // Llamada a la función para activar el modo pantalla completa
        enableFullScreen();
    
        // Escuchar el evento resize para ajustar el contenido cuando cambie el tamaño de la ventana
        window.addEventListener('resize', enableFullScreen);
    
        return () => {
          // Eliminar el evento de escucha cuando el componente se desmonte
          window.removeEventListener('resize', enableFullScreen);
        };
      }, []);
    
    return (
        <div className="App">
            
            <main >
                <Slideshow />

            </main>
            
        </div>
    );
};

export default App;
