import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';


const NavBar = () => (
  <>  
    
    <nav  class="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
            <div  class="container-fluid">
                <a class="navbar-brand" href="/">FizzBuzzWeb</a>
                <button  class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span  class="navbar-toggler-icon"></span>
                </button>
                <div  class="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                    <ul  class="navbar-nav flex-grow-1">
                        <li  class="nav-item">
                            <a class="nav-link text-dark" href="/">Home</a>
                        </li>
                        <li  class="nav-item">
                            {/* <a class="nav-link text-dark" href="/Home/Privacy">Privacy</a> */}
                            <Link className="nav-link" to="/Home/Privacy">Privacy</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        
  </>
);
export default NavBar;



// position: relative;
// display: flex;
// flex-wrap: wrap;
// align-items: center;
// justify-content: space-between;
// padding-top: .5rem;
// padding-bottom: .5rem;
// border-bottom: 1px solid #dee2e6!important;
// margin-bottom: 1rem!important;


{/* <header>
        
        </header>
        <div b-617jbvk8u3 class="container">
            <main b-617jbvk8u3 role="main" class="pb-3">
                
    <div class="text-center">
        <h1 class="display-4">Welcome</h1>
        <p>Learn about <a href="https://docs.microsoft.com/aspnet/core">building Web apps with ASP.NET Core</a>.</p>
    </div>
    
    
    
            </main>
        </div>
    
        <footer b-617jbvk8u3 class="border-top footer text-muted">
            <div b-617jbvk8u3 class="container">
                &copy; 2022 - FizzBuzzWeb - <a href="/Home/Privacy">Privacy</a>
            </div>
        </footer> */}