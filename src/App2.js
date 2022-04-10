import ProjectForm from './components/ProjectForm'
import Nav from './components/Nav';
import ProjectContextProvider from './components/ProjectContext';

function App2() {
  return (
    <div className="App">
      <ProjectContextProvider>
      <Nav />
      <ProjectForm/>      
      </ProjectContextProvider>
    </div>
  );
}

export default App2;
