/* eslint-disable react/prop-types */
import { useState } from 'react';
interface TabsProps {
  description: string;
  rating: number;
  scoresCount: number;
  runTime: number;
  director: string;
  genre: string;
  starring: string[];
}

const Tabs: React.FC<TabsProps> = ({
  description,
  rating,
  scoresCount,
  director,
  starring,
  genre,
  runTime,
}) => {
  const [activeTab, setActiveTab] = useState('overview');
  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li
            onClick={() => setActiveTab('overview')}
            className={`film-nav__item ${
              activeTab === 'overview' ? 'film-nav__item--active' : ''
            }`}
          >
            <div style={{ cursor: 'pointer' }} className="film-nav__link">
              Overview
            </div>
          </li>
          <li
            onClick={() => setActiveTab('details')}
            className={`film-nav__item ${
              activeTab === 'details' ? 'film-nav__item--active' : ''
            }`}
          >
            <div style={{ cursor: 'pointer' }} className="film-nav__link">
              Details
            </div>
          </li>
          <li
            onClick={() => setActiveTab('reviews')}
            className={`film-nav__item ${
              activeTab === 'reviews' ? 'film-nav__item--active' : ''
            }`}
          >
            <div style={{ cursor: 'pointer' }} className="film-nav__link">
              Reviews
            </div>
          </li>
        </ul>
      </nav>

      {activeTab === 'overview' ? (
        <>
          <div className="film-rating">
            <div className="film-rating__score">{rating}</div>
            <p className="film-rating__meta">
              <span className="film-rating__level">Very good</span>
              <span className="film-rating__count">{scoresCount} ratings</span>
            </p>
          </div>

          <div className="film-card__text">
            <p>{description}</p>

            <p className="film-card__director">
              <strong>Director: {director}</strong>
            </p>

            <p className="film-card__starring">
              <strong>Starring: {starring.join(', ')}</strong>
            </p>
          </div>
        </>
      ) : (
        ''
      )}
      {activeTab === 'details' ? (
        <div className="film-card__text film-card__row">
          <div className="film-card__text-col">
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Director</strong>
              <span className="film-card__details-value">{director}</span>
            </p>
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Starring</strong>
              <span className="film-card__details-value">
                {starring.join(', <br/>')}
              </span>
            </p>
          </div>

          <div className="film-card__text-col">
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Run Time</strong>
              <span className="film-card__details-value">
                {Math.floor(runTime / 60)}h {runTime % 60}m
              </span>
            </p>
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Genre</strong>
              <span className="film-card__details-value">{genre}</span>
            </p>
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Released</strong>
              <span className="film-card__details-value">2014</span>
            </p>
          </div>
        </div>
      ) : (
        ''
      )}
      {activeTab === 'reviews' ? (
        <div className="film-card__reviews film-card__row">
          <div className="film-card__reviews-col">
            <div className="review">
              <blockquote className="review__quote">
                <p className="review__text">
                  Discerning travellers and Wes Anderson fans will luxuriate in
                  the glorious Mittel-European kitsch of one of the
                  director&#8217;s funniest and most exquisitely designed films
                  in years.
                </p>

                <footer className="review__details">
                  <cite className="review__author">Kate Muir</cite>
                  <time className="review__date" dateTime="2016-12-24">
                    December 24, 2016
                  </time>
                </footer>
              </blockquote>

              <div className="review__rating">8,9</div>
            </div>

            <div className="review">
              <blockquote className="review__quote">
                <p className="review__text">
                  Anderson&#8217;s films are too precious for some, but for
                  those of us willing to lose ourselves in them, they&#8217;re a
                  delight. &#8220;The Grand Budapest Hotel&#8221; is no
                  different, except that he has added a hint of gravitas to the
                  mix, improving the recipe.
                </p>

                <footer className="review__details">
                  <cite className="review__author">Bill Goodykoontz</cite>
                  <time className="review__date" dateTime="2015-11-18">
                    November 18, 2015
                  </time>
                </footer>
              </blockquote>

              <div className="review__rating">8,0</div>
            </div>

            <div className="review">
              <blockquote className="review__quote">
                <p className="review__text">
                  I didn&#8217;t find it amusing, and while I can appreciate the
                  creativity, it&#8217;s an hour and 40 minutes I wish I could
                  take back.
                </p>

                <footer className="review__details">
                  <cite className="review__author">Amanda Greever</cite>
                  <time className="review__date" dateTime="2015-11-18">
                    November 18, 2015
                  </time>
                </footer>
              </blockquote>

              <div className="review__rating">8,0</div>
            </div>
          </div>
          <div className="film-card__reviews-col">
            <div className="review">
              <blockquote className="review__quote">
                <p className="review__text">
                  The mannered, madcap proceedings are often delightful,
                  occasionally silly, and here and there, gruesome and/or
                  heartbreaking.
                </p>

                <footer className="review__details">
                  <cite className="review__author">Matthew Lickona</cite>
                  <time className="review__date" dateTime="2016-12-20">
                    December 20, 2016
                  </time>
                </footer>
              </blockquote>

              <div className="review__rating">7,2</div>
            </div>

            <div className="review">
              <blockquote className="review__quote">
                <p className="review__text">
                  It is certainly a magical and childlike way of storytelling,
                  even if the content is a little more adult.
                </p>

                <footer className="review__details">
                  <cite className="review__author">Paula Fleri-Soler</cite>
                  <time className="review__date" dateTime="2016-12-20">
                    December 20, 2016
                  </time>
                </footer>
              </blockquote>

              <div className="review__rating">7,6</div>
            </div>

            <div className="review">
              <blockquote className="review__quote">
                <p className="review__text">
                  It is certainly a magical and childlike way of storytelling,
                  even if the content is a little more adult.
                </p>

                <footer className="review__details">
                  <cite className="review__author">Paula Fleri-Soler</cite>
                  <time className="review__date" dateTime="2016-12-20">
                    December 20, 2016
                  </time>
                </footer>
              </blockquote>

              <div className="review__rating">7,0</div>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
export default Tabs;
