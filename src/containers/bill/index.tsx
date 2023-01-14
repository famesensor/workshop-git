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
import { Text } from '@style/index'
import { Col, Row, Table } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import { ReactElement } from 'react'

const BillContainer = (): ReactElement => {
  const columns: ColumnsType<Product> = [
    {
      title: 'จำนวน',
      dataIndex: 'quantity',
      key: 'quantity',
      width: 20,
    },
    {
      title: 'รายการ',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'ราคาต่อหน่วย',
      dataIndex: 'price',
      key: 'price',
      width: 100,
    }, 
    {
      title: 'ราคาทั้งหมด',
      width: 20,
      render: (data) => {
        return <Text>{data.quantity * data.price}</Text>
      }
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
            <Col span={16}>
              <TitleNoMargin level={5}>นาม</TitleNoMargin>
              <TitleNoMargin level={5}>Name ________________________________________</TitleNoMargin>
            </Col>
            <Col span={8}>
              <TitleNoMargin level={5}>วันที่</TitleNoMargin>
              <TitleNoMargin level={5}>Date _________________</TitleNoMargin>
            </Col>
            <Col span={16}>
              <TitleNoMargin level={5}>ที่อยู่</TitleNoMargin>
              <TitleNoMargin level={5}>Address ______________________________________</TitleNoMargin>
            </Col>
            <Col span={8}>
              <TitleNoMargin level={5}>เลขผู้เสียภาษี</TitleNoMargin>
              <TitleNoMargin level={5}>TaxId _________________</TitleNoMargin>
            </Col>
          </Row>
        </StyledSubHeaderDetail>
        {/* Content */}
        <Table columns={columns} dataSource={dataProducts} pagination={false} summary={(data) => {
          const total = data.reduce((prev,curr) => prev + curr.price, 0)
          return (
            <Table.Summary>
              <Table.Summary.Row>
                <Table.Summary.Cell index ={0} colSpan={3} align={'right'}>
                  จำนวนเงิน
                </Table.Summary.Cell>
                <Table.Summary.Cell index ={1} align={'center'}>
                  {total}
                </Table.Summary.Cell>
              </Table.Summary.Row>
            </Table.Summary>
          )
        }} />
      </StyledWrapper>
    </StyledLayout>
  )
}
export default BillContainer
