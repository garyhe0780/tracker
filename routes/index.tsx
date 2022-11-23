import { Head } from '$fresh/runtime.ts'
import Sidebar from '../components/Sidebar.tsx'
import ExpenseInput from '../islands/ExpenseInput.tsx'
import ExpenseList from '../islands/ExpenseList.tsx'

export default function Home() {
  return (
    <div class="flex gap-4 bg-white dark:bg-gray-900 min-w-screen min-h-screen">
      <Head>
        <title>Expense Track App</title>
      </Head>
      <Sidebar />
      <Content />
    </div>
  )
}

function Content() {
  return (
    <main class="flex flex-col flex-1 gap-2 dark:text-white p-4 max-w-[575px] mx-auto">
      <div class="flex flex-col gap-2 mb-6">
        <h3 class="text-lg text-medium mt-8">Hey Gary</h3>
        <p class="text-sm text-gray-300">
          You didn't spend money today, Great job
        </p>
      </div>
      <ExpenseInput />
      <ExpenseList />
    </main>
  )
}
