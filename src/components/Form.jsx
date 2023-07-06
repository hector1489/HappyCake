import { Form, Button } from 'react-bootstrap'

const Formulario = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Descripcion</Form.Label>
        <Form.Control as="textarea" aria-label="With textarea" />
      </Form.Group>
      <Button className='btn' type="submit">
        Enviar
      </Button>
    </Form>
  )

}

export default Formulario
