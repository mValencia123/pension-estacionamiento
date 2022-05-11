const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

const navigation = [
    { name: 'Pagina Principal', href: '/home', current: true },
    { name: 'Vehiculos', href: '/vehicles', current: false },
    { name: 'Clientes', href: '/customers', current: false },
    { name: 'Pagos', href: '/pays', current: false },
    { name: 'Check In/Out', href: '/check', current: false },
]

const userNavigation = [
    { name: 'Sign out', href: '#' },
]


export {
    user,
    navigation,
    userNavigation
};