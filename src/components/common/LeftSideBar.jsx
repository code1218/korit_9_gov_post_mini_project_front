/** @jsxImportSource @emotion/react */
import { Link, useLocation } from "react-router-dom";
import * as s from "./styles";

import { IoHomeOutline, IoAddCircleOutline } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { useMeQuery } from "../../queries/usersQueries";
import AddPostModal from "../post/AddPostModal";
import { useEffect, useRef, useState } from "react";
import ProfileModal from "../profile/ProfileModal";

function LeftSideBar({children}) {
    const location = useLocation();
    const {pathname} = location;
    const [ addPostModalOpen, setAddPostModalOpen ] = useState(false);
    const [ profileModalOpen, setProfileModalOpen ] = useState(false);
    const [ homeRefresh, setHomeRefresh ] = useState(false);
    const layoutRef = useRef();

    const {isLoading, data} = useMeQuery();

    useEffect(() => {
        if (homeRefresh) {
            setHomeRefresh(false);
        }
    }, [homeRefresh]);

    const handleAddPostModalOpenOnClick = () => {
        setAddPostModalOpen(true);
    }

    const addPostModalClose = () => {
        setAddPostModalOpen(false);
    }

    const handleProfileModalOpenOnClick = () => {
        setProfileModalOpen(true);
    }

    const profileModalClose = () => {
        setProfileModalOpen(false);
    }

    return <div css={s.sideBarLayout} ref={layoutRef}>
        <aside css={s.sideBarContainer}>
            <h1>Social Board</h1>
            <ul>
                <Link to={"/"}><li css={s.menuListItem(pathname === "/")}><div><IoHomeOutline /></div>Home</li></Link>
                <Link to={"/search"}><li css={s.menuListItem(pathname === "/search")}><div><MdOutlineExplore /></div>Explore</li></Link>
                <Link><li css={s.menuListItem(false)} onClick={handleAddPostModalOpenOnClick}><div><IoAddCircleOutline /></div>Add a Post</li></Link>
                {
                    isLoading || <Link to={"/" + data.data.nickname}><li css={s.menuListItem(decodeURI(pathname)=== "/" + data.data.nickname)}><div><div css={s.profileImg(data.data.imgUrl)}></div></div>{data.data.nickname}</li></Link>
                }
                <Link><li css={s.menuListItem(false)} onClick={handleProfileModalOpenOnClick}><div><IoAddCircleOutline /></div>사용자 정보</li></Link>
            </ul>
            <div>
                <Link to={"/logout"}>Logout</Link>
            </div>
        </aside>
        {!homeRefresh && children}
        {
            !!layoutRef.current && addPostModalOpen &&
            <AddPostModal 
                isOpen={addPostModalOpen} 
                onRequestClose={addPostModalClose}
                layoutRef={layoutRef}
                setHomeRefresh={setHomeRefresh} />
        }
        {
            !!layoutRef.current && profileModalOpen &&
            <ProfileModal 
                isOpen={profileModalOpen} 
                onRequestClose={profileModalClose}
                layoutRef={layoutRef} />
        }
    </div>
}

export default LeftSideBar;