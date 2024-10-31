import React from 'react'

const Dashboard = () => {
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
  return (
    <div>
      <h1>Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Edificio</th>
            <th>Tipo</th>
            <th>Código</th>
            <th>Estado</th>
            <th>Ubicación</th>
          </tr>
        </thead>
        <tbody>
          {data.equipos.map((edificio, index) => (
            <React.Fragment key={index}>
              {edificio.equipos.map((equipo, equipoIndex) => (
                <tr key={equipoIndex}>
                  <td>{edificio.nombre}</td>
                  <td>{equipo.tipo}</td>
                  <td>{equipo.codigo}</td>
                  <td>{equipo.estado}</td>
                  <td>{equipo.ubicacion}</td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;