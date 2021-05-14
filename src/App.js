import './App.css';
import CNJokeHolder from './containers/CNJokeHolder';
import video from './vid/video.mp4';

function App() {
  return (
<div>
    <video autoPlay loop muted style={{
      position: 'absolute',
      width: '100%', 
      left: '50%', 
      top: '50%', 
      height: '100%', 
      objectFit: 'cover', 
      transform: 'translate(-50%, -50%', 
      zIndex:-1
    }}>
      <source src={video} type="video/mp4"/>
    </video>
  <CNJokeHolder />
</div>
  );
}

export default App;
