import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import { media } from '../tokens'

const Card = ({
  backgroundColor = '#E75248',
  image,
  title,
  description,
  link
}) => (
  <Link
    to={link}
    aria-label={`View ${ title }`}
    css={css`
      * {
        color: white;
        margin: 10px;
      }
      text-decoration: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
      h4 {
        font-size: 22px;
        padding: '40px 40px 0 40px';
      }
      p {
        padding: 20px 40px 0 40px;
        font-size: 16px;
        opacity: 0.85;
        @media ${ media.medium } {
          padding: 20px 20px 0 40px;
        }
      }
      @media ${ media.medium } {
          flex-direction: column;
          align-items: center;
        }
        align-items: flex-start;
        flex-direction: column;
        img {
          margin-top: 20px;
        }
      }
      background: ${ backgroundColor };
      overflow: hidden;
      border-radius: 5px;
      margin-bottom: '0';
      @media (hover: hover) {
      :hover:not(.touch) {
        transform: scale(1.01);
        box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.15);
      }
      }
    `}
  >
    <div>
      <h4>{title}</h4>
      {description && <p>{description}</p>}
    </div>
  </Link>
)

export default Card
