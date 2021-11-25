import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styled from 'styled-components';

const MainComponent = styled.div`
  .title {
    text-align: center;
    font-size: 2rem;
  }
  .content {
    margin: 0 3rem;
  }
  .header {
    font-weight: bold;
  }
`;

export default function PrivatePolicy() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
        <MainComponent>
          <div className="title">
            Privacy policy
          </div>
          <div className="content">
            <div className="header">1. Introduction</div>
            <div className="description">
              Egallery Apps provide applications "the Service" to merchants who use Shopify to power their stores. This Privacy Policy describes how personal information is collected, used, and shared when you install or use the App in connection with your Shopify-supported store.
            </div>
          </div>
        </MainComponent>
      </main>
    </Layout>
  );
}
