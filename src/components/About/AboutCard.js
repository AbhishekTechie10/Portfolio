import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-1">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abhishek Nikam </span>
            from <span className="purple"> Maharashtra, India.</span>
            <br />
            I am currently employed as a associate software developer at Endava.
            <br />
            I have completed My Btech from MIT ACADEMY OF ENGINEERING
            
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching and Playing Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking Food 
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "You have to fight to reach your dream. You have to sacrifice and work hard for it."{" "}
          </p>
          <footer className="blockquote-footer">Lionel Messi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
