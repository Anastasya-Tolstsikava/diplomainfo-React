import React from 'react';
import Social from "./Social";

const Socials = () => {
    return(
        <div>
            <Social
                href="https://www.youtube.com/channel/UC_GUzzgsYY1feLcJwXuG7Pg"
                icon={<i className="fab fa-youtube"/>}
            />
            <Social
                href="https://www.facebook.com/bntu.by/"
                icon={<i className="fab fa-facebook-f"/>}
            />
            <Social
                href="https://t.me/s/bntuby"
                icon={<i className="fab fa-telegram"/>}
            />
            <Social
                href="https://twitter.com/times_bntu"
                icon={<i className="fab fa-twitter"/>}
            />
        </div>
    );
}

export default Socials;
