import React from 'react';
import { BrowserRouter  as Router, Link, Route, Routes } from 'react-router-dom';
import { animatedLogo } from './assets';
import { Home, CreatePost } from './pages';
import Toggler from './components/Toggler';

const App = () => {
  return (
    // The BrowserRouter (Router here) component is used to wrap the navigation links and Route components, allowing the application to render different components based on the URL. 
    // The Link components are used to navigate between pages, 
    // while the Route components define the components to render for each URL. (eg call <Home/> component on "/" URL)
    <Router>
      <header className="w-full flex justify-between items-center sm:px-8 px-4 py-4 lg:px-8 lg:py-4 bg-neutral-300 dark:bg-neutral-900">
        <Link to="/">
          <img src={animatedLogo} alt="logo" className="w-8/12 h-4/6 lg:w-full lg:h-12 object-contain shadow-xl shadow-neutral-500 dark:shadow-neutral-800" />
        </Link>
        <div className="flex justify-around items-center">
          <Toggler />
          <Link to="/create-post" className="h-fit font-inter font-medium bg-blue-600 text-white mx-4 px-2 py-1 lg:px-3 text-sm lg:text-base rounded-md shadow-xl shadow-neutral-400 dark:shadow-sm">Create</Link>
        </div>
      </header>
      
      {/* content of main changes based on routes  */}
      <main className="sm:p-8 px-4 py-8 w-full min-h-[calc(100vh-83px)] bg-zinc-200 dark:bg-zinc-800">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App