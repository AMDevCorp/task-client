export interface Task {
  title: string,
  due_date?: string,
  creation_date: string,
  numeric_reference?: number,
  observation: string,
  id: string,
  user_id: string
}
