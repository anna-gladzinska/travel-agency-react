import React from 'react';
import PropTypes from 'prop-types';
import OrderSummary from '../OrderSummary/OrderSummary';
import { Row, Col, Grid } from 'react-flexbox-grid';
import OrderOption from '../OrderOption/OrderOption';
import pricing from '../../../data/pricing.json';
import { formatPrice } from '../../../utils/formatPrice';
import { calculateTotal } from '../../../utils/calculateTotal';
import settings from '../../../data/settings';
import Button from '../../common/Button/Button';

const sendOrder = (options, tripCost, name, id) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    nameTrip: name,
    idTrip: id,
    costTrip: totalCost,
    ...options,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function (response) {
      return response.json();
    }).then(function (parsedResponse) {
      console.log('parsedResponse', parsedResponse);
    });
};

const validation = (options, name, id, tripCost) => {
  const { yourName, contactInfo } = options;
  if (yourName == '' && contactInfo == '') {
    window.alert('Your name and contact info fields are empty!');
  } else if (yourName == '') {
    window.alert('Your name field is empty!');
  } else if (contactInfo == '') {
    window.alert('Constact info field is empty!');
  } else {
    sendOrder(options, tripCost, name, id);
  }
};

class OrderForm extends React.Component {
  render() {
    const { options, tripCost, setOrderOption, name, id } = this.props;
    return (
      <Grid>
        <Row>

          {pricing.map(option => (
            <Col md={4} key={option.id} >
              <OrderOption {...option} currentValue={options[option.id]} setOrderOption={setOrderOption} />
            </Col>
          ))}

          <Col xs={12}>
            <OrderSummary cost={tripCost} options={options} />
            <Button variant='order' onClick={() => validation(options, name, id, tripCost)}>Order now!</Button>

          </Col>
        </Row>
      </Grid>
    );
  }
}

OrderForm.propTypes = {
  options: PropTypes.object,
  tripCost: PropTypes.string,
  setOrderOption: PropTypes.func,
  name: PropTypes.string,
  id: PropTypes.number,
};

export default OrderForm;
