import React from "react";

const NotFoundHeader = () => {
  return (
      <header>
        <nav className="flex items-center justify-between p-3 h-20">
          <img className="mx-auto h-16 mr-2 ml-1" src={require('../../media/logo_nav.png')} alt="logo"/>
            <div className="text-sm lg:flex-grow">
              <a href="/"
                 className="logo_text block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                <span className="logo_text_first">Дай</span>
                <span className="logo_text_second">на</span>
                <span className="logo_text_third">Чай</span>
              </a>
            </div>
        </nav>
      </header>
  );
};

export default NotFoundHeader;
