import React from 'react';
import Dropzone from "react-dropzone";
import './upload.css';

function Upload() {

  const { onUpload } = this.props;

    return (
      <>
      
      <Dropzone accept='.csv' onDrop={onUpload}>
      {({getRootProps, getInputProps}) => (
        <section>
          <div className ="dropcontainer" {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Arraste ou clique para adicionar um arquivo</p>
          </div>
        </section>
      )}
    </Dropzone>
      
      <button>Enviar</button>
        </>
  );
}

export default Upload;