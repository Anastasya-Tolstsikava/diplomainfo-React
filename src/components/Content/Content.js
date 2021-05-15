import React from 'react';
import Cards from "./components/Cards";

const Content = ({userDetails}) => {
    return (
        <div id="intro" className="bg-image shadow-2-strong">
            <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
                <div className="container d-flex align-items-center justify-content-center text-center h-200">
                    <div className="text-white">
                        <section className="text-center">
                            <h4 className="mb-5"><strong>Информация по дипломному проектированию</strong></h4>
                            <div className="text-black">
                                <Cards userDetails={userDetails}/>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
