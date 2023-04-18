import { BookDetails } from '../cmps/BookDetails'
import { BookList } from '../cmps/BookList'

export const BookIndex = () => {
  return (
    <section className="book-index main-container full">
      <section className="flex justify-between align-center">
        <BookDetails />
        <BookList />
      </section>
    </section>
  )
}
