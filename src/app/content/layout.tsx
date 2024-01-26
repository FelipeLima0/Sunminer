import { Sidebar } from '@/components/Sidebar'

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      {children}
    </div>
  )
}
