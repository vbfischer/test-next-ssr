import { PatientTransfer } from './PatientTransfer'

export default function Home() {

  return (
    <main suppressHydrationWarning className="flex min-h-screen flex-col items-center justify-between p-24">
      <PatientTransfer suppressHydrationWarning/>
    </main>
  )
}
