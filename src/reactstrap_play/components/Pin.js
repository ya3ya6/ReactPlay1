import React, { Component } from "react";
import "./Pin.css";
const PINICON =
  "m10.770095,21.153251c0,0 -7.862958,-6.153619 -7.777491,-10.5979c0.085467,-4.444281 4.016946,-5.555351 7.26469,-5.555351c3.247744,0 6.666421,1.452938 6.751888,5.726285c0.085467,4.273347 -6.239086,10.426966 -6.239086,10.426966z";
//"M17.592,8.936l-6.531-6.534c-0.593-0.631-0.751-0.245-0.751,0.056l0.002,2.999L5.427,9.075H2.491c-0.839,0-0.162,0.901-0.311,0.752l3.683,3.678l-3.081,3.108c-0.17,0.171-0.17,0.449,0,0.62c0.169,0.17,0.448,0.17,0.618,0l3.098-3.093l3.675,3.685c-0.099-0.099,0.773,0.474,0.773-0.296v-2.965l3.601-4.872l2.734-0.005C17.73,9.688,18.326,9.669,17.592,8.936 M3.534,9.904h1.906l4.659,4.66v1.906L3.534,9.904z M10.522,13.717L6.287,9.48l4.325-3.124l3.088,3.124L10.522,13.717z M14.335,8.845l-3.177-3.177V3.762l5.083,5.083H14.335z";
// `M256,0C156.748,0,76,80.748,76,180c0,33.534,9.289,66.26,26.869,94.652l142.885,230.257c2.737,4.411,7.559,7.091,12.745,7.091c0.04,0,0.079,0,0.119,0c5.231-0.041,10.063-2.804,12.75-7.292L410.611,272.22C427.221,244.428,436,212.539,436,180C436,80.748,355.252,0,256,0z M384.866,256.818L258.272,468.186l-129.905-209.34C113.734,235.214,105.8,207.95,105.8,180c0-82.71,67.49-150.2,150.2-150.2S406.1,97.29,406.1,180C406.1,207.121,398.689,233.688,384.866,256.818z`;
export default class Pin extends Component {
  render() {
    const { data, markertitle } = this.props;
    const { text } = data;
    return (
      <div title={markertitle}>
        <svg
          style={{ fill: "#ce0808", height: "20px", width: "20px" }}
          className="svg"
        >
          {<path d={PINICON} style={{ transform: "scale(1)" }}></path>}

          {/*<text x="0" y="10" fill="black">
          {text}
         </text>*/}
        </svg>
      </div>
    );
  }
}
