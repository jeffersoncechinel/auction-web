import React from 'react'
import Pagination from 'react-js-pagination/src/components/Pagination'
import { Container } from './styles'

const Paginator = (props) => {
  const { current_page, per_page, total = 0 } = props.data

  return (
    <Container>
      <Pagination
        activePage={current_page}
        onChange={(pageNumber) => props.setPage(pageNumber)}
        totalItemsCount={total}
        itemsCountPerPage={per_page}
        itemClass={'page-item'}
        linkClass={'page-link'}
        firstPageText={'First'}
        lastPageText={'Last'}
      />
    </Container>
  )
}

export default Paginator
