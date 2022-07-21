import React from 'react'

export default function Footer() {
  return (
    <div><footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="/" class="nav-link px-2 text-muted">الرئيسية</a></li>
      <li class="nav-item"><a href="Login" class="nav-link px-2 text-muted">تسجيل الدخول</a></li>
      <li class="nav-item"><a href="Ideas" class="nav-link px-2 text-muted">الأفكار</a></li>
      <li class="nav-item"><a href="/AddIdaea" class="nav-link px-2 text-muted">اضف فكرتك</a></li>
      <li class="nav-item"><a href="/" class="nav-link px-2 text-muted">الرئيسية</a></li>
    </ul>
    <p class="text-center text-muted">© 2021 ابدع بفكرتك</p>
  </footer></div>
  )
}
