/** @jsxImportSource @emotion/react */
import Slider from "react-slick";
import Loading from "../../components/common/Loading";
import { useGetFeeds } from "../../queries/postQueries";
import * as s from "./styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
    const { isLoading, data } = useGetFeeds();
    console.log("isLoading:", isLoading);
    console.log("data:", data);

    return <div css={s.layout}>
        <div css={s.feedContainer}>
            {
                (isLoading && <Loading />) || data.pages.map(feeds => feeds.data.contents.map(feed => (
                    <div key={feed.feedId} css={s.feedItemContainer}>
                        <header>
                            <div css={s.profileImage(feed.user.imgUrl)}></div>
                            <div css={s.userInfo}>
                                <div>{feed.user.nickname}</div>
                                <div>{feed.createdAt}</div>
                            </div>
                        </header>
                        <main>
                            <div css={s.feedImageContainer}>
                                <Slider
                                    infinite={true}
                                    speed={500}
                                    slidesToShow={1}
                                    slidesToScroll={1}>
                                        {
                                            feed.imageFiles.map(file => (
                                                <div css={s.feedImage("http://localhost:8080/image" + file.filePath)}>
                                                </div>
                                            ))
                                        }
                                </Slider>
                            </div>
                            <div css={s.feedContentContainer}>
                                {feed.content}
                            </div>
                        </main>
                        <footer>

                        </footer>
                    </div>
                )))
            }
        </div>
        <div css={s.followInfoContainer}>

        </div>
    </div>
}

export default Home;