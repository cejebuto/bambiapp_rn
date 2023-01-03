import React from 'react';

const Message = () => {
    return (
        <div className={'message owner'}>
            <div className="messageInfo">
                <img src={"https://media.vozpopuli.com/2021/12/11/caesar-by-rubens-e1639234694388.jpg"} alt={""} />
                <span>just now</span>
            </div>
            <div className="messageContent">
                <p>Hey, how are you?</p>
                <img src={"https://media.vozpopuli.com/2021/12/11/caesar-by-rubens-e1639234694388.jpg"} alt={""} />
            </div>
        </div>
    );
};

export default Message;
