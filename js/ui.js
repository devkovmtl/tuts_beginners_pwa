document.addEventListener('DOMContentLoaded', function() {
  // nav menu
  const menus = document.querySelectorAll('.side-menu')
  // M is the materialize library we initialize
  // sidenav menu
  M.Sidenav.init(menus, { edge: 'right' })
  // add recipe form
  const forms = document.querySelectorAll('.side-form')
  // M is the materialize library we initialize
  // sidenav menu
  M.Sidenav.init(forms, { edge: 'left' })
})
