import { createContext, useContext, useEffect, useState } from 'react'
const Ctx = createContext(null)
const read = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d } catch { return d } }
const write = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)) } catch { /* ignore */ } }
export function StoreProvider({ children }) {
  const [user, setUser] = useState(() => read('hx_user', null))
  const [saved, setSaved] = useState(() => read('hx_saved', []))
  const [mine, setMine] = useState(() => read('hx_mine', []))
  useEffect(() => { write('hx_user', user) }, [user])
  useEffect(() => { write('hx_saved', saved) }, [saved])
  useEffect(() => { write('hx_mine', mine) }, [mine])
  const toggleSave = (id) => setSaved((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]))
  const addListing = (p) => setMine((m) => [{ ...p, id: Date.now() }, ...m])
  return <Ctx.Provider value={{ user, setUser, saved, toggleSave, mine, addListing }}>{children}</Ctx.Provider>
}
export const useStore = () => useContext(Ctx)
