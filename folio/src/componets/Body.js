import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import madden from "../assets/images/madden.jpg";
function Body() {
  return (
    <CardGroup>
      <Card>

        <Card.Img variant="top" src="https://assets-prd.ignimgs.com/2022/01/21/madden-nfl-17-button-fin-1642736852482.jpg?width=300&crop=1%3A1%2Csmart" />

        <Card.Body>
          <Card.Title>Madden 17</Card.Title>
          <Card.Text>
            MADDEN 17 PLATFORM- PS 4 , XBOX 1
            TOOLS- EXCEL, DEVTRACK, CONFLUENCE, HANSOFT
            ROLES AND RESPONSIBILITIES
            ►Resolved a game-breaking bug in Owner mode, and identified the issue through playtesting.

            ►Edited scripts to make it possible for teams to turn a profit via an in-house engine to allow profit in owner mode.

            ►Developed a new user-facing screen showing which plays they worked on in training and bonus points earned.

            I was a tuning designer on Madden’s Franchise mode. My main task was to create new training drills and to update the old drills in skills trainer.
            I worked closely with another designer Malik Toppins.  After the drills were created Malik and I would discuss how difficult we wanted the drills to be.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://images.squarespace-cdn.com/content/v1/59b60cdebce17645d659dee6/1646894859668-WZTJGJYSO3WOFN5Q9O3V/wwe-2k22-cover-deluxe-edition-19336-1920.jpg?format=500w" />
        <Card.Body>
          <Card.Title>WWE</Card.Title>
          <Card.Text>
            WWE 2K22 PLATFORM- PS 4/5 , XBOX 1 , XBOX SERIES X/S , PC
            ROLES AND RESPONSIBILITIES
            ►Resolved over 200 validation errors by setting up character costumes and background audio for story mode.

            ►Resolved game-breaking bugs in matches by fixing the scripting errors.

            ►Implemented loading animation screens that showed which brand the next match will be part of in the story mode.

            I collaborated with a team of 21 to update and add new match data to my rise’s gameplay experience.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
     
        <Card.Img variant="top" src="https://drive.google.com/uc?export=view&id=1JR0iTu0wyrGeV78UM1N85dXfOrKBtNuh"/>
        <Card.Body>
          <Card.Title>Big12-Scorigami</Card.Title>
          <Card.Text>
            Scorigami is the art of achieving a final score in an NFL game that has never happened before. 
            It is a term made up by Jon Bois, a concept perfected by Pete Carroll, and a goal that may not be completed before the heat death of the universe.
             We took that concept and applied to every NCAA Football season to see what that chart would look like!
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card><Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default Body;
