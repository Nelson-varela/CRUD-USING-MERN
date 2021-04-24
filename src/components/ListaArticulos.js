import React, { Component } from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class ListaArticulos extends Component {
  state = {
    articulos: []
}

async componentDidMount() {
    this.getArticulos();
}

getArticulos = async () => {
    const res = await axios.get('http://localhost:4000/api/articulos')
    this.setState({
        articulos: res.data
    });
}

deleteArticulo = async (articuloId) => {
    await axios.delete('http://localhost:4000/api/articulos/' + articuloId);
    this.getArticulos();
}

    render() {
        return (
          <div className="row">
                {
                  this.state.articulos.map(articulo =>(
                    <div className="col-md-3 p-2">
                  <Card fluid color='green'>
                  <Card.Content key={articulo._id}>
                  <Image
                    floated='right'
                    size='mini'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7DhptMSPO1SnEghptmmUYk1pEyhFnL8LgOQ&usqp=CAU'
                  />
                  <Card.Header>{articulo.nombre}</Card.Header>
                  <Card.Meta>Numero de registro: {articulo.numero_registro}</Card.Meta>
                  <Card.Description>
                   {articulo.descripcion} 
                  </Card.Description>
                  <Card.Description>
                  <strong>Categoria: {articulo.categoria} </strong>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className='ui two buttons'>
                    <Button inverted color='red' onClick={() => this.deleteArticulo(articulo._id)}>
                    Eliminar
                    </Button>
                    <Link to={"/edit/" + articulo._id}><Button inverted color='green'>
                      Modificar
                      </Button>
                    </Link>
                  </div>
                </Card.Content>
                </Card>
                </div>
              ))
           }
            
          </div>
        )
    }
}


