import React from 'react';
import {
  FaTools,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

/**
 * News component page
 */
class News extends React.PureComponent {
  /**
   * Rendering app component
   * @return { html } Rendering html
   */
  render() {
    return (
      <div className="wrapper u-no-margin--top">
        <div
          className="p-strip is-bordered is-deep"
          style={{ background: '#FFF' }}
        >
          <div className="row">
            <h2>
              <FaTools />
              &nbsp;News!
            </h2>
            <h3>About projects I am currently working on!</h3>
            <div
              className="p-card--highlighted"
            >
              <h4>
                <b>Sumo Form</b>
                <br />
                Aug 15 2020 - Present
              </h4>
              <p>
                Pulling sumo tournament information from&nbsp;
                <a href="http://sumo.or.jp">
                  http://sumo.or.jp
                </a>
                &nbsp;basically keeping track of scores/adding scores.
                If you know Paul, you know he&apos;s cray cray for Sumo :)
                This project is pretty much fantasy football.
                This project is mostly for me and my friends, I will count the points
                and send a message at the end of the sumo tournament.
                <br />
                <br />
                Project link:&nbsp;
                <Link className="p-button--brand" to="/sumoform">Sumo Form</Link>
                <br />
                Project link:&nbsp;
                <Link className="p-button--brand" to="/sumoresults">Sumo Results</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default News;