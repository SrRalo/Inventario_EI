import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar'
import jsPDF from 'jspdf';

const Reportes = () => {
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

  const handleDownload = () => {
    const doc = new jsPDF();
    doc.text(10, 10, 'Reporte de Equipos');
    doc.setFontSize(12);

    data.equipos.forEach((edificio, index) => {
      doc.text(10, 20 + (index * 20), `Edificio ${edificio.nombre}`);
      edificio.equipos.forEach((equipo, equipoIndex) => {
        doc.text(20, 30 + (index * 20) + (equipoIndex * 10), `Tipo: ${equipo.tipo}`);
        doc.text(20, 40 + (index * 20) + (equipoIndex * 10), `Código: ${equipo.codigo}`);
        doc.text(20, 50 + (index * 20) + (equipoIndex * 10), `Estado: ${equipo.estado}`);
        doc.text(20, 60 + (index * 20) + (equipoIndex * 10), `Ubicación: ${equipo.ubicacion}`);
      });
    });

    const pdf = doc.output('blob');
    const url = URL.createObjectURL(pdf);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'eporte_equipos.pdf';
    a.click();
  };

  return (
    <div> <Navbar/>
    <div className='reportes-page'>
      <h1>Reportes</h1>
      <button onClick={handleDownload}>Descargar Reporte</button>
    </div>
    </div>
  );
};

export default Reportes;