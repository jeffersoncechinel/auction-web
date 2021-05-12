import styled from 'styled-components'

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }

    a {
      font-weight: bold;
      color: #452d0a;
    }
  }

  /* profile area */
  aside {
    display: flex;
    align-items: center;
  }
`

export const Profile = styled.div`
  display: flex;
  padding-left: 20px;
  border-left: 1px solid #d9d4d4;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #333;
    }

    span {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #452d0a;
    }

    span:hover {
      cursor: pointer;
    }
  }

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`

export const Settings = styled.div`
  margin-right: 5px;
  a {
    color: #452d0a;
  }

  a:visited {
    color: #452d0a; ;
  }
`;
