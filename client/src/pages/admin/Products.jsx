import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Layout from '../../components/Layout';
import AdminLogout from '../../components/admin/AdminLogout';
import AdminSidebar from '../../components/admin/AdminSidebar';

function Products() {
  return (
    <Layout>
      <Row style={{ height: '100vh' }}>
        <Col sm={12} md={2} lg={2} className="shadow">
          <AdminSidebar />
          <AdminLogout />
        </Col>
        <Col sm={12} md={10} lg={10}>
          <h1>Products</h1>
        </Col>
      </Row>
    </Layout>
  );
}

export default Products;
