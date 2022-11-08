import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/TimeLine";

function HomePage() {
    return (
        <>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
            }}>
                <Menu/>
                <Header />
                <TimeLine playlists={config.playlists} />
            </div>
        </>
    );
}

export default HomePage

/*function Menu() {
    return (
        <div>
            menu
        </div>
    )
}*/

const StyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .usuario-informacao {
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 50px;
    padding: 25px 32px 0px 32px;
    gap: 16px;
  }
  `;

function Header() {
    return (
        <StyledHeader>

            <section className="usuario-informacao">
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.description}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
}

function TimeLine(props) {
    const playlistNames = Object.keys(props.playlists);
    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = props.playlists[playlistName];
                console.log(playlistName);
                console.log(videos);
                return (
                    <section>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}