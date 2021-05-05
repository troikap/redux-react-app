export const usuarios = [
  {username: 'test', password: 'test', fullName: 'Prueba Test'},
  {username: 'peter', password: '12345', fullName: 'Pedri AAAAA'},
  {username: 'maria', password: '12345', fullName: 'Maria Mendoza'},
  {username: 'john', password: 'test', fullName: 'John Doe'},
]

export const login = (username, password) => {
  const usuarioEncontrado = usuarios.find(user => username === user.username && password === user.password);
  return usuarioEncontrado || { error: "No hemos encontrado un usuario"};
}

export default {
  login,
  usuarios
}