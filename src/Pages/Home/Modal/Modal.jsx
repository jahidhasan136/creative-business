
const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
            <div className="relative bg-white w-full max-w-lg p-4 rounded-lg">
                <button
                    className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700"
                    onClick={onClose}
                >
                    Close
                </button>
                <div className="embed-responsive aspect-w-16 aspect-h-9 py-10">
                    <iframe width="480" height="300" src="https://www.youtube.com/embed/_NNfEDckQgU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    );
};

export default Modal;
