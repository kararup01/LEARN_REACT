import Header from './component/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './component/Footer';
import './App.css'
import Sidebar from './component/Sidebar';
import CreatePost from './component/CreatePost';
import PostList from './component/PostList';

function App() {

  return (
    <>
      <div className="app-container">
        <Sidebar />
        <div className="content">
          <Header />
          <CreatePost/>
          <PostList/>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
