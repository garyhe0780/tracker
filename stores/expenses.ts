import { signal, effect } from "@preact/signals";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { Expense } from "../types/expense.ts";

export const expenses$ = signal<Expense[]>([]);

if (IS_BROWSER) {
	// initial value
  expenses$.value = JSON.parse(localStorage.getItem("list") || "[]");

  effect(() => {
    localStorage.setItem("list", JSON.stringify(expenses$.value));
  });
}
