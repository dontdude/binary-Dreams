import React from 'react';
import { BrowserRouter  as Router, Link, Route, Routes } from 'react-router-dom';
import { logo } from './assets';
import { Home, CreatePost } from './pages';

const App = () => {
  return (
    // The BrowserRouter (Router here) component is used to wrap the navigation links and Route components, allowing the application to render different components based on the URL. 
    // The Link components are used to navigate between pages, 
    // while the Route components define the components to render for each URL. (eg call <Home/> component on "/" URL)
    <Router>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/">
          <img src={logo} alt="logo" className="w-full h-12 object-contain" />
        </Link>

        <Link to="/create-post" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">Create</Link>
      </header>
      
      {/* content of main changes based on routes  */}
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f0f2f8] min-h-[calc(100vh-83px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App