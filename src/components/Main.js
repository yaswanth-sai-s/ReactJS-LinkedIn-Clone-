import styled from "styled-components";

const Main = (props) => {
  return (
    <Container>
      <ShareBox>
      <div>
        <img src="/images/user.svg" alt="" />
        <button>Start a post</button>
      </div>

      <div>
        
        <button>
          <img className="image1" src="/images/photo-icon.png" alt="" />
          <span>Photo</span>
        </button>
        <button>
          <img  className="image1" src="/images/video-icon.svg" alt="" />
          <span>Video</span>
        </button>
        <button>
          <img  className="image1" src="/images/job-con.png" alt="" />
          <span>Event</span>
        </button>
        <button>
          <img  className="image1" src="/images/article-icon.png" alt="" />
          <span>Write article</span>
        </button>
      
      
      
        </div>
      </ShareBox>
      <hr className="hr"/>
      <div>
        <Article>
          <SharedActor>
            <a>
              <img src="/images/user.svg" alt="" />
              <div>
                <span>Linkedin</span>
                <span>Linkedin learning community</span>
                <span>2d</span>
              </div>
            </a>
            <button>
            <img src="/images/ellipsis.svg" alt="" />
            </button>
          </SharedActor>
          <Description>
            Unlock your free access to 16k+ courses today
          </Description>
          <SharedImg>
            <a>
              <img src="./images/wallpaper.jfif" alt=""/>
            </a>
          </SharedImg>
          <SocialCounts>
            <li>
              <button>
                <img
                  className="sc" src="./images/liked.png"
                  alt="" />
                <img className="sc" src="/images/claps.png" alt="" />
                <img className="sc" src="/images/hheart.png" alt="" />
                <img className="sc" src="/images/heart.png" alt=""/>
                <span>99</span>
              </button>
            </li>
            <li>
              <a>9 comments</a>
            </li>
          </SocialCounts>
          <SocialActions>
          <button>
            <img className="abox" src="./images/like.png" alt="" />
            <span>Like</span>
          </button>
          <button>
            <img className="abox" src="./images/comment.png" alt="" />
            <span>Comments</span>
          </button>
          <button>
            <img className="abox" src="./images/repost.png" alt="" />
            <span>Share</span>
          </button>
          <button>
            <img className="abox" src="./images/send.svg" alt="" />
            <span>Send</span>
          </button>

          </SocialActions>
          
        </Article>
      </div>
      <div>
        <Article>
          <SharedActor>
            <a>
              <img src="/images/user.svg" alt="" />
              <div>
                <span>Linkedin</span>
                <span>Linkedin learning community</span>
                <span>1d</span>
              </div>
            </a>
            <button>
            <img src="/images/ellipsis.svg" alt="" />
            </button>
          </SharedActor>
          <Description>
            Wishing you a Happy Diwali
          </Description>
          <SharedImg>
            <a>
              <img src="./images/wal2.jpg" alt=""/>
            </a>
          </SharedImg>
          <SocialCounts>
            <li>
              <button>
                <img
                  className="sc" src="./images/liked.png"
                  alt="" />
                <img className="sc" src="/images/claps.png" alt="" />
                <img className="sc" src="/images/hheart.png" alt="" />
                <img className="sc" src="/images/heart.png" alt=""/>
                <span>10</span>
              </button>
            </li>
            <li>
              <a>1 comments</a>
            </li>
          </SocialCounts>
          <SocialActions>
          <button>
            <img className="abox" src="./images/like.png" alt="" />
            <span>Like</span>
          </button>
          <button>
            <img className="abox" src="./images/comment.png" alt="" />
            <span>Comments</span>
          </button>
          <button>
            <img className="abox" src="./images/repost.png" alt="" />
            <span>Share</span>
          </button>
          <button>
            <img className="abox" src="./images/send.svg" alt="" />
            <span>Send</span>
          </button>

          </SocialActions>
          
        </Article>
      </div>
    </Container>
  );
};

const Container = styled.div`
  grid-area: main;
  .hr{
    margin: 12px 0;
    color: rgba(0,0,0,0.6);
  }
`;

const Commoncard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);

`;

const ShareBox = styled(Commoncard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  background: white;
  div{
    button{
      outline: none;
      color: rgba(0,0,0,0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 300;
    }
    
    .image1{
      height: 16px;
      width:17px;
    }

    &:first-child{
      display: flex;
      align-items: center;
      padding: 8px 16px 0px 16px;
      img{
        width:48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button{
        margin: 4px 0;
        flex-grow: 1;
        border-radius: 35px;
        padding-left: 16px;
        border: 1px solid rgba(0,0,0,0.15);
        background-color: #eef3f8;
        text-align: left;
      }
    }
    &:nth-child(2){
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;

      button{
        img{
          margin:0 7px 0 -2px;
        }
        span{
          color: rgba(0,0,0,0.7)
        }
        &:hover{
          color: rgba(0,0,0,0.9)
        }
      }
    }

  }


`;


const Article = styled(Commoncard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
  .abox{
    height:20px;
    width:20px;
    outline: none;
  }
`;

const SharedActor = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;
  a{
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;

    img{
      width: 44px;
      height:44px;

    }
    &>div{
      display:flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;
      span{
        text-align: left;
        &:first-child{
          font-size: 14px;
          font-weight: 700;
          color:rgba(0,0,0,1);
        }

        &:nth-child(n+1){
          font-size: 12px;
          color:rgba(0,0,0,0.6);
        }
      }
    }
  }
  button{
    position: absolute;
    right: 12px;
    top:0;
    background: transparent;
    border: none;
    outline:none;
  }
`;

const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color:rgba(0,0,0,0.9);
  font-size: 12px;
  text-align: left;
`;

const SharedImg = styled.div`
margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;
  img{
    object-fit: contain;
    width: 100%;
    height:100%;
  }
`;

const SocialCounts = styled.ul`
  font-weight: 600;
  
  span{
    font-weight: 700;
    font-size: 12px;
  }
  .sc{
    width: 14px;
    height: 14px;
  }
  line-height: 1.3;
  display: flex;
  align-items: flex-start;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  list-style:none;
  li{
    margin-right: 5px;
    font-size: 12px;
    button{
      display: flex;
    }
  }



`;



const SocialActions = styled.div`

  align-items: center;
  display: flex;
  margin: 0;
  min-height: 40px;
  padding: 4px 10px;
  button{
    width: 100%;
    display: inline-flex;
    align-items: center;
    padding-left: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    color: rgba(0,0,0,0.7);
    font-weight: 500;
    font-size: 13px;
    border: none;

    span{
      margin-left: 8px;
    }
  }
`;

export default Main;