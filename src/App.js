
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes/Routes.js';

function App() {
  return (
    <div className="App lg:mx-32 md:mx-32 sm:mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
