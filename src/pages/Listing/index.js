import React, { useCallback, useEffect, useRef, useState } from 'react'
import api from '~/services/api'
import Paginator from '~/components/Paginator'
import Item from '~/components/Item'
import Input from '~/components/Input'
import { useParams } from 'react-router-dom'
import { Form } from '@unform/web'
import { FaChevronDown, FaChevronUp, FaSearch } from 'react-icons/all'
import { useDispatch, useSelector } from 'react-redux'
import { listingRequest } from '~/store/modules/listing/action'
import { Container, SearchBar, ItemsContainer, PaginatorContainer } from './styles'
import { itemClear } from '~/store/modules/item/action'

export default function Listing() {
  const [priceSort, setPriceSort] = useState(null)
  const [searchText, setSearchText] = useState(null)
  const formRef = useRef(null)
  const { page } = useParams()

  const dispatch = useDispatch()
  // const loading = useSelector((state) => state.listing.loading)
  const items = useSelector((state) => state.listing.data)

  const paginationData = {
    current_page: useSelector((state) => state.listing.current_page),
    per_page: useSelector((state) => state.listing.per_page),
    total: useSelector((state) => state.listing.total),
  }

  useEffect(() => {
    dispatch(itemClear())
    if (page) {
      handlePage(page)
    } else {
      handlePage(paginationData.current_page)
    }
  }, [searchText, priceSort])

  const handlePage = useCallback((pageNumber) => {
    dispatch(listingRequest({pageNumber, priceSort, searchText}))
  }, [searchText, priceSort])

  const handleSubmit = useCallback((data) => {
    async function searchItems() {
      setSearchText(data.searchText)
    }
    searchItems();
  }, [])

  const handlePriceSort = useCallback(() => {
    setPriceSort(!priceSort)
  }, [priceSort])

  return (
    <Container>
      <SearchBar>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <div className={'flexContainer'}>
          <button
            type='button'
            className={'priceSort'}
            onClick={handlePriceSort}>
            Sort Price
            {priceSort && <FaChevronDown /> }
            {!priceSort && <FaChevronUp /> }
          </button>
        </div>
          <div className={'flexContainer'}>
          <Input name='searchText' placeholder='search by name or description' />
          </div>
          <div className={'flexContainer'}>
          <button type='submit' className={'searchButton'}><FaSearch/> Search</button>
          </div>
        </Form>
      </SearchBar>
      <PaginatorContainer>
        {paginationData && <Paginator data={paginationData} setPage={handlePage}/> }
      </PaginatorContainer>
      <ItemsContainer>
        {items &&
        items.map(item => (
          <Item
            key={item.id}
            item={item}
          />
        ))}
      </ItemsContainer>
    </Container>
  )
}
