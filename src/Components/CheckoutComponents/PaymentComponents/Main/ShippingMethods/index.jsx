import React,{useState} from "react";

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import "./style.css";

const ShippingMethods = () => {
    const [shippingMethod, setShippingMethod] = useState('Giao Trong Ngày');

  const handleChangeShipping = (event) => {
    setShippingMethod(event.target.value);
  };
  return (
      <div className="styles__Left-hcztvk-1 ggAFge">
    <div className="container styles__Section-hcztvk-0 fwsEni">
      <h3 className="title">1. Chọn hình thức giao hàng</h3>
      <div className="ShippingMethods__StyledShippingMethods-sc-10myobp-0 iWIiNj">
      <FormControl component="fieldset">
      <RadioGroup aria-label="gender" name="shipping" value={shippingMethod} onChange={handleChangeShipping}>
      <div className="ShippingMethods__StyledMethod-sc-10myobp-1 fFyyxJ">
        <FormControlLabel value="Giao Trong Ngày" control={<Radio />} label="Giao Trong Ngày" />
        </div>
      <div className="ShippingMethods__StyledMethod-sc-10myobp-1 fFyyxJ">
        <FormControlLabel value="Giao Tiêu Chuẩn" control={<Radio />} label="Giao Tiêu Chuẩn" />
        </div>
      </RadioGroup>
    </FormControl>
      
      </div>
    </div>
    </div>
  );
};
export default ShippingMethods;
