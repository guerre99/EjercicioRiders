import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material'

function BasicTable({ customers }) {
  const columnKeys = Object.keys(customers[0])
  console.log('hi')
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columnKeys.map((key, index) => (
              <TableCell key={key} align={index === 0 ? 'left' : 'right'}>
                {key.toUpperCase()}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {columnKeys.map((key, index) => (
                <TableCell key={key} align={index === 0 ? 'left' : 'right'}>
                  {row[key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default BasicTable
