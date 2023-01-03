import React from 'react';

const Search = () => {
    return (
        <div className="search">
            <div className="searchForm">
                <input type="text" placeholder="Find a user"/>
            </div>
            <div className="userChat">
                <img src={"https://media.vozpopuli.com/2021/12/11/caesar-by-rubens-e1639234694388.jpg"} alt={""} />
                <div className="userChatInfo">
                    <span>Jane</span>
                </div>
            </div>
        </div>
    );
};

export default Search;
