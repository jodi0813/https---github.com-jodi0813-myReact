function component() {
    return <h1>React</h1>;
}


function App() {
    const listitem = [
        <component key="0" />,
        <component key="1" />
    ]
    const listBooks = [
        { bookName: "HTML", id: "book1" },
        { bookName: "CSS", id: "book2" },
        { bookName: "JavaScript", id: "book3" },
    ]
    const filterBooks = listBooks.filter((book) => {
        if (book.bookName != "CSS") {
            return true
        }
    })




    return (
        <>

            {
                listBooks.map((book) => {
                    return <div key={book.id}>{book.bookName}</div>
                })
            }

            <hr />


            {
                filterBooks.map((book) => {
                    return <div key={book.id}>{book.bookName}</div>
                })
            }




        </>
    )
}
export default App