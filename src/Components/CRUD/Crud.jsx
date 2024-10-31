import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar'
import '../CRUD/crud.css';

const Crud = () => {
  const [data, setData] = useState({
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
  });

  const [editing, setEditing] = useState(null);

  const handleEdit = (edificioIndex, equipoIndex) => {
    setEditing({ edificioIndex, equipoIndex });
  };

  const handleSave = (edificioIndex, equipoIndex, equipo) => {
    const newData = {...data };
    newData.equipos[edificioIndex].equipos[equipoIndex] = equipo;
    setData(newData);
    setEditing(null);
  };

  const handleDelete = (edificioIndex, equipoIndex) => {
    const newData = {...data };
    newData.equipos[edificioIndex].equipos.splice(equipoIndex, 1);
    setData(newData);
  };

  return (
    <div>
      <Navbar/>
      <h1>Administrar Equipos Disponibles</h1>
      <table>
        <thead>
          <tr>
            <th>Edificio</th>
            <th>Tipo</th>
            <th>Código</th>
            <th>Estado</th>
            <th>Ubicación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.equipos.map((edificio, index) => (
            <React.Fragment key={index}>
              {edificio.equipos.map((equipo, equipoIndex) => (
                <tr key={equipoIndex}>
                  {editing && editing.equipoIndex === equipoIndex && editing.edificioIndex === index ? (
                    <>
                      <td><input value={equipo.nombre} onChange={(e) => setEditing({...editing, nombre: e.target.value})} /></td>
                      <td><input value={equipo.tipo} onChange={(e) => setEditing({...editing, tipo: e.target.value})} /></td>
                      <td><input value={equipo.codigo} onChange={(e) => setEditing({...editing, codigo: e.target.value})} /></td>
                      <td><input value={equipo.estado} onChange={(e) => setEditing({...editing, estado: e.target.value})} /></td>
                      <td><input value={equipo.ubicacion} onChange={(e) => setEditing({...editing, ubicacion: e.target.value})} /></td>
                      <td>
                        <button onClick={() => handleSave(index, equipoIndex, editing)}>Guardar</button>
                        <button onClick={() => setEditing(null)}>Cancelar</button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td>{edificio.nombre}</td>
                      <td>{equipo.tipo}</td>
                      <td>{equipo.codigo}</td>
                      <td>{equipo.estado}</td>
                      <td>{equipo.ubicacion}</td>
                      <td>
                        <button onClick={() => handleEdit(index, equipoIndex)}>Editar</button>
                        <button onClick={() => handleDelete(index, equipoIndex)}>Eliminar</button>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Crud;