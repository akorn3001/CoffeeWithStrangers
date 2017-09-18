import React from 'react';

class About extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render () {
    return (
      <div>
        <div className="about-banner">
          <img src={window.staticImages.aboutBanner}/>
          <span>About Coffee With Strangers</span>
        </div>

        <div className="about-schpiel">
          <h2>
            We all like to feel like we're among friends.
          </h2>

          <p>
            Coffee With Strangers aims to make meeting new people a little less
            scary by reminding us how much we have in common.
          </p>

          <h3>
            I still don't get it? How will having coffee with a stranger make the world a better place?
          </h3>

          <p>
            There are lots of reasons we choose not to look up at each other from our phones,
            strike up a conversation with a person we don't know, or just forget that
            we're all people with similar hopes and dreams.
          </p>

          <ol>
            <li>We're all trying our best to be our best selves. It can be hard getting out of our own heads.</li>
            <li>We're scared that people will judge us for saying something silly.</li>
          </ol>

          <p>
            Not to fear, however! This is precisely why we have a team of wonderful hosts
            who know this and who strive to break the ice of conversation and bring people
            together over a completely no-stakes conversation. Every meetup is its own
            experience and you learn something new every time.
          </p>

          <p>
            Everybody's different and that is what makes us the same. Hosts draw
            from their own unique backgrounds to connect and relate with others over
            a good cup of coffee. Really connecting with others is a lost art and
            a CWS host understands that. At the end of the day we're trying to make
            our big big world just a little bit smaller.
          </p>

          <p>
            We can make the world a less scary place.
          </p>

          <p>
            It begins with us.
          </p>


        </div>;
      </div>
    );
  }
}

export default About;
