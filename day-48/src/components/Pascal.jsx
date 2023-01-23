// export default function Pascal() {
//   const n = 5;

//   function pascalTriangle(n) {
//     var triangle = [];
//     for (var i = 0; i < n; i++) {
//       triangle[i] = new Array(i + 1);
//       for (var j = 0; j < i + 1; j++) {
//         if (j === 0 || j === i) {
//           triangle[i][j] = 1;
//         } else {
//           triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
//         }
//       }
//     }
//     return triangle;
//   }

//   const pascals = pascalTriangle(n);

//   let htmlElement = " ";
//   for (let i = 0; i < pascals.length; i++) {
//     for (let j = 0; j < pascals[i].length; j++) {
//       htmlElement += pascals[i][j];
//     }
//     htmlElement += "<br/>";
//   }

//   return (
//     <div>
//       <h1>Pascal Triangle</h1>
//       {/* {htmlElement} */}
//     </div>
//   );
// }

// import React from "react";

// class PascalTriangle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       triangle: [],
//     };
//   }

//   componentDidMount() {
//     this.generateTriangle();
//   }

//   generateTriangle() {
//     const numRows = this.props.numRows;
//     var triangle = [];
//     for (var i = 0; i < numRows; i++) {
//       triangle[i] = new Array(i + 1);
//       for (var j = 0; j < i + 1; j++) {
//         if (j === 0 || j === i) {
//           triangle[i][j] = 1;
//         } else {
//           triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
//         }
//       }
//     }
//     this.setState({ triangle });
//   }

//   render() {
//     const { triangle } = this.state;
//     return (
//       <div>
//         {triangle.map((row, i) => {
//           return (
//             <div key={i}>
//               {row.map((element, j) => {
//                 return <span key={j}>{element}</span>;
//               })}
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
// }

// export default PascalTriangle;
