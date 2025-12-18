/** @jsxImportSource @emotion/react */
import { Link, useLocation } from "react-router-dom";
import * as s from "./styles";

import { IoHomeOutline, IoAddCircleOutline } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { useMeQuery } from "../../queries/usersQueries";
import AddPostModal from "../post/AddPostModal";
import { useRef, useState } from "react";

function LeftSideBar({children}) {
    const location = useLocation();
    const {pathname} = location;
    const [ addPostModalOpen, setAddPostModalOpen ] = useState(false);
    const layoutRef = useRef();

    const {isLoading, data} = useMeQuery();

    const handleAddPostModalOpenOnClick = () => {
        setAddPostModalOpen(true);
    }

    const addPostModalClose = () => {
        setAddPostModalOpen(false);
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
            </ul>
            <div>
                <Link to={"/logout"}>Logout</Link>
            </div>
        </aside>
        <div>
            {children}
        </div>
        {
            !!layoutRef.current && 
            <AddPostModal 
                isOpen={addPostModalOpen} 
                onRequestClose={addPostModalClose}
                layoutRef={layoutRef} />
        }
    </div>
}

export default LeftSideBar;