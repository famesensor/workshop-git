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
import { Col, Input, Row, Table } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import { ReactElement } from 'react'

const BillContainer = (): ReactElement => {
  const columns: ColumnsType<Product> = [
    {
      title: 'รายการ',
      dataIndex: 'name',
      key: 'name'
    }
  ]

  return (
    <StyledLayout>
      <StyledWrapper>
        {/* Header */}
        <StyledHeader>
          <Row gutter={[8, 8]}>
            <Col span={7}>
            <Input prefix="เล่มที่"/>
            </Col>
            <StyledEmptyBox flex={1} />
            <Col span={7}>
            <Input prefix="Bill no." />
            </Col>
          </Row>
        </StyledHeader>
        <StyledSubHeader>
          <TitleNoMargin level={4}>บิลเงินสด</TitleNoMargin>
        </StyledSubHeader>
        <StyledSubHeaderDetail>
          <Row>
            <Col span={16}>
              <Input prefix="name" />

            </Col>
            <Col span={8}>
            <Input prefix="วันที่" />
            </Col>
            <Col span={16}>
            <Input prefix="ที่อยู่" />
            </Col>
            <Col span={8}>
            <Input prefix="เลขผู้เสียภาษี" />
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
