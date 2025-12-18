/** @jsxImportSource @emotion/react */
import ReactModal from "react-modal";
import * as s from "./styles";
import { useMeQuery } from "../../queries/usersQueries";
import Loading from "../common/Loading";
import Select from "react-select";
import { IoCloudUploadOutline } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { useRef } from "react";

function AddPostModal({isOpen, onRequestClose, layoutRef}) {
    const imageListBoxRef = useRef();
    const {isLoading, data} = useMeQuery();

    const handleOnWheel = (e) => {  
        imageListBoxRef.current.scrollLeft += e.deltaY;
    }

    if (isLoading) {
        return <Loading />
    }

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
                <main>
                    <div css={s.profileContainer}>
                        <div css={s.profileImg(data.data.imgUrl)}></div>
                        <div>{data.data.nickname}</div>
                    </div>
                    <Select
                        options={[
                            {
                                label: "Public",
                                value: "Public"
                            },
                            {
                                label: "Follow",
                                value: "Follow"
                            },
                        ]} />
                    <div css={s.contentInputBox}>
                        <textarea></textarea>
                    </div>
                    <div css={s.uploadBox}>
                        <IoCloudUploadOutline />
                        <div>Please post your story.</div>
                        <button>Add Image</button>
                    </div>
                    <div css={s.imageListBox} ref={imageListBoxRef} onWheel={handleOnWheel}>

                        <div css={s.preview()}>
                            <div><IoIosClose /></div>
                        </div>
                        <div css={s.preview()}>
                            <div><IoIosClose /></div>
                        </div>
                        <div css={s.preview()}>
                            <div><IoIosClose /></div>
                        </div>
                        <div css={s.preview()}>
                            <div><IoIosClose /></div>
                        </div>
                        <div css={s.preview()}>
                            <div><IoIosClose /></div>
                        </div>
                        <div css={s.preview()}>
                            <div><IoIosClose /></div>
                        </div>
                    </div>
                </main>
                <footer>
                    <button css={s.postButton}>Post</button>
                    <button onClick={onRequestClose}>Cancel</button>
                </footer>
            </div>
    </ReactModal>
}

export default AddPostModal;