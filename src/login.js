// export const login = (user, password) => {
//   if (password === null || password === undefined) {
//     return 'No se ha proporcionado un password'
//   }
//   if (user === null) {
//     return 'No se ha proporcionado un usuario'
//   }
//   if (password !== '123') {
//     return 'Password incorrecta'
//   }
//   if (user !== 'coderUser') {
//     return 'Credenciales incorrectas'
//   }
//   if (user === 'coderUser' && password === '123') {
//     return 'logueado'
//   }
// }

//refactorizacion

export const login = (user, password) => {
    if (!password) return 'No se ha proporcionado un password'
    if (!user) return 'No se ha proporcionado un usuario'
    if (password !== '123') return 'Password incorrecta'
    if (user !== 'coderUser') return 'Credenciales incorrectas'
    if (user === 'coderUser' && password === '123') return 'logueado'
  }
