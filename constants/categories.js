export const ALL_ID = 0
export const COMPILATION_ID = 1
export const AUDIO_BOOKS_ID = 2
export const PRINTED_BOOKS_ID = 3
export const E_BOOKS_ID = 4

export const CATEGORIES = [
  {
    id: ALL_ID,
    link: '/books/categories',
    title: 'All',
    icon: '/images/icons/all.png'
  },
  {
    id: COMPILATION_ID,
    link: '/books/categories/compilations',
    title: 'Compilations',
    icon: '/images/icons/compilations.png'
  },
  {
    id: AUDIO_BOOKS_ID,
    link: '/books/categories/audio-books',
    title: 'Audio books',
    icon: '/images/icons/audio.png'
  },
  {
    id: PRINTED_BOOKS_ID,
    link: '/books/categories/printed-books',
    title: 'Printed books',
    icon: '/images/icons/book.png'
  },
  {
    id: E_BOOKS_ID,
    link: '/books/categories/e-books',
    title: 'E-books',
    icon: '/images/icons/pdf.png'
  }
]
