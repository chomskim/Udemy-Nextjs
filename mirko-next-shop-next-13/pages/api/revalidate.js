async function handleRevalidate(req, res) {
  console.log('api/revalidate received:', req.body)
  const event = req.body
  if (event.model === 'products') {
    const id = event.entry.id
    await Promise.all([res.revalidate('/'), res.revalidate(`/products/${id}`)])
    console.log(`revalidated product ${id}`)
    const event = req.body
  }
  res.status(204).end()
}

export default handleRevalidate
