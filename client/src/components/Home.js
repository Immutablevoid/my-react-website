import React, { Component } from 'react';
import { FaChild, FaGamepad, FaWordpress } from 'react-icons/fa';
import ReactLoading from 'react-loading';
import '../styles/style.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import GameSlider from './GameSlider';

/**
 * Home component page
 */
class Home extends Component {
  // Initialize the state
  constructor(props) {
    super(props);
    this.state = {
      feeds: [],
      loading: false,
    };
  }

  // Fetch the list of first mount
  componentDidMount() {
    this.getFeed();
  }

  getFeed = () => {
    this.setState({ loading: true }, () => {
      fetch('/api/getBlogFeed')
        .then((res) => res.json())
        .then((feeds) => this.setState({
          feeds,
          loading: false,
        })).catch((err) => {
          // eslint-disable-next-line
          console.log(err);
          this.setState({
            loading: false,
          });
        });
    });
  }

  /**
   * Rendering app component
   * @return { html } Rendering html
   */
  render() {
    const { feeds, loading } = this.state;
    return (
      <div className="wrapper u-no-margin--top">
        <div className="p-suru">
          <div className="p-strip is-deep">
            <div className="row">
              <h2>
                <FaChild />
                &nbsp;Welcome to my website!
              </h2>
              <p>
                This is my personal website used for the purpose of displaying
                projects.
              </p>
            </div>
          </div>
        </div>
        <div
          className="p-strip is-bordered is-deep"
          style={{ color: '#000' }}
        >
          <div className="row">
            <h2>
              <FaGamepad />
              &nbsp;Game development projects
            </h2>
            <p>
              I find great enjoyment in game development. Whenever I have free-time I tend
              to turn to game development. Below are the list of games I have worked on or
              developed.
            </p>
            <GameSlider />
          </div>
        </div>
        <div
          className="p-strip is-bordered is-deep"
          style={{ background: '#dcdcdc' }}
        >
          <div className="row">
            <h2>
              <FaWordpress />
              &nbsp;Blog feed
            </h2>
            <p>
                A blog created using WordPress to share my adventures in contributing to
                open source projects.
            </p>
            {loading ? (
              <div className="center">
                <ReactLoading
                  type="spin"
                  color="#FFF"
                  height="20%"
                  width="20%"
                />
              </div>
            ) : (
              <div>
                {feeds.length ? (
                  <div className="row">
                    {/* Check to see if any items are found */}
                    {feeds.map((item) => (
                      <div key={item.title} className="p-card col-4">
                        <h3>
                          <a href={item.link}>{item.title}</a>
                        </h3>
                        <hr />
                        {item.summary
                          .replace('[&#8230;]', '...')
                          .replace('&#8217;', '\'')}
                        <a href={item.link}>Read more</a>
                        <br />
                        <br />
                        Published Date:&nbsp;
                        {new Date(item.pubDate).toDateString()}
                        <br />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div>No data found!</div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
