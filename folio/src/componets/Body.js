import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Body() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
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
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
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
    </CardGroup>
  );
}

export default Body;