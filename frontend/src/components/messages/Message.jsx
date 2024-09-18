

    const Message = () => {

    return (
        <div className={`chat chat-end`}>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src={"https://cdn0. iconfinder. eom/data/icons/communication-line-10/24/account_profiie_user_contact_person_avatar_placehoider-512.png"} />
            </div>
        </div>
        <div
            className={`chat-bubble text-white bg-blue-500 pb-2`}
        >
            Hii whats app
        </div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
            12.22
        </div>
        </div>
    );
    };
    export default Message;
