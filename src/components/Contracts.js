import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Button } from '@mui/material'

const contracts = require('../fixtures/contracts.json')
const employers = require('../fixtures/employers.json')

const columns = [
  {
    field: 'beginDate',
    headerName: 'Début',
    width: 100
  },
  { field: 'endDate', headerName: 'Fin', width: 100 },
  { field: 'employerName', headerName: 'Employeur', width: 100 },
  { field: 'plannedDuration', headerName: 'Heures prévues', type: 'number', width: 130 },
  { field: 'realDuration', headerName: 'Heures réelles', type: 'number', width: 130 },
  {
    field: 'contractFile',
    headerName: 'Contrat',
    width: 120,
    renderCell: (cellValues) => {
      return (FilePickerButton(cellValues))
    }
  },
  {
    field: 'salaryFile',
    headerName: 'Bulletin de salaire',
    width: 120,
    renderCell: (cellValues) => {
      return (FilePickerButton(cellValues))
    }
  },
  {
    field: 'aemFile',
    headerName: 'AEM',
    width: 120,
    renderCell: (cellValues) => {
      return (FilePickerButton(cellValues))
    }
  },
  { field: 'vacationFile', headerName: 'Congés spectacles', width: 100 },
  { field: 'distance', headerName: 'Kilométrage', type: 'number', width: 100 },
  { field: 'aemHours', headerName: 'Heures AEM', type: 'number', width: 100 },
  { field: 'aemRaw', headerName: 'Brut AEM', type: 'number', width: 100 },
  { field: 'netIncome', headerName: 'Salaire net', type: 'number', width: 100 },
  { field: 'isPayed', headerName: 'Check Virement', type: Boolean, width: 100 },
  { field: 'expenseTransmitted', headerName: 'Frais transmis', type: 'number', width: 100 },
  { field: 'expensePayed', headerName: 'Frais remboursé', type: Boolean, width: 100 },
  {
    field: 'edit',
    headerName: 'Modifier',
    width: 100,
    renderCell: (cellValues) => {
      return (
            <Button
              variant="contained"
              color="primary"
              onClick={(event) => {
                handleClick(event, cellValues)
              }}
            >
              Editer
            </Button>
      )
    }
  },
  {
    field: 'duplicate',
    headerName: 'Dupliquer',
    width: 100,
    renderCell: (cellValues) => {
      return (
            <Button
              variant="contained"
              color="primary"
              onClick={(event) => {
                handleClick(event, cellValues)
              }}
            >
              Copier
            </Button>
      )
    }
  },
  {
    field: 'note',
    headerName: 'Notes',
    width: 100,
    renderCell: (cellValues) => {
      return (
            <Button
              variant="contained"
              color="primary"
              onClick={(event) => {
                handleClick(event, cellValues)
              }}
            >
              Note
            </Button>
      )
    }
  },
  {
    field: 'delete',
    headerName: 'Supprimer',
    width: 100,
    renderCell: (cellValues) => {
      return (
            <Button
              variant="contained"
              color="primary"
              onClick={(event) => {
                handleClick(event, cellValues)
              }}
            >
              Suppr
            </Button>
      )
    }
  },
  {
    field: 'hidden',
    headerName: 'Cacher',
    renderCell: (cellValues) => {
      return (
            <Button
              variant="contained"
              color="primary"
              onClick={(event) => {
                handleClick(event, cellValues)
              }}
            >
              Cacher
            </Button>
      )
    }
  }
]

const rows = contracts

function getEmployerNameFromId (employerList, id) {
  employerList.forEach(employer => {
    if (employer.id === id) {
      return employer.name
    }
  })
  return 'Unknown'
};

rows.forEach((row) => (row.employerName = getEmployerNameFromId(employers, row.employerId)))

function FilePickerButton (values) {
  const fileInput = React.useRef()

  let isProvided = false
  if (typeof values.row[values.field] !== 'undefined') {
    isProvided = true
  }

  if (!isProvided) {
    return (
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={() => fileInput.current.click()}
          >
            Choisir
          </Button>

          <input
            ref={fileInput}
            type="file"
            style={{ display: 'none' }}
          />
        </div>
    )
  } else {
    return (
          <div>
            {values.row[values.field]}
          </div>
    )
  }
}

const dynamicHeight = Math.min(rows.length * 6 + 10 + 2, 90) + 'vh'

const handleClick = (event, cellValues) => {
  console.log(cellValues.row)
}

const handleCellClick = (param, event) => {
  event.stopPropagation()
}

const handleRowClick = (param, event) => {
  event.stopPropagation()
}

export default function Contracts () {
  return (
    <div style={{ height: dynamicHeight, width: '100%' }}>
      <DataGrid
        rows={rows}
        rowsHeight={120}
        columns={columns}
        pageSize={50}
        onCellClick={handleCellClick}
        onRowClick={handleRowClick}
      />
    </div>
  )
}
