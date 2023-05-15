import CardGroup from 'react-bootstrap/CardGroup';
import MyCard from "./components/MyCard";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import vicky from './images/me.jpeg'
import yoki from './images/yoki.jpg'
import gokul from './images/gokul.jpg'
import shankar from './images/shankar.jpg'
function App() {
  return (
    <div className="App">
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="">React cards</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <CardGroup>
      <MyCard title='Vignesh R' img={vicky} nickname='vicky' place='Pattukkottai' iglink='https://www.instagram.com/vignesh_r._/?igshid=ZDdkNTZiNTM%3D'/>
      <MyCard title='Yokesh V' img={yoki} nickname='yoki' place='Thanjavur' iglink='https://www.instagram.com/yokesh_v_/'/>
      <MyCard title='Gokul M' img={gokul} nickname='gokul' place='Bengalur' iglink='https://www.instagram.com/gokul_g.k_/'/>
      <MyCard title='Shankar S' img={shankar} nickname='shankar' place='Thanjavur' iglink='https://www.instagram.com/shankar_213_/'/>
      </CardGroup>
    </div>
  );
}

export default App;
