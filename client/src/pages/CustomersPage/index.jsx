import * as React from 'react'
import { Link } from 'react-router-dom'
import { Button, Stack, Typography, CircularProgress } from '@mui/material'
import { Add } from '@mui/icons-material'
import { BasicTable, CardCustomer } from 'src/components'
import customerService from 'src/services/customer-service'
import { useState, useEffect } from 'react'

function CustomersPage() {
  const [customers, setCustomers] = useState([])

  const [lista, setLista] = useState(false)

  function getCustomers() {
    customerService.get().then(({ data }) =>
      setCustomers(
        data.map((customer) => ({
          name: customer.name,
          latitude: customer.latitude,
          longitude: customer.longitude,
        }))
      )
    )
  }

  useEffect(() => {
    getCustomers()
  }, [])

  if (!Object.values(customers).length) return <p>Cargando...</p>

  return (
    <Stack spacing={3}>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h2" component="h2">
          Lista de clientes
        </Typography>

        <Button
          variant="contained"
          color="secondary"
          startIcon={<Add />}
          component={Link}
          to="/"
          onClick={(e) => setLista(!lista)}
        >
          {lista ? 'Vista Mosaico' : 'Vista Lista'}
        </Button>
      </Stack>

      {!lista ? (
        <BasicTable customers={customers} />
      ) : (
        <Stack
          display="flex"
          flexWrap="wrap"
          direction="row"
          justifyContent="flex-start"
        >
          {customers.map((customer) => (
            <CardCustomer key={customer.name} {...customer} />
          ))}
        </Stack>
      )}
    </Stack>
  )
}
export default CustomersPage
