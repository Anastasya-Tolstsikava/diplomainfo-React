import React from 'react';
import LogIn from './LogIn';

function Footer() {
    return (
        <footer class="bg-light text-lg-start">

            <div class="text-center py-4 align-items-center">
                <p>Follow BNTU on social media</p>
                <a href="https://www.youtube.com/channel/UC_GUzzgsYY1feLcJwXuG7Pg" class="btn btn-primary m-1" role="button"
                    rel="nofollow" target="_blank">
                    <i class="fab fa-youtube"></i>
                </a>
                <a href="https://www.facebook.com/bntu.by/" class="btn btn-primary m-1" role="button" rel="nofollow"
                    target="_blank">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com/times_bntu" class="btn btn-primary m-1" role="button" rel="nofollow"
                    target="_blank">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="https://t.me/s/bntuby" class="btn btn-primary m-1" role="button" rel="nofollow"
                    target="_blank">
                    <i class="fab fa-telegram"></i>
                </a>
            </div>


            <div class="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                © 2021 Copyright: 
                <a class="text-dark" href="http://www.bntu.by/"> bntu.by</a>
            </div>

        </footer>
    )
}

export default Footer;