import React, { Component } from 'react'
import { Button, Card, Form } from 'semantic-ui-react'
import axios from 'axios'

export default class CreateArticulo extends Component {

    state = {
        numero_registro: '',
        nombre: '',
        descripcion: '',
        categoriaSelected: '',
        categorias: [],
        imgUrl: '',
        editing: false,
        _id: ''
    }

    async componentDidMount() {
        const res = await axios.get('https://articlesbook-express.azurewebsites.net/api/categorias');
        if (res.data.length > 0) {
            this.setState({
                categorias: res.data.map(nombre_categoria => nombre_categoria.nombre_categoria),
                categoriaSelected: res.data[0].nombre_categoria
            })
        }
        if (this.props.match.params.id) {
            console.log(this.props.match.params.id)
            const res = await axios.get('https://articlesbook-express.azurewebsites.net/api/articulos/' + this.props.match.params.id);
            console.log(res.data)
            this.setState({
                numero_registro: res.data.numero_registro,
                nombre: res.data.nombre,
                descripcion: res.data.descripcion,
                categoriaSelected: res.data.nombre_categoria,
                imgUrl: res.data.imgUrl,
                editing: true,
                _id: res.data._id       
             });
        }
    }
       
    onSubmit = async (e) => {
        e.preventDefault();
        if (this.state.editing) {
            const updatedCategoria = {
                numero_registro: this.state.numero_registro,
                nombre: this.state.nombre,
                descripcion: this.state.descripcion,
                categoria: this.state.categoriaSelected,
                imgUrl: this.state.imgUrl
            };

            await axios.put('https://articlesbook-express.azurewebsites.net/api/articulos/' + this.state._id, updatedCategoria);
        } else {
            const newArticulo = {
                numero_registro: this.state.numero_registro,
                nombre: this.state.nombre,
                descripcion: this.state.descripcion,
                categoria: this.state.categoriaSelected,
                imgUrl: this.state.imgUrl
            };
            axios.post('https://articlesbook-express.azurewebsites.net/api/articulos', newArticulo);
        }
        window.location.href = '/';

    } 

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {
        return (
            <div className="p-4 col-md-6 offset-md-3" >
                <Card fluid color='green' className="p-3">
                    <h3 className="p-2 mb-4">¡Agrega un Electrodomestico!</h3>
               <Form onSubmit={this.onSubmit} >
               <Form.Field>
               <label>Elija una Categoria</label>
                      
                      <select 
                                value={this.state.categoriaSelected}
                                onChange={this.onInputChange}
                                name="categoriaSelected"
                                required>
                                    <option disabled selected>Seleccione</option>

                                {
                                    this.state.categorias.map(nombre_categoria => (
                                        <option key={nombre_categoria} value={nombre_categoria}>
                                            {nombre_categoria}
                                        </option>
                                    ))
                                }
                                
                        </select>
                       
                      
                        </Form.Field>
                  <Form.Field>
                    <label>Numero de Registro</label>
                    <input placeholder='Numero' 
                       onChange={this.onInputChange}
                       name="numero_registro"
                       value={this.state.numero_registro}
                       required/>
                  </Form.Field>
                  <Form.Field>
                    <label>Nombre del Electrodomestico</label>
                         <input     
                                type="text"
                                className="form-control"
                                placeholder="Escribe un nombre"
                                name="nombre"
                                onChange={this.onInputChange}
                                value={this.state.nombre}
                                required>
                        </input>
                  </Form.Field>
                  <Form.Field>
                    <label>Descripción</label>
                       <input 
                                type="text"
                                className="form-control"
                                placeholder="Escribe una descripcion"
                                name="descripcion"
                                onChange={this.onInputChange}
                                value={this.state.descripcion}
                                required>
                        </input>
                  </Form.Field>
                  <Form.Field>
                      <label>URL de la imagen</label>
                  <input 
                  type="url"
                  className="form-control"
                  placeholder="Escribe el link de la imagen"
                  name="imgUrl"
                  onChange={this.onInputChange}
                  value={this.state.imgUrl}
                  required
                 />
                  </Form.Field>
                  <Button inverted color="green" type='submit'>Submit</Button>
                </Form>
                </Card>
              </div>
        )
    }
}

