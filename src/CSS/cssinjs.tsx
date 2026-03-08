import React from "react";
import styled, { createGlobalStyle } from "styled-components";

`;
// 1. 使用样式继承
// const ButtonBase = styled.button`;
//   padding: 10px 20px;
//   border-radius: 5px;
//   color: white;
//   cursor: pointer;
//   margin: 10px;
//   &:hover {
//     color: black;
//   }
// `;

// const PinkButton = styled(ButtonBase)`
//   background: hotpink;
//   border-radius: 20px;
// `;

// const BlueButton = styled(ButtonBase)`
//   background: blue;
//   border-radius: 20px;
// `;

// const TextButton = styled(ButtonBase)`
//   background: hotpink;
//   color: blue;
// `;

// const CssInJs: React.FC = () => {
//   return (
//     <>
//       <PinkButton>点击看帝师的龙</PinkButton>
//       <BlueButton>点击看帝师的龙</BlueButton>
//       <TextButton>点击看帝师的龙</TextButton>
//     </>
//   );
// };
//2. 创建全局样式
// const GlobalStyle = createGlobalStyle`
//  body {
//     background: pink;
//     font-color: black
//   },
//     * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   },
//     ul,ol{
//       list-style: none;
//   }
// `;

// const CssInJs: React.FC = () => {
//   return (
//     <>
//       <GlobalStyle />
//     </>
//   );
// };
// export default CssInJs;
