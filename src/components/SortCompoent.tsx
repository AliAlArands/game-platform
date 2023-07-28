import { ChevronDownIcon } from "@chakra-ui/icons"
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"

export interface SortType {
    value: string,
    label: string,
}

interface Props {
    selectSorting: (sorting: SortType) => void,
    sorting: SortType ,
}

const SortCompoent = ({ selectSorting, sorting }: Props) => {
    const sortOrders = [
        { value: "", label: "Relevance" },
        { value: "-added", label: "Date added" },
        { value: "name", label: "Name" },
        { value: "-released", label: "Release date" },
        { value: "-metacritic", label: "Popularity" },
        { value: "-rating", label: "Average rating" },

    ]
    return (
        <>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />} mx="10px" p="15px" fontSize="1.5rem" fontWeight="bold">Order by: {sorting?.label || "Relevance"}
                </MenuButton>
                <MenuList>
                    {sortOrders.map((sortType, index) => <MenuItem key={index} fontSize="1.5rem" value={sortType.value} onClick={() => selectSorting(sortType)}>{sortType.label}</MenuItem>)}
                </MenuList>
            </Menu>
        </>
    )
}

export default SortCompoent