import './app.css';
import directions from './directions.svg';
import search from './search.svg';
import './Upload';
import Upload from './Upload';

function App() {
  state = {
    uploadedFiles: []
  };

  handleUpload = files => {
    
    };
  return (
    <>

      <div className = "pesquisa">

        <input type="checkbox" id="dropdown"/>
        <label for="dropdown">&#9776;</label>

        <div className="campo">
        <input type="text" className="txtpesquisa" placeholder="Pesquise no Mapa"/>
        <img src = {search} className="search" alt="search"/>
        <img src = {directions} className="dir" alt="directions"/>
        </div>

        
        <div className = "dropdown">
            {/*<p>Aqui é dentro do Drop Down</p>
            <input type="file"/>*/}
            <Upload onUpload={this.handleUpload}/>
        </div>

      </div>
      
    </>
  );
}

export default App;
