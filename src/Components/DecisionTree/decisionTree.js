import React from 'react';
import decisionChart from './decision.svg';
class DecisionTree extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <img src={decisionChart} alt="GPM prievolės logika" />
      </div>
    );
  }

}

export default DecisionTree;
