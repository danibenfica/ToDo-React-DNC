import React from 'react';
import ReactDOM from 'react-dom';
import './global.scss';
import ToDo from './views/ToDo/ToDo';
import Organization from './views/Organization/Organization';
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import { ThemeProvider } from '../ThemeContext';



const tasks = [
  { taskName: 'Limpar a casa ', status: 'Em andamento', options: 'Opções 1' },
  { taskName: 'Responder e-mails', status: 'Pendente', options: 'Opções 2' },

  

];

const router = createBrowserRouter([
  {
    path: "/",
    element: <ToDo tasks={tasks} />
  },
  {
    path: "/organization",
    element: <Organization/>
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);