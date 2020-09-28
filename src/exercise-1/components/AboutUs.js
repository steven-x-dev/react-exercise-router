import React from 'react';
import { Link } from 'react-router-dom';

class AboutUs extends React.Component {

  render() {
    return (
      <div>
        Company: ThoughtWorks Local
        <br />
        Location: Xi'an
        <br />
        <br />
        For more information, please
        <br />
        view our <Link to='/' className='redirect'>website</Link>.
      </div>
    );
  }
}

export default AboutUs;
