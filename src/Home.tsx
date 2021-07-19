
import {
  Card, 
  //CardImg, 
  CardText, CardBody, CardGroup,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

function Home() {
    return (
        <div className="App">
          <CardGroup>
			  <Card>
				<CardBody>
				  <CardTitle tag="h5">World Cases Data</CardTitle>
				  <CardSubtitle tag="h6" className="mb-2 text-muted">World Cases Description</CardSubtitle>
				  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
				  <Button>Button</Button>
				</CardBody>
			  </Card>
			  <Card>
				<CardBody>
				  <CardTitle tag="h5">Card title</CardTitle>
				  <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
				  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
				  <Button>Button</Button>
				</CardBody>
			  </Card>
			  <Card>
				<CardBody>
				  <CardTitle tag="h5">Card title</CardTitle>
				  <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
				  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
				  <Button>Button</Button>
				</CardBody>
			  </Card>
		  </CardGroup>
      </div>
    );
}

export default Home;
