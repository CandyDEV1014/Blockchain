import React from 'react';

import { Row, Col, Grid, Button, Glyphicon } from 'react-bootstrap';
import FilterLink from './FilterLink';

/**
 * Class FilterBrowser
 *
 * Filtering offers
 * All | Video | Images | Text Only
 */
class FilterBrowser extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const filters = this.props.items.map((filter, i) => <FilterLink key={i} filter={filter.value}>{filter.name}</FilterLink>);
    return (
      <Row>
        <Col xs={12}>
          <center>
            {filters}
          </center>
        </Col>
      </Row>
    );
  }
}

export default FilterBrowser;
