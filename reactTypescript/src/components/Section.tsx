import{ ReactNode } from "react";


type SectionProps = {
    title?: string, // ? indicates optional, so you can provide a default subheading i.e." My Subheading"
    children: ReactNode
}

// Legacy Code you may encounter
// export const Section: React.FC <{title: String}> = ({children, title}) => {
//     return (
//         <section>
//             <h2>{title}</h2>
//             <p>{children}</p>
//         </section>
//     )
// }

export const Section = ({children, title = "My Subheading"}: SectionProps) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>{children}</p>
        </section>
    )
}