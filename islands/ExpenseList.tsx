import { groupBy } from '$std/collections/mod.ts'
import { format } from '$std/datetime/mod.ts'
import { expenses$ } from '../stores/expenses.ts'
import { Expense } from '../types/expense.ts'
import { isToday, isYesterday } from '../utils/date.ts'

export default function ExpenseList() {
  const groupData = groupBy<Expense, string>(expenses$.value.toReversed(), (e) =>
    format(new Date(e.time), 'yyyy-MM-dd'),
  )

  return (
    <div class="flex flex-col gap-12">
      {Object.keys(groupData).map((key: string) => (
        <Expense label={key} value={groupData[key] || []} />
      ))}
    </div>
  )
}

interface IGroupData {
  label: string
  value: Expense[]
}

interface IExpense {
  text: string
  number: number
  time: string
}

export function Expense(props: IGroupData) {
  const { label, value } = props
  const total = value.reduce((acc, cur) => (acc += cur.number), 0)

  const getLabel = (label: string) => {
    if (isToday(label)) return 'TODAY';
    if (isYesterday(label)) return 'YESTERDAY';

    return label;
  }

  return (
    <div class="flex flex-col gap-4 h-auto">
      <div class="flex justify-between items-center dark:text-gray-400 px-2">
        <span>{getLabel(label)}</span>
        <span>¥{total}</span>
      </div>
      <ul class="flex flex-col gap-3">
        {value.map((e: Expense) => (
          <DetailItem text={e.text} number={e.number} />
        ))}
      </ul>
    </div>
  )
}

function DetailItem(props: Omit<IExpense, 'time'>) {
  const { text, number } = props
  return (
    <div class="py-6 px-4 flex justify-between items-center dark:bg-gray-800 rounded-lg">
      <div>{text}</div>
      <span>¥{number}</span>
    </div>
  )
}
