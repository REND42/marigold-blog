interface ProjectLayoutProps {
  children: React.ReactNode
}

export async function generateMetadata() {
  return {
    title: '42arch | Project',
    description: "42Arch, Dan's personal site. The projects i have made."
  }
}

export default function ProjectLayout({ children }: ProjectLayoutProps) {
  return (
    <>
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-4xl font-extrabold leading-9 tracking-tight text-slate-900 dark:text-slate-100 md:text-6xl md:leading-14">
          Projects 🖥️
        </h1>
      </div>
      {children}
    </>
  )
}
