import React from "react";
import { ProductConsumer } from "../../context/context";
import styled from "styled-components";

export default function Footer() {
  return (
    <ProductConsumer>
      {value => {
        return (
          <FooterWrapper>
            <div className="container py-3">
              <div className="row">
                <div className="col-md-6">
                  <p className="text-capitalize">
                    copyright &copy; {new Date().getFullYear()} Tech store @ All
                    right Reserved
                  </p>
                </div>
                <div className="col-md-6 d-flex justify-content-around">
                  {value.socialIcons.map(icon => (
                    <a
                      href={icon.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={icon.id}
                    >
                      {icon.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </FooterWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const FooterWrapper = styled.footer`
  background: var(--darkGrey);
  color: var(--mainWhite);
  .icon {
    font-size: 1.5rem;
    color: var(--mainWhite);
    transition: var(--mainTransition);
    &:hover {
      color: var(--primaryColor);
      cursor: pointer;
    }
  }
`;
