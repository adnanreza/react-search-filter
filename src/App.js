import './App.css';
import Blogs from './components/Blogs'
import BlogState from './context/BlogState';
import BlogFilter from './components/BlogFilter';
import { Container } from '@material-ui/core'

function App() {
  return (
    <BlogState>
      <Container>
        <div className="App">
          <BlogFilter/>
          <Blogs/>
        </div>
      </Container>
    </BlogState>
  );
}

export default App;
