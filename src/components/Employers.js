import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Button } from '@mui/material'

const json = require('../fixtures/employers.json')

const columns = [
  { field: 'id', headerName: 'ID', width: 30 },
  { field: 'name', headerName: 'Nom', width: 100 },
  { field: 'rate', headerName: 'Taux horaire', type: 'number', width: 100 },
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
  }
]

const rows = json

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

export default function Employers () {
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
