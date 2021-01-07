// import React from "react";
// import { Layout, Row, Col } from "antd";
// import Header from "../common/Header";
// import Footer from "../common/Footer";
// import styled from "styled-components";
// import AppLayout from "./AppLayout";

// const Content = Layout.Content;

// const ContentWrapper = styled(Content)`
//     background: #fff;
//     padding: 0 50px;
//     margin-top: 65px;
// `;

// const HomeLayout = ({ children }) => {
//     return (
//         <AppLayout>
//             <Layout>
//                 <Header />
//                 <ContentWrapper>
//                     <Row gutter={8}>
//                         <Col
//                             xs={24}
//                             sm={6}
//                             md={6}
//                             style={{ border: "1px solid black" }}
//                         ></Col>
//                         <Col
//                             xs={24}
//                             sm={12}
//                             md={12}
//                             style={{ border: "1px solid black" }}
//                         >
//                             {children}
//                         </Col>
//                         <Col
//                             xs={24}
//                             sm={6}
//                             md={6}
//                             style={{ border: "1px solid black" }}
//                         ></Col>
//                     </Row>
//                 </ContentWrapper>
//                 <Footer />
//             </Layout>
//         </AppLayout>
//     );
// };

// HomeLayout.propTypes = {
//     // children: PropTypes.node.isRequired,
// };

// export default HomeLayout;
