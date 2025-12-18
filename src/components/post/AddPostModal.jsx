/** @jsxImportSource @emotion/react */
import ReactModal from "react-modal";
import * as s from "./styles";

function AddPostModal({isOpen, onRequestClose, layoutRef}) {

    return <ReactModal 
        style={{
            overlay: {
                position: "absolute",
                top: 0,
                left: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#00000000"
            },
            content: {
                position: "static",
                boxShadow: "0 0 10px 5px #00000033",
                padding: "0",
            }
        }}
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
        parentSelector={() => layoutRef.current}
        appElement={layoutRef.current}
        ariaHideApp={false}>
            <div css={s.modalLayout}>
                <header>
                    <h2>Add a Post</h2>
                </header>
                <main></main>
                <footer>
                    <button css={s.postButton}>Post</button>
                    <button>Cancel</button>
                </footer>
            </div>
    </ReactModal>
}

export default AddPostModal;