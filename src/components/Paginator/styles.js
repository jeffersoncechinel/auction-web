import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.css'

export const Container = styled.div`
  .page-link {
    display: inline;
    color: #452d0a;
  }

  .page-item.active .page-link {
    z-index: 3;
    color: #fff;
    background-color: #1d3198;
    border-color: #1d3198;
  }
`
