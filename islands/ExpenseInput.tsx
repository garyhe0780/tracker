import { useRef } from 'preact/hooks'
import { expenses$ } from '../stores/expenses.ts'

export default function ExpenseInput() {
  const text$ = useRef<HTMLInputElement>(null)
  const number$ = useRef<HTMLInputElement>(null)

  const handleKeyPressed = (e: any) => {
    if (e.key === 'Enter') {
      expenses$.value = [
        ...expenses$.value,
        {
          time: new Date().toISOString(),
          text: text$.current?.value as string,
          number: Number(number$.current?.value),
        },
      ]
    }
  }

  return (
    <div class="dark:text-white mb-12">
      <div class="px-4 py-2 border-1 border-gray-700 rounded-lg text-md flex">
        <input
          ref={text$}
          type="text"
          placeholder="Have you spent something today?"
          class="border-none outline-none bg-transparent w-full"
          onKeyPress={handleKeyPressed}
        />
        <span class="flex items-center px-2 py-1 dark:bg-gray-600 rounded-md">
          ¥
          <input
            ref={number$}
            type="text"
            placeholder="0.00"
            class="border-none outline-none bg-transparent w-price"
          />
        </span>
      </div>
    </div>
  )
}