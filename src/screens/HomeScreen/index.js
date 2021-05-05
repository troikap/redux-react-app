import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import perritoActions from '../../actions/perrito';
import { getDogs } from '../../mockRequests/perritos'
import NavigationBar from '../../components/Navigation';

export const Home = ({ history, user, perrito, setList, setSelectedDog }) => {
  React.useEffect(() => {
    const dogs = getDogs();
    setList(dogs);
  }, [])

  const handleAdoptar = (dog) => {
    if (user.authUser) {
      setSelectedDog(dog);
      history.push('/felicidades')
    } else {
      history.push('/login')
    }
  }

  return (
    <div className='container-fluid'>
      <NavigationBar />
      <h3 className='mt-4'> Adopta el cachorro que siempre has querido! </h3>
      <div className='container'>
        <div className='row'>
          {perrito.list.map( dog => (
            <div className='col-sm-12 col-md-4 mb-2'>
              <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={dog.img} />
                <Card.Body>
                <Card.Title>{dog.nombre}</Card.Title>
                <Card.Text>
                  <div> {`Genero: ${dog.genero}`} </div>
                  <div> {`Edad: ${dog.edad}`} </div>
                </Card.Text>
                <Button onClick={() => handleAdoptar(dog)} variant="success">Adoptar!</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ user, perrito }) => ({
  user,
  perrito
})

const mapDispatchToProps = () => ({
  ...perritoActions
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps())(Home));