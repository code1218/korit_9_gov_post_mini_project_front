/** @jsxImportSource @emotion/react */
import ReactModal from "react-modal";
import * as s from "./styles";
import { useMeQuery } from "../../queries/usersQueries";
import Loading from "../common/Loading";
import { IoCloudUploadOutline } from "react-icons/io5";
import { useState } from "react";

function ProfileModal({isOpen, onRequestClose, layoutRef}) {
    const {isLoading, data} = useMeQuery();
    const [ isEditMode, setIsEditMode ] = useState(false);
    const [ profileData, setProfileData ] = useState({
        nickname: "",
        name: "",
        email: "",
        imgUrl: "",
    });
    const [ uploadImage, setUploadImage ] = useState(null);

    const handleEditModeToggle = () => {
        if (!isEditMode && data) {
            setProfileData({
                nickname: data.data.nickname,
                name: data.data.name,
                email: data.data.email,
                imgUrl: data.data.imgUrl,
            });
        }
        setIsEditMode(!isEditMode);
    }

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setProfileData({
            ...profileData,
            [name]: value,
        });
    }

    const handleImageUploadOnClick = () => {
        const fileInput = document.createElement("input");
        fileInput.setAttribute("type", "file");
        fileInput.setAttribute("accept", "image/*");
        fileInput.click();

        fileInput.onchange = (e) => {
            const {files} = e.target;
            if (files.length > 0) {
                const file = files[0];
                const fileReader = new FileReader();
                fileReader.readAsDataURL(file);
                fileReader.onload = (e) => {
                    setUploadImage({
                        file,
                        dataURL: e.target.result,
                    });
                }
            }
        }
    }

    const handleSaveOnClick = async () => {
        // TODO: API 연동
        console.log("저장할 데이터:", profileData);
        console.log("업로드할 이미지:", uploadImage);
        alert("프로필 수정 완료");
        setIsEditMode(false);
        setUploadImage(null);
    }

    if (isLoading) {
        return <Loading />
    }

    const currentImgUrl = uploadImage ? uploadImage.dataURL : (isEditMode ? profileData.imgUrl : data.data.imgUrl);

    return <ReactModal
        style={{
            overlay: {
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 20,
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
                    <h2>Profile</h2>
                </header>
                <main>
                    <div css={s.profileImageContainer}>
                        <div css={s.profileImage(currentImgUrl)}></div>
                        {
                            isEditMode &&
                            <button css={s.imageUploadButton} onClick={handleImageUploadOnClick}>
                                <IoCloudUploadOutline />
                            </button>
                        }
                    </div>
                    <div css={s.profileInfoContainer}>
                        <div css={s.infoRow}>
                            <label>User ID</label>
                            <div css={s.infoValue}>{data.data.userId}</div>
                        </div>
                        <div css={s.infoRow}>
                            <label>Nickname</label>
                            {
                                isEditMode ? (
                                    <input
                                        type="text"
                                        name="nickname"
                                        value={profileData.nickname}
                                        onChange={handleInputChange}
                                        css={s.infoInput} />
                                ) : (
                                    <div css={s.infoValue}>{data.data.nickname}</div>
                                )
                            }
                        </div>
                        <div css={s.infoRow}>
                            <label>Name</label>
                            {
                                isEditMode ? (
                                    <input
                                        type="text"
                                        name="name"
                                        value={profileData.name}
                                        onChange={handleInputChange}
                                        css={s.infoInput} />
                                ) : (
                                    <div css={s.infoValue}>{data.data.name}</div>
                                )
                            }
                        </div>
                        <div css={s.infoRow}>
                            <label>Email</label>
                            {
                                isEditMode ? (
                                    <input
                                        type="email"
                                        name="email"
                                        value={profileData.email}
                                        onChange={handleInputChange}
                                        css={s.infoInput} />
                                ) : (
                                    <div css={s.infoValue}>{data.data.email}</div>
                                )
                            }
                        </div>
                    </div>
                </main>
                <footer>
                    {
                        isEditMode ? (
                            <>
                                <button onClick={handleSaveOnClick} css={s.saveButton}>Save</button>
                                <button onClick={handleEditModeToggle}>Cancel</button>
                            </>
                        ) : (
                            <>
                                <button onClick={handleEditModeToggle}>Edit</button>
                                <button onClick={onRequestClose}>Close</button>
                            </>
                        )
                    }
                </footer>
            </div>
    </ReactModal>
}

export default ProfileModal;
