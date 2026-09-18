import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample({student}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={student.img} />
      <Card.Body>
        <Card.Title>{student.name}</Card.Title>
        <Card.Text>
          Ma SV: {student.id}
          <br/>
          Ten: {student.name}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;