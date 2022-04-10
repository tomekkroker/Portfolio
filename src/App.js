import Nav from './components/Nav';
import ProjectList from './components/ProjectList'
import ProjectContextProvider from './components/ProjectContext';
function App() {
  return (
    <div className="App">
      <ProjectContextProvider>
      <Nav />
      <ProjectList />
      </ProjectContextProvider>
    </div>
  );
}

export default App;
