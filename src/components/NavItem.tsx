import { PRODUCT_CATEGORIES } from "@/config"
import { Button } from "./ui/button"

type Category = typeof PRODUCT_CATEGORIES[number]


interface NavItemsProps {
    category: Category
    handleOpen: () => void
    isOpen: boolean
    isAnyOpen: boolean
}

const NavItem = ({ category, handleOpen, isOpen, isAnyOpen }: NavItemsProps) => {

    return (<div className="flex ">
        <div className="relative flex items-center">
            <Button className="gap-1.5"> {category.label} </Button> </div>
    </div>)

}


export default NavItem