import React, { Component } from 'react'
import { Card, Button, Icon, Table, Form } from 'semantic-ui-react'
import axios from 'axios'

export default class TablaCategoria extends Component {
     
       state = {
          nombre_categoria: '',
          categorias: []
       }

    async componentDidMount() {
      this.getCategoria();
    }

    getCategoria = async () => {
        const res = await axios.get('https://articlesbook-express.azurewebsites.net/api/categorias');
        this.setState({
            categorias: res.data
        });
    }

    onChangeNombre_categoria = e => {
      this.setState({
          nombre_categoria: e.target.value
      })
    }
    onSubmit = async (e) => {
      e.preventDefault();
      await axios.post('https://articlesbook-express.azurewebsites.net/api/categorias', {
          nombre_categoria: this.state.nombre_categoria
      });
      this.setState({ nombre_categoria: '' });
      this.getCategoria();
    }

    deleteCategoria = async (categoriaId) => {
      const response = window.confirm('¿Está seguro/a que quiere borrar esta categoria?');
      if (response) {
          await axios.delete('https://articlesbook-express.azurewebsites.net/api/categorias/' + categoriaId);
          this.getCategoria();
      }
  }


  
  render() {
     return(
       <div className="row p-4">
         <div className="col-md-5">
         <Card fluid color='green' className="p-3">
       <Form onSubmit={this.onSubmit}>
         <Form.Field>
          <label><h3 className="mb-4">¡Crea una Categoria!</h3></label>
          <input 
            value={this.state.nombre_categoria}
            type="text"
            onChange={this.onChangeNombre_categoria} 
            placeholder='Nombre de la Categoria' />
        </Form.Field>
           <Button inverted color="green" type='submit'>Crear</Button>
      </Form>
      </Card>
     </div>
     
     <div className="col-md-7">
        <Table celled striped>
          <Table.Header>
            <Table.Row >
              <Table.HeaderCell colSpan='3'>Categorias</Table.HeaderCell>
            </Table.Row>
              </Table.Header>
                {
                  
                  this.state.categorias.map(nombre_categoria => (
                    <Table.Body>
                    <Table.Row positive>
                 <Table.Cell positive collapsing  key={nombre_categoria.id} onDoubleClick={() => this.deleteCategoria(nombre_categoria._id)} >
                    <Icon name='folder' /> {nombre_categoria.nombre_categoria}
                 </Table.Cell>
                  <Table.Cell collapsing>
                    <Button  inverted color='red' floated='right' key={nombre_categoria.id} onClick={() => this.deleteCategoria(nombre_categoria._id)}>
                      Borrar
                    </Button>
                  </Table.Cell>
                 </Table.Row>
                </Table.Body>
                  ))
                }            
        </Table>
      </div>
   </div>
    )
  }
}


