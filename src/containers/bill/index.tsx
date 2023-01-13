import { dataProducts } from '@containers/bill/constants'
import { Product } from '@containers/bill/interface'
import {
  StyledEmptyBox,
  StyledHeader,
  StyledLayout,
  StyledSubHeader,
  StyledSubHeaderDetail,
  StyledWrapper,
  TitleNoMargin
} from '@containers/bill/style'
import { Col, Row, Table } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import { ReactElement } from 'react'

const BillContainer = (): ReactElement => {
  const columns: ColumnsType<Product> = [
    {
      title: 'รายการ',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'จำนวน',
      dataIndex: 'total',
      key: 'quantity'
    }
  ]

  return (
    <StyledLayout>
      <StyledWrapper>
        {/* Header */}
        <StyledHeader>
          <Row gutter={[8, 8]}>
            <Col span={7}>
              <TitleNoMargin level={5}>เล่มที่</TitleNoMargin>
              <TitleNoMargin level={5}>Book no. ___________</TitleNoMargin>
            </Col>
            <StyledEmptyBox flex={1} />
            <Col span={7}>
              <TitleNoMargin level={5}>เลขที่</TitleNoMargin>
              <TitleNoMargin level={5}>Bill no. ___________</TitleNoMargin>
            </Col>
          </Row>
        </StyledHeader>
        <StyledSubHeader>
          <TitleNoMargin level={4}>บิลเงินสด</TitleNoMargin>
        </StyledSubHeader>
        <StyledSubHeaderDetail>
          <Row>
            <Col span={24}>
              <TitleNoMargin level={5}>นาม</TitleNoMargin>
              <TitleNoMargin level={5}>Name _________________________________________________________</TitleNoMargin>
            </Col>
            <Col span={24}>
              <TitleNoMargin level={5}>วันที่</TitleNoMargin>
              <TitleNoMargin level={5}>Date __________________________________________________________</TitleNoMargin>
            </Col>
            <Col span={24}>
              <TitleNoMargin level={5}>เลขผู้เสียภาษี</TitleNoMargin>
              <TitleNoMargin level={5}>TaxId __________________________________________________________</TitleNoMargin>
            </Col>
            <Col span={24}>
              <TitleNoMargin level={5}>ที่อยู่</TitleNoMargin>
              <TitleNoMargin level={5}>Address _______________________________________________________</TitleNoMargin>
            </Col>
          </Row>
        </StyledSubHeaderDetail>
        {/* Content */}
        <Table columns={columns} dataSource={dataProducts} pagination={false} />
      </StyledWrapper>
    </StyledLayout>
  )
}
export default BillContainer
