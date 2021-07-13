import styles from "../../Users/Users.module.css";
import React, {useState} from "react";

type PropsType = {
    itemsCount: number
    pageSize: number
    currentPage: number
    getUsers: (pageSize: number, page: number) => void
    portionSize: number
}


const Paginator: React.FC<PropsType> = ({itemsCount, pageSize, currentPage, getUsers, portionSize}) => {
    let pagesCount = Math.ceil(itemsCount / pageSize)
    let portionsCount = Math.ceil(pagesCount / portionSize)
    let [numberOfDisplayPortion, setNumberOfDisplayPortion] = useState(1)
    let pages = [];
    let leftBorder = (numberOfDisplayPortion - 1) * portionSize + 1;
    let rightBorder = portionSize * numberOfDisplayPortion;
    for (let i = leftBorder; i <= (rightBorder < pagesCount ? rightBorder : pagesCount); i++) {
        pages.push(i);
    }
    return (
        <div>
            {numberOfDisplayPortion > 1 &&
            <button onClick={() => setNumberOfDisplayPortion(numberOfDisplayPortion - 1)}>
                Prev
            </button>}
            {
                pages.map((page) => {
                    return <span key={page} className={page === currentPage ? styles.current : undefined}
                                 onClick={() => {
                                     getUsers(pageSize, page)
                                 }}>
                {page}.
                </span>
                })
            }
            {numberOfDisplayPortion !== portionsCount &&
            <button onClick={() => setNumberOfDisplayPortion(numberOfDisplayPortion + 1)}>
                Next
            </button>}
        </div>
    )
}

export default Paginator;