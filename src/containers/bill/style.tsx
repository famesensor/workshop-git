import { Title } from '@style/index'
import { Col, Layout, Space } from 'antd'
import styled from 'styled-components'

export const StyledLayout = styled(Layout)`
  height: 100vh;
  max-width: 992px;
  margin: auto;
  background-color: #fff;
`

export const StyledWrapper = styled.div`
  border: 2px solid black;
  border-radius: 10px;

  height: 100%;
  width: 600px;
  margin: auto;
`

export const StyledHeader = styled.div`
  padding: 14px;
`

export const StyledEmptyBox = styled(Col)`
  border-radius: 10px;
  background-color: #3b92db;
`

export const StyledSubHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  height: 50px;
  background-color: #3b92db;
`

export { StyledHeader as StyledSubHeaderDetail }

export const FullSpace = styled(Space)`
  width: 100%;
`

export const TitleNoMargin = styled(Title)`
  margin: 0px !important;
`
