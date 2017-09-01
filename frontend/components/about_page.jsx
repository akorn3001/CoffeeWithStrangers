import React from 'react';

class About extends React.Component {

  render () {
    return (
      <div>
        <div className="about-banner">
          <img src={window.staticImages.aboutBanner}/>
          <span>About Coffee With Strangers</span>
        </div>

        <div className="about-schpiel">
          <h2>You like coffee. Other people like coffee. You know that strangers
            can become friends by talking about their mutual love of coffee.
          </h2>

          <p>
            Think you're up to the task of becoming a host and bringing people together over coffee?
          </p>

          <ol>
            <li>What would I be doing?</li>
            <li>What are the perks? (HAHA get it?)</li>
            <li>Do Ihave the right stuff?</li>
            <li>How can I become a host?</li>
          </ol>

          <p>
            We asked some other hosts and here's their two cents about hosting.
          </p>

          <h3>
            CWS hosts bring people together - facilitating an experience that helps
            coalesce the vapors of human experience into a viable and meaningful
            comprehension.
          </h3>

          <p>
            Everybody's different and that is what makes us the same. Hosts draw
            from their own unique backgrounds to connect and relate with others over
            a good cup of coffee. Really connecting with others is a lost art and
            a CWS host understands that. At the end of the day we're trying to make
            our big big world just a little bit smaller.
          </p>

          <h3>
            Our team of hosts is getting bigger all the time.
          </h3>

          <p>
            Being a CWS host can add a sense of purpose to your life. It can make
            the ho-hum everyday seem a little more special by knowing you're making
            a difference by bringing people together who wouldn't otherwise ever
            meet! Being a host strengthens your listening skills, and makes you a
            more empathic person.
          </p>

          <p>
            Being a CWS host means being part of a global family. Hosting a meetup
            in Seattle or London or Gravity Falls makes you realize how similar we
            all really are. Imagine sitting down with people and already knowing you
            have something in common - the desire to connect and make our world a
            more understanding and kinder place. That is what a host does.
          </p>

          <h3>
            You know who you are and what you stand for.
          </h3>

          <p>
            If you like coffee, people, and those people's stories then you have
            what it takes to become a CWS host! What are you waiting for? Click
            the big button below!
          </p>

          <h3>
            Join us!
          </h3>
          
        </div>;
      </div>
    );
  }
}

export default About;
