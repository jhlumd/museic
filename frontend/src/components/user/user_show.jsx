import React from "react";
import SnippetShowCard from "../snippet_index/snippet_show_card";
import UserCard from "./user_card";

class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFan: this.props.isFan,
      // fanId: this.props.fanId,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleFollow = this.handleFollow.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllSnippets();
    this.props.fetchLikes();
    this.props.fetchUsers();
    this.props.fetchImages();
    this.props.fetchFans();
    this.props.fetchComments();

    // handle the section pointer
    var targets = document.querySelectorAll("div.user-stat");
    targets.forEach((target) => {
      target.addEventListener("click", (e) => {
        document.querySelector(".current").classList.remove("current");
        target.classList.add("current");
      });
    });
  }

  componentDidUpdate() {
    // handle whether or not you see the edit option for the profile pic
    if (this.props.userId === this.props.currentUser.id) {
      document.querySelector(".user-icon-container").classList.add("editable");
    } else {
      document
        .querySelector(".user-icon-container")
        .classList.remove("editable");
    }
  }

  handleClick() {
    if (this.props.userId === this.props.currentUser.id) {
      this.props.openModal("upload");
    }
  }

  followDisplay() {
    if (this.props.userId === this.props.currentUser.id) {
      return <p className="padding"></p>;
    } else if (this.props.isFan) {
      return (
        <button className="follow-btn" onClick={() => this.handleFollow()}>
          unfollow
        </button>
      );
    } else {
      return (
        <button className="follow-btn" onClick={() => this.handleFollow()}>
          follow
        </button>
      );
    }
  }

  handleFollow() {
    if (this.props.isFan) {
      this.setState({ isFan: this.props.isFan });
      this.props.removeFan(this.props.fanId);
    } else {
      this.setState({ isFan: this.props.isFan });
      const newFan = {
        fanId: this.props.currentUser.id,
        idolId: this.props.userId,
      };
      this.props.addFan(newFan);
    }
  }

  scrollTo(className) {
    const section = document.querySelector(`section.${className}`);
    section.scrollIntoView({ behavior: "smooth" });
  }

  render() {
    const {
      snippets,
      snippetLikes,
      users,
      comments,
      fans,
      images,
      likes,
      currentUser,
      userId,
      composeComment,
      removeComment,
      editComment,
      newLike,
      unlike,
    } = this.props;

    if (!images) {
      return null;
    }

    let snippetCount = 0;
    const mySnippets = []; //snippets belonging to the profile's user
    snippets.forEach((snippet) => {
      if (snippet.user === userId) {
        snippetCount += 1;
        mySnippets.push(snippet); //snippets created by the user, that this profile refers to
      }
    });
    let likeCount = 0;
    snippetLikes.forEach((snippetId) => {
      const likes = Object.values(snippetId);
      likes.forEach((like) => {
        if (like.user === userId) {
          likeCount += 1;
        }
      });
    });

    let profileImageUrlAddress =
      "https://museic-dev.s3-us-west-1.amazonaws.com/default-user-icon.svg"; //profile image aws address
    if (images[userId]) {
      profileImageUrlAddress = images[userId].aws_url;
    }

    let fansCount = 0;
    const myFans = [];
    fans.forEach((fanObj) => {
      if (fanObj.idol === userId) {
        myFans.push(fanObj);
        fansCount += 1;
      }
    });

    let followCount = 0;
    const myFollowers = [];
    fans.forEach((fanObj) => {
      if (fanObj.fan === userId) {
        myFollowers.push(fanObj);
        followCount += 1;
      }
    });

    const snippetDisplay =
      snippetCount < 1 ? (
        <p className="empty-msg">No snippets yet</p>
      ) : (
        <ul className="snippet-show-container">
          {mySnippets.map((snippet) => {
            const snippetId = snippet._id;
            return (
              <SnippetShowCard
                key={snippetId}
                snippet={snippet}
                comments={comments[snippetId]}
                snippetId={snippetId}
                likes={likes[snippetId]}
                users={users}
                userId={currentUser.id}
                images={images}
                composeComment={composeComment}
                removeComment={removeComment}
                editComment={editComment}
                newLike={newLike}
                unlike={unlike}
              />
            );
          })}
        </ul>
      );

    const fanDisplay =
      fansCount < 1 ? (
        <p className="empty-msg">No fans yet</p>
      ) : (
        <ul className="fan-container user-cards">
          {myFans.map((fan) => {
            let url =
              "https://museic-dev.s3-us-west-1.amazonaws.com/default-user-icon.svg";
            if (images[fan.fan]) {
              url = images[fan.fan].aws_url;
            }
            return (
              <UserCard
                key={fan._id}
                id={fan.fan}
                name={users[fan.fan]}
                icon={url}
              />
            );
          })}
        </ul>
      );

    const idolDisplay =
      followCount < 1 ? (
        <p className="empty-msg">No idols yet</p>
      ) : (
        <ul className="idol-container user-cards">
          {myFollowers.map((follower) => {
            let url =
              "https://museic-dev.s3-us-west-1.amazonaws.com/default-user-icon.svg";
            if (images[follower.idol]) {
              url = images[follower.idol].aws_url;
            }
            return (
              <UserCard
                key={follower._id}
                id={follower.idol}
                name={users[follower.idol]}
                icon={url}
              />
            );
          })}
        </ul>
      );

    return (
      <div className="user-show-container">
        <div className="left-container">
          <div className="user-info-container">
            <div
              className="user-icon-container"
              onClick={() => this.handleClick()}
            >
              <div className="image-upload-hover">
                <img className="profile-picture" src={profileImageUrlAddress} />
              </div>
            </div>

            <div className="user-text-info-container">
              <h2 className="username">{users[userId]}</h2>
              {this.followDisplay()}
              <div className="snippets user-stat current">
                <p className="num">{snippetCount}</p>
                <p className="label" onClick={() => this.scrollTo("snippets")}>
                  Snippets
                </p>
              </div>
              <div className="likes user-stat">
                <p className="num">{likeCount}</p>
                <p className="label">Likes</p>
              </div>
              <div className="fans user-stat">
                <p className="num">{fansCount}</p>
                <p className="label" onClick={() => this.scrollTo("fans")}>
                  Fans
                </p>
              </div>
              <div className="following user-stat">
                <p className="num">{followCount}</p>
                <p className="label" onClick={() => this.scrollTo("idols")}>
                  Idols
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="right-container">
          <section className="snippets">
            <h2>Snippets</h2>
            {snippetDisplay}
          </section>

          <section className="fans">
            <h2>Fans</h2>
            {fanDisplay}
          </section>

          <section className="idols">
            <h2>Idols</h2>
            {idolDisplay}
          </section>
        </div>
      </div>
    );
  }
}

export default UserShow;
