import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styled from 'styled-components';

const MainComponent = styled.div`
  font-family: "PT Sans", arial, sans-serif;
  .title {
    text-align: center;
    font-size: 4rem;
  }
  .content {
    margin: 0 3rem;
  }
  .header {
    font-weight: bold;
    font-size: 26px;
  }
  .description {
    line-height: 1.75;
    margin: 0 0 25px;
    font-size: 20px;
    color: #8a8a8a;
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

            <div className="description">
              We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.
            </div>

            <div className="header">2. Collected Data</div>
            <div className="description">
              After you install any of our apps, we store your myshopify domain as well as the email associated with your store. This is only to provide you with better customer support and is kept strictly confidential from third parties.
              We do not use cookies and we don’t track your activity while you’re using our apps.
            </div>
            <div className="description">
              We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorised access, disclosure, copying, use or modification.
            </div>
            <div className="description">
              We don’t share any personally identifying information publicly or with third-parties, except when required to by law.
            </div>
            <div className="description">
              You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.
            </div>
            <div className="description">
              Your continued use of our apps will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.
            </div>
          </div>
        </MainComponent>
      </main>
    </Layout>
  );
}
