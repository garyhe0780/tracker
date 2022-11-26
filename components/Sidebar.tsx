export default function Sidebar() {
  return (
    <aside class="hidden lg:flex p-4 h-screen w-sidebar">
      <nav class="bg:gray-300 dark:bg-gray-700 flex flex-col gap-3 flex-1 rounded-lg">
        <ul class="flex flex-col flex-1 px-4 py-16 gap-2">
          <li class="flex px-4">
            <Link label="Dashboard" goto="/" selected={true} />
          </li>
          <li class="flex px-4">
            <Link label="Settings" goto="/settings" selected={false} />
          </li>
        </ul>
      </nav>
    </aside>
  )
}

interface ILink {
  goto: string
  label: string
  selected?: boolean
}

function Link(props: ILink) {
  const { goto, label, selected } = props
  const classes = selected
    ? 'bg-gray-500 dark:bg-gray-500 rounded-md dark:text-white'
    : 'dark:text-gray-100'

  return (
    <a href={goto} class={`py-2 px-3 w-full ${classes}`}>
      {label}
    </a>
  )
}
