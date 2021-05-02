import React from 'react';
import Cards from '../Cards';
import LogIn from '../LogIn';

function Header() {
    return (
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark d-none d-lg-block" style={{ zIndex: 2000 }}>
                <div class="container-fluid">

                    <a class="navbar-brand nav-link" target="_blank" href="intro">
                        <strong>DI</strong>
                    </a>
                    <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarExample01"
                        aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-bars"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarExample01">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item active">
                                <a class="nav-link" aria-current="page" href="intro">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA" rel="nofollow"
                                    target="_blank">Learn Bootstrap 5</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="https://mdbootstrap.com/docs/standard/" target="_blank">Download MDB UI KIT</a>
                            </li>
                        </ul>

                        <ul class="navbar-nav d-flex flex-row">
                            <li class="nav-item">
                            <LogIn></LogIn>
                             
                            </li>

                            <li class="nav-item me-3 me-lg-0">
                                <a class="nav-link" href="http://www.bntu.by/" rel="nofollow" target="_blank">
                                    <i class="fa fa-university" aria-hidden="true"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div id="intro" class="bg-image shadow-2-strong">
                <div class="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
                    <div class="container d-flex align-items-center justify-content-center text-center h-100">
                        <div class="text-white">
                            {<section class="text-center">
                                <h4 class="mb-5"><strong>Информация по дипломному проектированию</strong></h4>
                               
                                <Cards />
                            </section>
                            }</div>
                    </div>
                </div>
            </div>
        </header>

    );
}

export default Header;
