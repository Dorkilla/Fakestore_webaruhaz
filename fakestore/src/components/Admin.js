import React from 'react'
import Urlap from './Urlap'

export default function Admin() {
  return (
    <div>
    <main className="row">
    <aside className="col-lg-3">
    <h3>Űrlap</h3>
    <Urlap />
    </aside>
    <article className="col-lg-9">
        <h3>Táblák</h3>
        </article>
    </main>
    </div>
  )
}
