/** @jsxImportSource @emotion/react */
import { BiSend } from "react-icons/bi";
import * as s from "./styles";
import { useState } from "react";
import { useCreatePostCommentMutation } from "../../mutations/postMutations";

function Comment({postId}) {
    const [ inputValue, setInputValue ] = useState("");
    const commentMutation = useCreatePostCommentMutation();

    const handleOnChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleOnSubmit = async () => {
        const data = {
            parentCommentId: 0,
            parentUserId: 0,
            content: inputValue,
        };

        await commentMutation.mutateAsync({postId, data});
        alert("댓글 작성 완료");
        setInputValue("");
    }

    const handleOnKeyDown = (e) => {
        if (e.key === "Enter") {
            handleOnSubmit();
        }
    }

    return <div css={s.layout}>
        <h2>댓글</h2>
        <div css={s.commentItemList}>
            <div css={s.commentItem}>
                <div>
                    <div></div>
                    <div></div>
                </div>
                <div></div>
            </div>
        </div>
        <div>
            <div css={s.commentInput}>
                <input type="text" 
                    placeholder="댓글을 입력하세요."
                    value={inputValue}
                    onChange={handleOnChange}
                    onKeyDown={handleOnKeyDown} />
                <BiSend onClick={handleOnSubmit}/>
            </div>
        </div>
    </div>
}

export default Comment;