import { useState } from 'react'

export const useAccordionItem = () => {
    const [isOpen, setIsOpen] = useState(false)

    return { isOpen, setIsOpen }
}
