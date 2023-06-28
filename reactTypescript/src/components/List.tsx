import { ReactNode } from "react";

interface  ListProps<T> { // 'T' indicates a generic
    items: T[],
    render: (item: T) => ReactNode
}

// Both of these work
// const List = <T,>
// OR
//const List = <T extends {}>
const List = <T,>({items, render}: ListProps<T>) => {
  return (
    <ul>
        {items.map((item, i) =>(
            <li key={i}>
                 {render(item)}
            </li>
        ))}
    </ul>
  )
}

export default List

