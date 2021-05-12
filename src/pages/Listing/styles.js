import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  form {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-auto-columns: 100px;

    @media (max-width: 900px) {
      grid-template-columns: none;
      grid-template-rows: 1fr 2fr 1fr
    }

    .flexContainer {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      flex: 1;
    }

    button {
      color: #fff;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      transition: 0.1s;
      width: 150px;
      min-height: 42px;
    }

    .priceSort {
      background-color: #8d8a8a;
      svg {
        margin-left: 5px;
      }
    }

    .searchButton {
      background: #1d3198;

      svg {
        margin-right: 5px;
      }
    }

    input {
      flex: 1;
      background-color: transparent;
      border: 0;
      color: #452d0a;
      width: 400px;
      min-height: 40px;
      // margin: 0 auto;

      @media (max-width: 900px) {
        width: 300px;
      }

      &::placeholder {
        color: #d9d4d4;
      }
    }
  }
`

export const ItemsContainer = styled.div`
  max-width: 1280px;
  padding: 40px 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 16px;
  margin: 16px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }

  header {
    display: flex;
    align-self: center;
    align-items: center;

    button {
      border: 0;
      background: none;
    }

    strong {
      color: #fff;
      font-size: 24px;
      margin: 0 15px;
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 30px;
  }
`

export const Time = styled.li`
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  opacity: ${(props) => (props.past ? 0.6 : 1.0)};

  strong {
    display: block;
    color: ${(props) => (props.available ? '#999' : '#7159c1')};
    font-size: 20px;
    font-weight: normal;
  }

  span {
    display: block;
    margin-top: 3px;
    color: ${(props) => (props.available ? '#999' : '#666')};
  }
`

export const PaginatorContainer = styled.div`
  margin-top: 40px;
`
