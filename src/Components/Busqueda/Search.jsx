import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar'
const Busqueda = () => {
  const [codigo, setCodigo] = useState('');
  const [resultado, setResultado] = useState(null);

  const handleSearch = () => {
    const data = {
      "equipos": [
        {
          "nombre": "Edificio A",
          "equipos": [
            {
              "tipo": "monitor",
              "codigo": "MON-A-001",
              "estado": "disponible",
              "ubicacion": "Piso 1"
            },
            {
              "tipo": "mouse",
              "codigo": "MOU-A-002",
              "estado": "prestado",
              "ubicacion": "Piso 2"
            },
            {
              "tipo": "teclado",
              "codigo": "TEC-A-003",
              "estado": "en reparación",
              "ubicacion": "Piso 3"
            },
            {
              "tipo": "computadora",
              "codigo": "COM-A-004",
              "estado": "disponible",
              "ubicacion": "Piso 4"
            }
          ]
        },
        {
          "nombre": "Edificio B",
          "equipos": [
            {
              "tipo": "monitor",
              "codigo": "MON-B-005",
              "estado": "prestado",
              "ubicacion": "Piso 1"
            },
            {
              "tipo": "mouse",
              "codigo": "MOU-B-006",
              "estado": "disponible",
              "ubicacion": "Piso 2"
            },
            {
              "tipo": "teclado",
              "codigo": "TEC-B-007",
              "estado": "en reparación",
              "ubicacion": "Piso 3"
            },
            {
              "tipo": "computadora",
              "codigo": "COM-B-008",
              "estado": "disponible",
              "ubicacion": "Piso 4"
            }
          ]
        },
        {
          "nombre": "Edificio C",
          "equipos": [
            {
              "tipo": "monitor",
              "codigo": "MON-C-009",
              "estado": "disponible",
              "ubicacion": "Piso 1"
            },
            {
              "tipo": "mouse",
              "codigo": "MOU-C-010",
              "estado": "prestado",
              "ubicacion": "Piso 2"
            },
            {
              "tipo": "teclado",
              "codigo": "TEC-C-011",
              "estado": "en reparación",
              "ubicacion": "Piso 3"
            },
            {
              "tipo": "computadora",
              "codigo": "COM-C-012",
              "estado": "disponible",
              "ubicacion": "Piso 4"
            }
          ]
        },
        {
          "nombre": "Edificio D",
          "equipos": [
            {
              "tipo": "monitor",
              "codigo": "MON-D-013",
              "estado": "prestado",
              "ubicacion": "Piso 1"
            },
            {
              "tipo": "mouse",
              "codigo": "MOU-D-014",
              "estado": "disponible",
              "ubicacion": "Piso 2"
            },
            {
              "tipo": "teclado",
              "codigo": "TEC-D-015",
              "estado": "en reparación",
              "ubicacion": "Piso 3"
            },
            {
              "tipo": "computadora",
              "codigo": "COM-D-016",
              "estado": "disponible",
              "ubicacion": "Piso 4"
            }
          ]
        },
        {
          "nombre": "Edificio E",
          "equipos": [
            {
              "tipo": "monitor",
              "codigo": "MON-E-017",
              "estado": "disponible",
              "ubicacion": "Piso 1"
            }
          ]
        }
      ]
    };

    const equipo = data.equipos.reduce((acc, edificio) => {
      return acc.concat(edificio.equipos);
    }, []).find((equipo) => equipo.codigo === codigo);

    if (equipo) {
      setResultado(equipo);
    } else {
      setResultado(null);
    }
  };

  return (
    <div><Navbar/>
    <div className='search-div'>
      <h1>Busqueda</h1>
      <input className='input-box' type="text" value={codigo} onChange={(e) => setCodigo(e.target.value)}placeholder="Introduce el código del equipo" />
      <button onClick={handleSearch}>Buscar</button>
      {resultado? (
        <div>
          <h2>Resultado:</h2>
          <p>Tipo: {resultado.tipo}</p>
          <p>Código: {resultado.codigo}</p>
          <p>Estado: {resultado.estado}</p>
          <p>Ubicación: {resultado.ubicacion}</p>
        </div>
      ) : (
        <p>No se encontró el equipo</p>
      )}
    </div>
    </div>
  );
};

export default Busqueda;